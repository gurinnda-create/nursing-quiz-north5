"use client";

import React from 'react';
import { QuizResult, Question } from '../utils/storage';
import { Trophy, ArrowLeft, RotateCcw, CheckCircle, XCircle, BookOpen, MessageSquare } from 'lucide-react';

interface ResultViewProps {
    results: QuizResult[];
    questions: Question[];
    onRetry: () => void;
    onHome: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({ results, questions, onRetry, onHome }) => {
    const correctCount = results.filter(r => r.isCorrect).length;
    const totalCount = results.length;
    const correctRate = Math.round((correctCount / totalCount) * 100);

    return (
        <div className="max-w-3xl mx-auto animate-fade-in py-8 px-4">
            <div className="text-center mb-8">
                <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                    <Trophy size={48} className="text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-2">学習完了</h2>
                <p className="text-muted-foreground">お疲れ様でした！</p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-10">
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm text-center">
                    <div className="text-muted-foreground text-sm font-medium mb-1">正解数</div>
                    <div className="text-4xl font-bold text-foreground">
                        {correctCount}<span className="text-xl text-muted-foreground">/{totalCount}</span>
                    </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6 shadow-sm text-center">
                    <div className="text-muted-foreground text-sm font-medium mb-1">正解率</div>
                    <div className={`text-4xl font-bold ${correctRate >= 80 ? 'text-success' : correctRate >= 60 ? 'text-warning' : 'text-error'}`}>
                        {correctRate}<span className="text-xl">%</span>
                    </div>
                </div>
            </div>

            <div className="space-y-3 max-w-sm mx-auto mb-12">
                <button onClick={onRetry} className="w-full btn-primary flex items-center justify-center gap-2">
                    <RotateCcw size={20} />
                    <span>もう一度挑戦する</span>
                </button>
                <button onClick={onHome} className="w-full btn-outline flex items-center justify-center gap-2">
                    <ArrowLeft size={20} />
                    <span>ホームへ戻る</span>
                </button>

                <a
                    href="https://forms.gle/KhKMXPqaDY7EcLyq7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-secondary bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200 flex items-center justify-center gap-2 mt-4"
                >
                    <MessageSquare size={20} />
                    <span>アンケートに回答する</span>
                </a>
            </div>

            <div className="space-y-6">
                <h3 className="text-xl font-bold border-b pb-2">学習の振り返り</h3>
                {results.map((result, idx) => {
                    const question = questions.find(q => q.id === result.questionId);
                    if (!question) return null;
                    return (
                        <div key={idx} className={`p-5 rounded-xl border ${result.isCorrect ? 'bg-success/5 border-success/20' : 'bg-error/5 border-error/20'}`}>
                            <div className="flex items-start gap-3 mb-3">
                                <div className="mt-1 flex-shrink-0">
                                    {result.isCorrect ? <CheckCircle className="text-success" size={24} /> : <XCircle className="text-error" size={24} />}
                                </div>
                                <div>
                                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-background border border-border mb-1 inline-block">
                                        {question.category}
                                    </span>
                                    <p className="font-bold text-lg leading-snug">{question.question}</p>
                                </div>
                            </div>

                            <div className="ml-9 space-y-3">
                                <div className="bg-background/80 p-4 rounded-lg text-sm border border-border/50">
                                    <p className="font-bold mb-1 text-primary">解説</p>
                                    <p className="text-foreground/90 leading-relaxed">{question.explanation}</p>
                                </div>

                                <div className="bg-accent/50 p-4 rounded-lg text-sm border border-border/50">
                                    <div className="flex items-center gap-2 font-bold mb-1 text-secondary-foreground">
                                        <BookOpen size={16} />
                                        <span>根拠</span>
                                    </div>
                                    <p className="text-foreground/90 leading-relaxed">{question.evidence}</p>
                                    <p className="mt-2 text-xs text-muted-foreground text-right">出典: {question.reference}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ResultView;
