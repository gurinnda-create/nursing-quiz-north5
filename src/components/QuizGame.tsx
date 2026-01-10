"use client";

import React, { useState, useEffect } from 'react';
import { Question, saveQuizResult, QuizResult } from '../utils/storage';
import { Check, X, ArrowRight, RotateCcw, Home, BookOpen, FileText } from 'lucide-react';

interface QuizGameProps {
    questions: Question[];
    onComplete: (results: QuizResult[]) => void;
    onExit: () => void;
}

const QuizGame: React.FC<QuizGameProps> = ({ questions, onComplete, onExit }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [results, setResults] = useState<QuizResult[]>([]);
    const [showExplanation, setShowExplanation] = useState(false);

    // コンプリート時に結果を保存
    useEffect(() => {
        if (results.length === questions.length && results.length > 0) {
            saveQuizResult(results);
        }
    }, [results, questions.length]);

    const currentQuestion = questions[currentIndex];

    if (!currentQuestion) {
        return <div>Loading...</div>;
    }

    const handleOptionClick = (index: number) => {
        if (isAnswered) return;
        setSelectedOption(index);
        setIsAnswered(true);
        setShowExplanation(true); // 即座に解説を表示

        const isCorrect = index === currentQuestion.correctAnswerIndex;
        setResults([...results, {
            questionId: currentQuestion.id,
            isCorrect,
            timestamp: Date.now()
        }]);
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedOption(null);
            setIsAnswered(false);
            setShowExplanation(false);
        } else {
            onComplete(results);
        }
    };

    const isLastQuestion = currentIndex === questions.length - 1;

    // 結果表示画面（ゲーム終了後）
    if (results.length === questions.length && !showExplanation) {
        return null;
    }

    return (
        <div className="w-full max-w-3xl mx-auto animate-fade-in pb-20">
            {/* Header / Progress */}
            <div className="flex items-center justify-between mb-8 px-2">
                <div className="text-sm font-medium text-muted-foreground">
                    Question <span className="text-primary text-xl font-bold">{currentIndex + 1}</span> / {questions.length}
                </div>
                <button onClick={onExit} className="text-sm text-muted-foreground hover:text-error transition-colors">
                    中断して戻る
                </button>
            </div>

            <div className="mb-2 w-full bg-secondary/20 h-2 rounded-full overflow-hidden">
                <div
                    className="bg-primary h-full transition-all duration-500 ease-out"
                    style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
                ></div>
            </div>

            {/* Question Card */}
            <div className="glass-panel p-6 md:p-8 rounded-3xl shadow-sm mb-6 border-l-4 border-l-primary/50 bg-card">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold mb-4">
                    {currentQuestion.category}
                </span>
                <h2 className="text-xl md:text-2xl font-bold leading-relaxed text-foreground">
                    {currentQuestion.question}
                </h2>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 gap-4 mb-8">
                {currentQuestion.options.map((option, index) => {
                    let stateStyle = "border-border bg-card hover:bg-accent/50";
                    if (isAnswered) {
                        if (index === currentQuestion.correctAnswerIndex) {
                            stateStyle = "border-success bg-success/10 text-success-700 ring-2 ring-success";
                        } else if (index === selectedOption) {
                            stateStyle = "border-error bg-error/10 text-error-700";
                        } else {
                            stateStyle = "border-border/50 opacity-60";
                        }
                    } else if (selectedOption === index) {
                        stateStyle = "border-primary bg-primary/10 ring-2 ring-primary";
                    }

                    return (
                        <button
                            key={index}
                            onClick={() => handleOptionClick(index)}
                            disabled={isAnswered}
                            className={`text-left p-5 md:p-6 rounded-2xl border-2 transition-all duration-200 text-lg font-medium flex items-center justify-between group ${stateStyle}`}
                        >
                            <div className="flex items-center gap-4">
                                <span className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold border ${isAnswered && index === currentQuestion.correctAnswerIndex ? 'border-success bg-success text-white' :
                                    isAnswered && index === selectedOption ? 'border-error bg-error text-white' :
                                        'border-muted-foreground/30 text-muted-foreground'
                                    }`}>
                                    {index + 1}
                                </span>
                                <span>{option}</span>
                            </div>

                            {isAnswered && index === currentQuestion.correctAnswerIndex && (
                                <Check className="text-success flex-shrink-0" size={24} />
                            )}
                            {isAnswered && index === selectedOption && index !== currentQuestion.correctAnswerIndex && (
                                <X className="text-error flex-shrink-0" size={24} />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Explanation Area */}
            {showExplanation && (
                <div className="animate-fade-in bg-card border border-border rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start gap-4 mb-4">
                        <div className={`p-2 rounded-full shrink-0 ${selectedOption === currentQuestion.correctAnswerIndex ? 'bg-success/20 text-success' : 'bg-error/20 text-error'}`}>
                            {selectedOption === currentQuestion.correctAnswerIndex ? <Check size={20} /> : <X size={20} />}
                        </div>
                        <div>
                            <h3 className={`text-lg font-bold mb-1 ${selectedOption === currentQuestion.correctAnswerIndex ? 'text-success' : 'text-error'}`}>
                                {selectedOption === currentQuestion.correctAnswerIndex ? '正解！' : '不正解...'}
                            </h3>
                            <p className="text-muted-foreground text-sm">正解は 「{currentQuestion.options[currentQuestion.correctAnswerIndex]}」 です。</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-background p-4 rounded-xl border border-border/60">
                            <h4 className="font-bold text-sm text-primary mb-2 flex items-center gap-2">
                                <BookOpen size={16} /> 解説
                            </h4>
                            <p className="text-foreground leading-relaxed text-sm md:text-base">
                                {currentQuestion.explanation}
                            </p>
                        </div>

                        <div className="bg-accent/50 p-4 rounded-xl border border-border/60">
                            <h4 className="font-bold text-sm text-secondary-foreground mb-2 flex items-center gap-2">
                                <FileText size={16} /> 根拠
                            </h4>
                            <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
                                {currentQuestion.evidence}
                            </p>
                            {currentQuestion.reference && (
                                <div className="mt-3 text-xs text-muted-foreground text-right border-t border-border/30 pt-2">
                                    出典: {currentQuestion.reference}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={handleNext}
                            className="btn-primary flex items-center gap-2 pl-6 pr-4"
                        >
                            <span>{isLastQuestion ? '結果を見る' : '次の問題へ'}</span>
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizGame;
