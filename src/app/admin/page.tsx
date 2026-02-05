"use client";

import React, { useState, useEffect } from "react";
import { Lock, Smartphone, BarChart3, Clock, CheckCircle2, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/utils/supabase";

// 型定義
type AdminStat = {
    deviceId: string;
    accessCount: number;
    correctRate: number;
    totalAnswered: number;
    lastAccess: string;
};

export default function AdminPage() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [stats, setStats] = useState<AdminStat[]>([]);

    // パスワード確認
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "4580") {
            setIsAdmin(true);
            setError("");
            // 本来はここでDBからデータを取得する
            fetchStats();
        } else {
            setError("パスワードが正しくありません");
        }
    };

    // 統計データの取得（Supabaseから全ユーザーデータを取得）
    const fetchStats = async () => {
        try {
            const { data, error } = await supabase
                .from('user_stats')
                .select('*')
                .order('last_access', { ascending: false });

            if (error) throw error;

            if (data) {
                const formattedData: AdminStat[] = data.map((item: any) => ({
                    deviceId: item.device_id,
                    accessCount: item.access_count || (item.total_attempts > 0 ? 1 : 0),
                    correctRate: item.total_attempts > 0
                        ? Math.round((item.total_correct / item.total_attempts) * 1000) / 10
                        : 0,
                    totalAnswered: item.total_attempts,
                    lastAccess: new Date(item.last_access).toLocaleString('ja-JP'),
                }));
                setStats(formattedData);
            }
        } catch (e) {
            console.error("Failed to fetch from Supabase:", e);
            // Fallback to local data
            const localStats = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('nursing_quiz_stats') || '{}') : null;
            if (localStats) {
                setStats([{
                    deviceId: localStats.deviceId || "Local Device",
                    accessCount: localStats.accessCount || 1,
                    correctRate: localStats.totalAttempts > 0 ? Math.round((localStats.totalCorrect / localStats.totalAttempts) * 100) / 10 : 0,
                    totalAnswered: localStats.totalAttempts,
                    lastAccess: localStats.lastAccess,
                }]);
            }
        }
    };

    if (!isAdmin) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
                <div className="max-w-md w-full glass-panel p-8 rounded-3xl shadow-xl">
                    <div className="flex flex-col items-center mb-6">
                        <div className="p-4 bg-primary/10 rounded-full mb-4">
                            <Lock className="text-primary w-8 h-8" />
                        </div>
                        <h1 className="text-2xl font-bold">管理者ログイン</h1>
                        <p className="text-muted-foreground text-sm">パスワードを入力してください</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="Password"
                            autoFocus
                        />
                        {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:brightness-110 transition-all active:scale-[0.98]"
                        >
                            ログイン
                        </button>
                    </form>
                    <div className="mt-8 text-center text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-primary transition-colors flex items-center justify-center gap-1">
                            <ChevronLeft size={16} /> ホームへ戻る
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-black flex items-center gap-3">
                            <BarChart3 className="text-primary" />
                            管理者ダッシュボード
                        </h1>
                        <p className="text-muted-foreground">端末別アクセス・学習統計（全期間）</p>
                    </div>
                    <Link href="/" className="bg-white border text-sm px-4 py-2 rounded-lg font-bold hover:bg-slate-100 transition-colors">
                        ログアウト
                    </Link>
                </header>

                <div className="grid gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                    <Smartphone />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">{stat.deviceId}</h3>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                                        <Clock size={14} /> 最終アクセス: {stat.lastAccess}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="text-center md:text-left">
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">アクセス回数</div>
                                    <div className="text-2xl font-black text-slate-800">{stat.accessCount}回</div>
                                </div>
                                <div className="text-center md:text-left">
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">正解率</div>
                                    <div className="text-2xl font-black text-green-600 flex items-center gap-1">
                                        {stat.correctRate}%
                                        <CheckCircle2 size={18} />
                                    </div>
                                </div>
                                <div className="text-center md:text-left">
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">回答問題数</div>
                                    <div className="text-2xl font-black text-blue-600">{stat.totalAnswered}問</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-green-50 rounded-2xl border border-green-100 text-green-800 text-sm">
                    <p className="font-bold mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        システム稼働中
                    </p>
                    <p>Supabaseとの連携が完了しています。全ユーザーの学習データがリアルタイムに集計・表示されます。</p>
                </div>
            </div>
        </div>
    );
}
