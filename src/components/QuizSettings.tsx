"use client";

import React, { useState } from 'react';
import { getIncorrectQuestionsIds } from '../utils/storage';
import { BookOpen, AlertCircle, PlayCircle, History, CheckCircle, ListFilter } from 'lucide-react';

type QuizMode = 'all' | 'incorrect';
// カテゴリの型定義。実際のカテゴリ名に合わせています。
const CATEGORIES = [
    "すべて",
    "①呼吸器手技",
    "②疾患観察",
    "③薬剤知識"
] as const;

export type QuizConfig = {
    questionCount: number;
    mode: QuizMode;
    category: string; // 'すべて' or specific category
};

interface QuizSettingsProps {
    onStart: (config: QuizConfig) => void;
    totalQuestionsAvailable: number;
}

const QuizSettings: React.FC<QuizSettingsProps> = ({ onStart, totalQuestionsAvailable }) => {
    const [questionCount, setQuestionCount] = useState<number>(5);
    const [mode, setMode] = useState<QuizMode>('all');
    const [selectedCategory, setSelectedCategory] = useState<string>("すべて");

    const incorrectIds = getIncorrectQuestionsIds();
    const hasIncorrectQuestions = incorrectIds.length > 0;

    const handleStart = () => {
        onStart({ questionCount, mode, category: selectedCategory });
    };

    return (
        <div className="w-full max-w-2xl mx-auto space-y-8 animate-fade-in pb-20">
            {/* Mode Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div
                    onClick={() => setMode('all')}
                    className={`cursor-pointer group relative p-6 rounded-2xl border-2 transition-all duration-200 ${mode === 'all'
                        ? 'border-primary bg-primary/5 shadow-md scale-[1.02]'
                        : 'border-border bg-card hover:border-primary/50 hover:bg-accent/50'
                        }`}
                >
                    <div className="flex items-center space-x-4 mb-3">
                        <div
                            className={`p-3 rounded-xl transition-colors ${mode === 'all' ? '' : 'bg-accent text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'}`}
                            style={mode === 'all' ? { backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' } : {}}
                        >
                            <BookOpen size={24} />
                        </div>
                        <h3 className="text-lg font-bold">通常モード</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">カテゴリを選択してランダムに出題します。</p>
                    {mode === 'all' && (
                        <div className="absolute top-4 right-4 text-primary">
                            <CheckCircle size={20} />
                        </div>
                    )}
                </div>

                <div
                    onClick={() => hasIncorrectQuestions && setMode('incorrect')}
                    className={`cursor-pointer group relative p-6 rounded-2xl border-2 transition-all duration-200 ${mode === 'incorrect'
                        ? 'border-warning bg-warning/5 shadow-md scale-[1.02]'
                        : hasIncorrectQuestions
                            ? 'border-border bg-card hover:border-warning/50 hover:bg-accent/50'
                            : 'border-border bg-secondary/10 opacity-60 cursor-not-allowed'
                        }`}
                >
                    <div className="flex items-center space-x-4 mb-3">
                        <div className={`p-3 rounded-xl transition-colors ${mode === 'incorrect' ? 'bg-warning text-white' : 'bg-accent text-muted-foreground group-hover:bg-warning/20 group-hover:text-warning'}`}>
                            <History size={24} />
                        </div>
                        <h3 className="text-lg font-bold">復習モード</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">過去に間違えた問題（{incorrectIds.length}問）のみ出題します。</p>
                    {mode === 'incorrect' && (
                        <div className="absolute top-4 right-4 text-warning">
                            <CheckCircle size={20} />
                        </div>
                    )}
                    {!hasIncorrectQuestions && (
                        <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-[1px] rounded-2xl">
                            <span className="text-xs font-medium bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full">対象問題なし</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Category Selection (Only for Normal Mode) */}
            {mode === 'all' && (
                <div className="glass-panel p-6 md:p-8 rounded-3xl space-y-4">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                        <ListFilter className="text-primary" size={24} />
                        <span>カテゴリを選択</span>
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`p-4 rounded-xl text-left font-medium transition-all duration-200 border ${selectedCategory === cat
                                    ? 'border-primary/50 shadow-sm'
                                    : 'border-transparent bg-accent hover:bg-accent/80 text-foreground'
                                    }`}
                                style={selectedCategory === cat ? { backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' } : {}}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Question Count Selection */}
            <div className="glass-panel p-6 md:p-8 rounded-3xl space-y-4">
                <h3 className="text-lg font-bold flex items-center gap-2">
                    <AlertCircle className="text-primary" size={24} />
                    <span>出題数を選択</span>
                </h3>

                <div className="grid grid-cols-3 gap-3 md:gap-4">
                    {[5, 10, 30].map((count) => (
                        <button
                            key={count}
                            onClick={() => setQuestionCount(count)}
                            className={`p-4 rounded-xl font-bold text-lg transition-all duration-200 ${questionCount === count
                                ? 'shadow-md transform scale-105'
                                : 'bg-accent hover:bg-accent/80 text-foreground'
                                }`}
                            style={questionCount === count ? { backgroundColor: 'var(--primary)', color: 'var(--primary-foreground)' } : {}}
                        >
                            {count}問
                        </button>
                    ))}
                </div>
            </div>

            {/* Start Button */}
            <div className="text-center pt-2">
                <button
                    onClick={handleStart}
                    className="btn-primary text-xl px-12 py-4 rounded-full shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto group"
                >
                    <span>テストを開始する</span>
                    <PlayCircle size={24} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    );
};

export default QuizSettings;
