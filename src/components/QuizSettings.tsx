"use client";

import React, { useState } from 'react';
import { getIncorrectQuestionsIds, getStats, TargetLevel } from '../utils/storage';
import { BookOpen, AlertCircle, PlayCircle, History, CheckCircle, ListFilter, Calendar, Users, Image as ImageIcon } from 'lucide-react';

import questionsData from '../data/questions.json';

type QuizMode = 'all' | 'incorrect' | 'monthly' | 'image_only';
const CATEGORIES = [
    "すべて",
    "①呼吸器手技",
    "②疾患観察",
    "③薬剤知識",
    "④基礎技術"
] as const;

export type QuizConfig = {
    questionCount: number;
    mode: QuizMode;
    category: string;
    subCategories: string[]; // 複数選択に対応
    references: string[]; // 参考文献での絞り込み
    unansweredOnly: boolean; // 未回答問題のみ
    targetLevel: TargetLevel; // 対象レベル
};

interface QuizSettingsProps {
    onStart: (config: QuizConfig) => void;
    totalQuestionsAvailable: number;
}

const QuizSettings: React.FC<QuizSettingsProps> = ({ onStart, totalQuestionsAvailable }) => {
    const [questionCount, setQuestionCount] = useState<number>(5);
    const [mode, setMode] = useState<QuizMode>('all');
    const [selectedCategory, setSelectedCategory] = useState<string>("すべて");
    const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
    const [selectedReferences, setSelectedReferences] = useState<string[]>([]);
    const [unansweredOnly, setUnansweredOnly] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [targetLevel, setTargetLevel] = useState<TargetLevel>('all');

    // カテゴリに応じたサブカテゴリの抽出
    const availableSubCategories = React.useMemo(() => {
        if (selectedCategory === "すべて") return [];
        const subs = (questionsData as any[])
            .filter(q => q.category === selectedCategory)
            .map(q => q.subCategory);
        return Array.from(new Set(subs)).filter(Boolean) as string[];
    }, [selectedCategory]);

    // 利用可能な参考文献の抽出
    const availableReferences = React.useMemo(() => {
        const refs = (questionsData as any[]).map(q => q.reference);
        return Array.from(new Set(refs)).filter(Boolean) as string[];
    }, []);

    const incorrectIds = getIncorrectQuestionsIds();
    const hasIncorrectQuestions = incorrectIds.length > 0;

    const handleStart = () => {
        onStart({
            questionCount,
            mode,
            category: selectedCategory,
            subCategories: selectedSubCategories,
            references: selectedReferences,
            unansweredOnly,
            targetLevel
        });
    };

    const toggleSubCategory = (sub: string) => {
        setSelectedSubCategories(prev =>
            prev.includes(sub) ? prev.filter(s => s !== sub) : [...prev, sub]
        );
    };

    const toggleReference = (ref: string) => {
        setSelectedReferences(prev =>
            prev.includes(ref) ? prev.filter(r => r !== ref) : [...prev, ref]
        );
    };

    const handleCategoryChange = (cat: string) => {
        setSelectedCategory(cat);
        setSelectedSubCategories([]); // カテゴリ変更時にリセット
        if (cat !== "すべて") setShowSubMenu(true);
        else setShowSubMenu(false);
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-6 animate-fade-in pb-20 px-4">
            {/* Target Level Selection */}
            <div className="glass-panel p-5 rounded-2xl space-y-3">
                <h3 className="text-base font-bold flex items-center gap-2">
                    <Users className="text-primary" size={20} />
                    <span>対象者を選択</span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {[
                        { id: 'beginner', label: '新人', desc: '基礎・技術' },
                        { id: 'mid', label: '2〜4年目', desc: '応用' },
                        { id: 'transfer', label: '異動者', desc: '病棟' },
                        { id: 'all', label: 'すべて', desc: '全範囲' }
                    ].map((level) => (
                        <button
                            key={level.id}
                            onClick={() => setTargetLevel(level.id as TargetLevel)}
                            className={`p-3 rounded-xl border-2 transition-all text-left relative ${targetLevel === level.id
                                ? 'border-primary bg-primary/10 ring-1 ring-primary'
                                : 'border-border bg-card hover:bg-accent'
                                }`}
                        >
                            <div className="font-bold text-sm">{level.label}</div>
                            <div className="text-[10px] text-muted-foreground">{level.desc}</div>
                            {targetLevel === level.id && (
                                <div className="absolute top-2 right-2 text-primary">
                                    <CheckCircle size={12} />
                                </div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Mode Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div
                    onClick={() => setMode('all')}
                    className={`cursor-pointer group relative p-5 rounded-2xl border-2 transition-all ${mode === 'all'
                        ? 'border-primary bg-primary/5 shadow-md'
                        : 'border-border bg-card hover:border-primary/50'
                        }`}
                >
                    <div className="flex items-center space-x-3 mb-2">
                        <div
                            className={`p-2 rounded-lg ${mode === 'all' ? '' : 'bg-accent text-muted-foreground'}`}
                            style={mode === 'all' ? { backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' } : {}}
                        >
                            <BookOpen size={20} />
                        </div>
                        <h3 className="font-bold">通常モード</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">学習したい領域を選んでスタート</p>
                </div>

                <div
                    onClick={() => hasIncorrectQuestions && setMode('incorrect')}
                    className={`cursor-pointer group relative p-5 rounded-2xl border-2 transition-all ${mode === 'incorrect'
                        ? 'border-warning bg-warning/5 shadow-md'
                        : hasIncorrectQuestions
                            ? 'border-border bg-card'
                            : 'opacity-50 cursor-not-allowed bg-secondary/10'
                        }`}
                >
                    <div className="flex items-center space-x-3 mb-2">
                        <div className={`p-2 rounded-lg ${mode === 'incorrect' ? 'bg-warning text-white' : 'bg-accent text-muted-foreground'}`}>
                            <History size={20} />
                        </div>
                        <h3 className="font-bold">復習モード</h3>
                    </div>
                    <p className="text-xs text-muted-foreground">間違えた問題（{incorrectIds.length}問）に再挑戦</p>
                </div>

                <div
                    onClick={() => setMode('monthly')}
                    className={`cursor-pointer group relative p-5 rounded-2xl border-2 transition-all ${mode === 'monthly'
                        ? 'border-purple-500 bg-purple-50 shadow-md'
                        : 'border-border bg-card hover:border-purple-300'
                        }`}
                >
                    <div className="flex items-center space-x-3 mb-2">
                        <div
                            className={`p-2 rounded-lg ${mode === 'monthly' ? 'bg-purple-500 text-white' : 'bg-accent text-muted-foreground'}`}
                        >
                            <Calendar size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold">月間重点モード</h3>
                            <p className="text-[10px] text-purple-600 font-bold">1月：呼吸器ケモについて</p>
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground">今月の強化テーマを全方面から学習</p>
                </div>

                <div
                    onClick={() => setMode('image_only')}
                    className={`cursor-pointer group relative p-5 rounded-2xl border-2 transition-all ${mode === 'image_only'
                        ? 'border-cyan-500 bg-cyan-50 shadow-md'
                        : 'border-border bg-card hover:border-cyan-300'
                        }`}
                >
                    <div className="flex items-center space-x-3 mb-2">
                        <div
                            className={`p-2 rounded-lg ${mode === 'image_only' ? 'bg-cyan-500 text-white' : 'bg-accent text-muted-foreground'}`}
                        >
                            <ImageIcon size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold">画像問題</h3>
                            <p className="text-[10px] text-cyan-600 font-bold">検証用モード</p>
                        </div>
                    </div>
                    <p className="text-xs text-muted-foreground">画像付きの問題のみ出題</p>
                </div>
            </div>

            {/* Category Selection */}
            {mode === 'all' && (
                <div className="glass-panel p-6 rounded-3xl space-y-4">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                        <ListFilter className="text-primary" size={24} />
                        <span>学習領域を選択</span>
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleCategoryChange(cat)}
                                className={`p-4 rounded-xl text-center font-bold border transition-all ${selectedCategory === cat
                                    ? 'shadow-sm'
                                    : 'border-transparent bg-accent'
                                    }`}
                                style={selectedCategory === cat ? { backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' } : {}}
                            >
                                {cat.replace("①", "").replace("②", "").replace("③", "")}
                            </button>
                        ))}
                    </div>

                    {/* Sub-category selection (Sub-Menu) */}
                    {selectedCategory !== "すべて" && availableSubCategories.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-border animate-slide-up">
                            <h4 className="text-sm font-bold text-muted-foreground mb-3 flex items-center gap-2">
                                <CheckCircle size={16} />
                                <span>詳細に絞り込む（オプション）</span>
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {availableSubCategories.map(sub => (
                                    <label
                                        key={sub}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium cursor-pointer transition-all ${selectedSubCategories.includes(sub)
                                            ? 'border-primary bg-primary/10 text-primary ring-1 ring-primary'
                                            : 'border-border bg-background text-muted-foreground hover:border-primary/50'
                                            }`}
                                    >
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={selectedSubCategories.includes(sub)}
                                            onChange={() => toggleSubCategory(sub)}
                                        />
                                        {sub}
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Reference selection */}
                    {availableReferences.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-border animate-slide-up">
                            <h4 className="text-sm font-bold text-muted-foreground mb-3 flex items-center gap-2">
                                <BookOpen size={16} />
                                <span>参考文献で絞り込む（検証用）</span>
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {availableReferences.map(ref => (
                                    <label
                                        key={ref}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium cursor-pointer transition-all ${selectedReferences.includes(ref)
                                            ? 'border-primary bg-primary/10 text-primary ring-1 ring-primary'
                                            : 'border-border bg-background text-muted-foreground hover:border-primary/50'
                                            }`}
                                    >
                                        <input
                                            type="checkbox"
                                            className="hidden"
                                            checked={selectedReferences.includes(ref)}
                                            onChange={() => toggleReference(ref)}
                                        />
                                        {ref}
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Additional Options */}
                    <div className="mt-6 pt-6 border-t border-border">
                        <div
                            onClick={() => setUnansweredOnly(!unansweredOnly)}
                            className={`flex items-center justify-between p-4 rounded-2xl border-2 transition-all cursor-pointer ${unansweredOnly
                                ? 'border-primary shadow-md'
                                : 'border-border bg-background hover:border-primary/30'
                                }`}
                            style={unansweredOnly ? { backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' } : {}}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors ${unansweredOnly ? 'bg-white/30' : 'bg-muted'}`}>
                                    <div className={`bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform ${unansweredOnly ? 'translate-x-4' : ''}`} />
                                </div>
                                <div>
                                    <span className="font-bold text-sm block">未回答の問題のみを出題</span>
                                    <span className={`text-[10px] ${unansweredOnly ? 'text-white/80' : 'text-muted-foreground'}`}>
                                        新しい問題に挑戦したい場合に最適です
                                    </span>
                                </div>
                            </div>
                            {unansweredOnly && (
                                <CheckCircle className="text-white" size={20} />
                            )}
                        </div>
                    </div>

                    <p className="text-[10px] text-muted-foreground mt-3">※何もチェックしない場合は、条件に一致する全ての問題から出題されます。</p>
                </div>
            )}

            {/* Question Count */}
            <div className="glass-panel p-6 rounded-3xl space-y-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <AlertCircle className="text-primary" size={24} />
                    <span>出題数</span>
                </h3>
                <div className="grid grid-cols-3 gap-3">
                    {[5, 10, 30].map((count) => (
                        <button
                            key={count}
                            onClick={() => setQuestionCount(count)}
                            className={`p-3 rounded-xl font-bold transition-all ${questionCount === count
                                ? 'shadow-md scale-105'
                                : 'bg-accent'
                                }`}
                            style={questionCount === count ? { backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' } : {}}
                        >
                            {count}問
                        </button>
                    ))}
                </div>
            </div>

            <div className="text-center pt-4">
                <button
                    onClick={handleStart}
                    className="btn-primary w-full max-w-sm py-4 rounded-full shadow-lg flex items-center justify-center gap-3 mx-auto"
                >
                    <span className="text-xl">スタート</span>
                    <PlayCircle size={28} />
                </button>
            </div>
        </div>
    );
};

export default QuizSettings;
