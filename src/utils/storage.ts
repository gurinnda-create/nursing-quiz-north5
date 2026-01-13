"use client";

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
};

const STORAGE_KEY = 'nursing_quiz_stats'; // 感染対策アプリと区別

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
};

export const getStats = (): UserStats => {
    if (typeof window === 'undefined') {
        return { totalAttempts: 0, totalCorrect: 0, questionStats: {} };
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    let stats: UserStats;

    if (!stored) {
        stats = { totalAttempts: 0, totalCorrect: 0, questionStats: {} };
    } else {
        try {
            stats = JSON.parse(stored);
        } catch (e) {
            console.error("Failed to parse stats", e);
            stats = { totalAttempts: 0, totalCorrect: 0, questionStats: {} };
        }
    }

    // デバイスIDの生成（未設定の場合）
    if (!stats.deviceId) {
        stats.deviceId = `Device-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
    }

    // 最終アクセス日を更新
    const now = new Date();
    stats.lastAccess = now.toLocaleString('ja-JP');

    // 更新を保存
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));

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
