const fs = require('fs');
const q = require('./src/data/questions.json');

let count = 0;
q.forEach(x => {
    if (x.category === '基礎技術') {
        x.category = '④基礎技術';
        count++;
    }
});

fs.writeFileSync('./src/data/questions.json', JSON.stringify(q, null, 2));
console.log(`Fixed ${count} questions`);

// 確認
const cats = {};
q.forEach(x => { cats[x.category] = (cats[x.category] || 0) + 1; });
console.log('\nCategories:');
Object.entries(cats).forEach(([k, v]) => console.log(`  ${k}: ${v}問`));
