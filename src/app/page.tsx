"use client";

import React, { useState, useEffect } from 'react';
import questionsData from '../data/questions.json';
import { getStats, getIncorrectQuestionsIds, Question, UserStats } from '../utils/storage';
import QuizSettings, { QuizConfig } from '../components/QuizSettings';
import QuizGame from '../components/QuizGame';
import ResultView from '../components/ResultView';
import { Trophy, Activity, AlertTriangle, Book, Play, Stethoscope, MessageSquare } from 'lucide-react';
import Link from 'next/link';

type ViewState = 'home' | 'settings' | 'game' | 'result';

export default function Home() {
  const [view, setView] = useState<ViewState>('home');
  const [stats, setStats] = useState<UserStats | null>(null);
  const [gameQuestions, setGameQuestions] = useState<Question[]>([]);
  const [lastGameResults, setLastGameResults] = useState<any[]>([]);

  useEffect(() => {
    // Client-side only
    setStats(getStats());
  }, [view]);

  const handleStartRequest = () => {
    setView('settings');
  };

  const handleStartGame = (config: QuizConfig) => {
    let filteredQuestions: Question[] = [];

    if (config.mode === 'incorrect') {
      const incorrectIds = getIncorrectQuestionsIds();
      filteredQuestions = (questionsData as Question[]).filter(q => incorrectIds.includes(q.id));
    } else if (config.mode === 'monthly') {
      const currentMonth = new Date().getMonth() + 1;

      if (currentMonth === 2) {
        // Monthly Focus: Oxygen Devices (Feb)
        filteredQuestions = (questionsData as Question[]).filter(q =>
          q.category === '酸素デバイス' ||
          q.subCategory === '酸素デバイス' ||
          q.subCategory === '酸素カニューレ' ||
          q.subCategory === '酸素マスク' ||
          q.subCategory === 'リザーバーマスク' ||
          q.subCategory === 'バックバルブマスク' ||
          q.subCategory === 'ネーゼルハイフロー' ||
          q.subCategory === '酸素デバイス総合'
        );
      } else {
        // Default / Previous Focus (Jan)
        filteredQuestions = (questionsData as Question[]).filter(q =>
          q.subCategory === '化学療法' ||
          q.subCategory === 'がん看護' ||
          q.question.includes('抗がん剤') ||
          q.question.includes('化学療法')
        );
      }
    } else if (config.mode === 'image_only') {
      // Image only mode
      filteredQuestions = (questionsData as Question[]).filter(q => q.image);
    } else {
      // Normal mode - First filter by category
      if (config.category && config.category !== 'すべて') {
        filteredQuestions = (questionsData as Question[]).filter(q => q.category === config.category);

        // Then filter by sub-categories if any are selected
        if (config.subCategories && config.subCategories.length > 0) {
          filteredQuestions = filteredQuestions.filter(q => config.subCategories.includes(q.subCategory));
        }

        // Then filter by references if any are selected
        if (config.references && config.references.length > 0) {
          filteredQuestions = filteredQuestions.filter(q => config.references.includes(q.reference));
        }
      } else {
        filteredQuestions = [...questionsData] as Question[];
        // Even if category is 'all', apply reference filter if selected
        if (config.references && config.references.length > 0) {
          filteredQuestions = filteredQuestions.filter(q => config.references.includes(q.reference));
        }
      }

      // Finally, apply unanswered filter if selected
      if (config.unansweredOnly && stats) {
        filteredQuestions = filteredQuestions.filter(q => !stats.questionStats[q.id]);
      }
    }

    // Apply Target Level filtering (for all modes except image_only)
    if (config.targetLevel !== 'all') {
      filteredQuestions = filteredQuestions.filter(q => {
        // If question has no specific target level, treat as 'all' (available for everyone)
        if (!q.targetLevels || q.targetLevels.length === 0) return true;
        return q.targetLevels.includes(config.targetLevel) || q.targetLevels.includes('all');
      });
    }

    // Check if there are questions after filtering
    if (filteredQuestions.length === 0) {
      alert("条件に一致する問題がありませんでした。設定を変更してください。");
      return;
    }

    // Shuffle
    const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);

    // Slice to count
    const selected = shuffled.slice(0, config.questionCount);

    setGameQuestions(selected);
    setView('game');
  };

  const correctRate = stats && stats.totalAttempts > 0
    ? Math.round((stats.totalCorrect / stats.totalAttempts) * 100)
    : 0;

  if (view === 'game') {
    return (
      <main className="min-h-screen p-4 md:p-8 bg-background text-foreground flex flex-col items-center justify-center">
        <QuizGame
          questions={gameQuestions}
          onComplete={(results: any) => {
            setLastGameResults(results);
            setView('result');
          }}
          onExit={() => setView('home')}
        />
      </main>
    )
  }

  if (view === 'settings') {
    return (
      <main className="min-h-screen p-4 md:p-8 bg-background text-foreground flex flex-col items-center justify-center">
        <div className="w-full max-w-2xl mb-8 flex items-center justify-between animate-fade-in">
          <button onClick={() => setView('home')} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft size={20} /> Back
          </button>
          <h1 className="text-2xl font-bold">クイズ設定</h1>
          <div className="w-20"></div> {/* Spacer */}
        </div>
        <QuizSettings
          onStart={handleStartGame}
          totalQuestionsAvailable={(questionsData as Question[]).length}
        />
      </main>
    )
  }

  if (view === 'result') {
    return (
      <main className="min-h-screen p-4 md:p-8 bg-background text-foreground flex flex-col items-center justify-center">
        <ResultView
          results={lastGameResults}
          questions={gameQuestions}
          onRetry={() => setView('settings')}
          onHome={() => setView('home')}
        />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/5 to-transparent -z-10" />

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 animate-fade-in">
        <header className="mb-12 text-center">
          <div className="inline-block p-3 rounded-2xl bg-white shadow-sm mb-4 border border-slate-100">
            <Stethoscope className="text-primary w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
            北5病棟<br className="md:hidden" /> 新人看護師必修問題集
            <span className="block text-sm font-normal text-muted-foreground mt-2">
              全{(questionsData as any[]).length}問 収録
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            呼吸器内科で実践される手技・疾患観察・薬剤知識を効率的に学習
          </p>
        </header>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center">
            <div className="mb-2 p-3 bg-blue-50 text-blue-600 rounded-full">
              <Trophy size={24} />
            </div>
            <div className="text-3xl font-bold mb-1">{correctRate}<span className="text-lg">%</span></div>
            <div className="text-sm text-muted-foreground font-medium">通算正解率</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center">
            <div className="mb-2 p-3 bg-emerald-50 text-emerald-600 rounded-full">
              <Book size={24} />
            </div>
            <div className="text-3xl font-bold mb-1">{stats?.totalCorrect || 0}</div>
            <div className="text-sm text-muted-foreground font-medium">正解数</div>
          </div>

          <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center">
            <div className="mb-2 p-3 bg-amber-50 text-amber-600 rounded-full">
              <AlertTriangle size={24} />
            </div>
            <div className="text-3xl font-bold mb-1">{getIncorrectQuestionsIds().length}</div>
            <div className="text-sm text-muted-foreground font-medium">要復習問題</div>
          </div>
        </div>

        {/* Main Action */}
        <div className="flex justify-center">
          <button
            onClick={handleStartRequest}
            className="btn-primary group relative inline-flex items-center justify-center px-8 py-5 text-xl font-bold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span className="mr-3">問題集をスタート</span>
            <Play className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="currentColor" />

            {/* Pulse effect */}
            <span className="absolute -inset-1 rounded-full bg-primary/30 opacity-0 group-hover:opacity-100 animate-ping" />
          </button>
        </div>

        {/* Survey Link (Auto-appears after Jan 20) */}
        <div className="mt-12 mb-4 animate-fade-in flex flex-col items-center">
          <a
            href="https://forms.gle/KhKMXPqaDY7EcLyq7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <MessageSquare size={20} />
            <span className="font-bold">試験運用アンケートに回答する</span>
          </a>
          <p className="mt-2 text-xs text-muted-foreground">今後の改善のため、ご協力をお願いします</p>
        </div>

        {/* Footer info using simple text */}
        <div className="mt-20 text-center text-sm text-muted-foreground space-y-2">
          <p>収録問題数: {(questionsData as any[]).length}問 (v1.0.2 - 2026/01/13)</p>
          <p>検証用フィルタ: 実装済み</p>
          <p className="text-[10px] opacity-50 font-mono flex items-center justify-center gap-1">
            Build ID: {Date.now()}
            <Link href="/admin" className="inline-block w-[6px] h-[6px] bg-blue-500 rounded-full opacity-20 hover:opacity-100 transition-opacity ml-1" />
          </p>
          <p className="text-[10px] opacity-20">※新しい機能が表示されない、反映されない場合は、<br />ブラウザを強制更新（Ctrl + F5 / Cmd + Shift + R）してください。</p>
        </div>
      </div>
    </main>
  );
}

// Helper icon
function ArrowLeft({ size, className }: { size: number, className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}
