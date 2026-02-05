"use client";

import { supabase } from './supabase';

export type TargetLevel = 'beginner' | 'mid' | 'transfer' | 'all';

export type Question = {
    id: number;
    category: string;
    subCategory: string; // サブカテゴリを追加
    question: string;
    options: string[];
    correctAnswerIndex: number;
    explanation: string;
    evidence: string; // 根拠を追加
    reference: string;
    image?: string; // 画像URL（オプション）
    targetLevels?: TargetLevel[]; // 対象レベル（オプション）
};

export type QuizResult = {
    questionId: number;
    isCorrect: boolean;
    timestamp: number;
};

export type UserStats = {
    totalAttempts: number;
    totalCorrect: number;
    questionStats: Record<number, { attempts: number; correct: number }>;
    deviceId?: string;
    lastAccess?: string;
    accessCount: number; // 累計アクセス数
};

const STORAGE_KEY = 'nursing_quiz_stats'; // 感染対策アプリと区別
const SESSION_KEY = 'nursing_quiz_session'; // セッション管理用キー

export const saveQuizResult = (results: QuizResult[]) => {
    if (typeof window === 'undefined') return;

    const currentStats = getStats();

    results.forEach(result => {
        currentStats.totalAttempts += 1;
        if (result.isCorrect) {
            currentStats.totalCorrect += 1;
        }

        if (!currentStats.questionStats[result.questionId]) {
            currentStats.questionStats[result.questionId] = { attempts: 0, correct: 0 };
        }

        currentStats.questionStats[result.questionId].attempts += 1;
        if (result.isCorrect) {
            currentStats.questionStats[result.questionId].correct += 1;
        }
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentStats));
    syncStatsToSupabase(currentStats);
};

export const syncStatsToSupabase = async (stats: UserStats) => {
    if (!stats.deviceId || !process.env.NEXT_PUBLIC_SUPABASE_URL) return;

    try {
        const { error } = await supabase
            .from('user_stats')
            .upsert({
                device_id: stats.deviceId,
                total_attempts: stats.totalAttempts,
                total_correct: stats.totalCorrect,
                last_access: new Date().toISOString(),
                question_stats: stats.questionStats,
                access_count: stats.accessCount // カラム追加が必要
            }, { onConflict: 'device_id' });

        if (error) console.error("Supabase sync error:", error);
    } catch (e) {
        console.error("Failed to sync with Supabase:", e);
    }
};

export const getStats = (): UserStats => {
    if (typeof window === 'undefined') {
        return { totalAttempts: 0, totalCorrect: 0, questionStats: {}, accessCount: 0 };
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    let stats: UserStats;

    if (!stored) {
        stats = { totalAttempts: 0, totalCorrect: 0, questionStats: {}, accessCount: 0 };
    } else {
        try {
            stats = JSON.parse(stored);
            // 既存データへの後方互換性
            if (typeof stats.accessCount === 'undefined') {
                stats.accessCount = 1;
            }
        } catch (e) {
            console.error("Failed to parse stats", e);
            stats = { totalAttempts: 0, totalCorrect: 0, questionStats: {}, accessCount: 0 };
        }
    }

    // デバイスIDの生成（未設定の場合）
    if (!stats.deviceId) {
        stats.deviceId = `Device-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
    }

    // 最終アクセス日を更新
    const now = new Date();
    stats.lastAccess = now.toLocaleString('ja-JP');

    // セッションベースのアクセス数カウント
    // sessionStorageにフラグがない場合のみカウントアップ
    const sessionFlag = sessionStorage.getItem(SESSION_KEY);
    if (!sessionFlag) {
        stats.accessCount = (stats.accessCount || 0) + 1;
        sessionStorage.setItem(SESSION_KEY, 'visited');
    }

    // 更新を保存
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    syncStatsToSupabase(stats);

    return stats;
};

export const getIncorrectQuestionsIds = (): number[] => {
    const stats = getStats();
    const incorrectIds: number[] = [];

    Object.entries(stats.questionStats).forEach(([id, stat]) => {
        if (stat.correct < stat.attempts) {
            incorrectIds.push(Number(id));
        }
    });

    return incorrectIds;
};

export const clearStats = () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEY);
};
