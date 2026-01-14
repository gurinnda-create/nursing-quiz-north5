const q = require('./src/data/questions.json');
const fs = require('fs');

// 吸引関連の問題を抽出
const suction = q.filter(x => x.question.includes('吸引'));
console.log(`吸引関連: ${suction.length}問`);

// 問題文と正解を比較して重複を探す
const seen = {};
const duplicates = [];

suction.forEach(x => {
    const answer = x.options[x.correctAnswerIndex];
    const key = `${x.question.substring(0, 20)}_${answer.substring(0, 10)}`;
    if (seen[key]) {
        duplicates.push({ orig: seen[key], dup: x });
    } else {
        seen[key] = x;
    }
});

console.log(`重複候補: ${duplicates.length}組`);
duplicates.forEach(d => {
    console.log(`\n--- 重複 ---`);
    console.log(`ID ${d.orig.id}: ${d.orig.question}`);
    console.log(`ID ${d.dup.id}: ${d.dup.question}`);
});

// 全問題で同じ判定
console.log('\n\n=== 全問題の重複判定 ===');
const allSeen = {};
const allDups = [];

q.forEach(x => {
    const key = x.question.substring(0, 30);
    if (allSeen[key]) {
        allDups.push({ orig: allSeen[key], dup: x });
    } else {
        allSeen[key] = x;
    }
});

console.log(`全体の重複候補: ${allDups.length}組`);
allDups.forEach(d => {
    console.log(`\nID ${d.orig.id} vs ID ${d.dup.id}`);
    console.log(`  ${d.orig.question.substring(0, 60)}`);
    console.log(`  ${d.dup.question.substring(0, 60)}`);
});
