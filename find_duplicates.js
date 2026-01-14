const q = require('./src/data/questions.json');

// キーワードで問題をグループ化
const keywords = [
    'カフ圧', '吸引時間', '吸引', 'SpO2', '体位ドレナージ',
    'NPPV', '口すぼめ', 'インスリン', '採血', '輸液ポンプ',
    '胸骨圧迫', 'CPR', '駆血帯', '浣腸', '筋肉内注射',
    '皮下注射', '導尿', 'バイタル', '褥瘡', '転倒'
];

console.log('=== 重複の可能性がある問題グループ ===\n');

keywords.forEach(kw => {
    const matched = q.filter(x => x.question.includes(kw));
    if (matched.length > 2) {
        console.log(`\n### ${kw} (${matched.length}問) ###`);
        matched.forEach(x => {
            console.log(`${x.id}: ${x.question}`);
        });
    }
});

// 同じ正解選択肢を持つ問題を探す
console.log('\n\n=== 同じ正解を持つ問題グループ ===');
const answerGroups = {};

q.forEach(x => {
    const answer = x.options[x.correctAnswerIndex];
    if (!answerGroups[answer]) {
        answerGroups[answer] = [];
    }
    answerGroups[answer].push(x);
});

Object.entries(answerGroups).forEach(([answer, questions]) => {
    if (questions.length > 3 && answer.length > 5) {
        console.log(`\n### 正解「${answer.substring(0, 30)}」(${questions.length}問) ###`);
        questions.slice(0, 5).forEach(x => {
            console.log(`${x.id}: ${x.question.substring(0, 50)}`);
        });
        if (questions.length > 5) {
            console.log(`  ...他 ${questions.length - 5}問`);
        }
    }
});
