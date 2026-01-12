const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, 'src/data/questions.json');
const rawData = fs.readFileSync(questionsPath, 'utf8');
const questions = JSON.parse(rawData);

let currentId = Math.max(...questions.map(q => q.id), 0) + 1;

const batch2 = [
    // --- 特徴的な副作用と対策 ---
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "エスワン（S-1）を内服している患者が「涙が止まらない、目がゴロゴロする」と訴えた際、疑うべき副作用はどれか。",
        "options": ["眼球乾燥（ドライアイ）", "流涙（涙道障害）", "結膜炎", "視力低下"],
        "correctAnswerIndex": 1,
        "explanation": "S-1の代謝産物が涙液中に分泌されることで、涙道を刺激・狭窄させ、流涙が起こることがあります。重症化する前に眼科受診が必要です。",
        "evidence": "S-1適正使用ガイド",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "ゲムシタビン（ジェムザール）投与直後の数日間、一時的に見られやすい呼吸器症状以外の症状はどれか。",
        "options": ["難聴", "インフルエンザ様症状（発熱・倦怠感）", "便秘", "不眠"],
        "correctAnswerIndex": 1,
        "explanation": "ゲムシタビン投与後、発熱や関節痛などのインフルエンザに似た症状が現れることがあります。多くは一過性です。",
        "evidence": "添付文書",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "アファチニブ（ジオトリフ）などのEGFR-TKIで高頻度に見られる、日常生活を妨げやすい消化器症状はどれか。",
        "options": ["嘔吐", "下痢", "胃もたれ", "吐血"],
        "correctAnswerIndex": 1,
        "explanation": "ジオトリフは特に下痢の頻度が高く、早期からの止瀉薬（ロペラミド等）の内服と水分補給が重要です。",
        "evidence": "ジオトリフ患者指導の手引き",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "ラムシルマブ（サイラムザ）投与中に発生しやすい心血管系の副作用はどれか。",
        "options": ["徐脈", "高血圧", "低血圧", "不整脈"],
        "correctAnswerIndex": 1,
        "explanation": "血管新生阻害薬であるラムシルマブは、高血圧や蛋白尿を引き起こしやすいため、自宅での血圧測定が必須です。",
        "evidence": "サイラムザ適正使用ガイド",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "化学療法開始後に、「手のひらや足の裏が赤くなる、痛みやしびれが出る」症状を何と呼ぶか。",
        "options": ["レイノー現象", "手足症候群", "末梢神経障害", "浮腫"],
        "correctAnswerIndex": 1,
        "explanation": "手足症候群は、特定の抗がん剤（S-1やドセタキセルなど）で起こりやすく、保湿や刺激の回避が重要です。",
        "evidence": "がん薬物療法副作用看護",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "ICI（免疫チェックポイント阻害薬）投与中の患者が「1日に5回以上の水様便、腹痛」を訴えた。まず何を考慮すべきか。",
        "options": ["食べ過ぎ", "irAEとしての免疫関連大腸炎", "単なる整腸作用", "食中毒"],
        "correctAnswerIndex": 1,
        "explanation": "irAEとしての大腸炎は重症化すると腸管穿孔を起こす危険があります。早期のステロイド治療を検討する必要があります。",
        "evidence": "irAE管理ガイド",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "抗がん剤治療中の「好中球減少」において、最もリスクが高まるのはどれか。",
        "options": ["出血", "感染症", "貧血", "めまい"],
        "correctAnswerIndex": 1,
        "explanation": "好中球は細菌と戦う白血球の主成分です。減少すると普段ならかからないような菌（日和見感染）でも重症化しやすくなります。",
        "evidence": "血液毒性のアセスメント",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "がん化学療法における「悪心・嘔吐」のうち、投与終了24時間以降に現れるものを何と呼ぶか。",
        "options": ["急性嘔吐", "遅発性嘔吐", "予測性嘔吐", "一過性嘔吐"],
        "correctAnswerIndex": 1,
        "explanation": "24時間以内を急性、24時間〜最大1週間程度続くものを遅発性と呼びます。それぞれで有効な制吐薬が異なります。",
        "evidence": "制吐薬適正使用ガイドライン",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "遅発性の悪心・嘔吐に対して有効性が高く、デキサメタゾンなどと併用される新薬クラスはどれか。",
        "options": ["NK1受容体拮抗薬（アプレピタント等）", "抗ヒスタミン薬", "抗生物質", "鉄剤"],
        "correctAnswerIndex": 0,
        "explanation": "NK1受容体拮抗薬は、脳内の嘔吐センターにおけるP物質の結合をブロックし、遅発性嘔吐に高い効果を発揮します。",
        "evidence": "制吐薬適正使用ガイドライン",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "化学療法による「口内炎」の予防で、最も基本的かつ効果的なセルフケアはどれか。",
        "options": ["熱いお茶を飲む", "頻回なうがいと丁寧なブラッシング（口腔衛生）", "市販の刺激の強いマウスウォッシュの使用", "食事を控える"],
        "correctAnswerIndex": 1,
        "explanation": "口腔内を清潔かつ湿潤に保つことが最大の予防です。粘膜を傷つけないよう、柔らかい毛の歯ブラシを使用します。",
        "evidence": "がん薬物療法における口内炎管理",
        "reference": "オリジナル"
    },
    // --- 患者教育・生活支援 ---
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "抗がん剤による「脱毛」の説明として、最も適切なものはどれか。",
        "options": ["一度抜けたら二度と生えてこない", "治療開始から1〜2ヶ月後に抜け始める", "治療開始から約1〜2週間後から抜け始め、治療終了後には再生する", "冷やせば絶対に抜けない"],
        "correctAnswerIndex": 2,
        "explanation": "脱毛は多くの場合、投与後1〜2週間で始まり、2〜3週間でピークを迎えます。一時的なものであり、治療終了後には再び生えてきます。",
        "evidence": "アピアランスケアガイドライン",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "シスプラチン投与中の「尿量確保」の目標として、一般的に1日何mL以上が望ましいとされるか。",
        "options": ["500mL", "1000mL", "2000-3000mL", "100mL"],
        "correctAnswerIndex": 2,
        "explanation": "腎障害を防ぐため、点滴によるハイドレーションに加え、自力での飲水も含め1日2〜3リットル以上の利尿を行うことが目標となります。",
        "evidence": "シスプラチンの腎毒性軽減指針",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "化学療法中の「貧血」に対する生活指導で適切なものはどれか。",
        "options": ["全力で走って体力をつける", "急に立ち上がらない（起立性低血圧の予防）", "水分を極限まで控える", "睡眠時間を短くする"],
        "correctAnswerIndex": 1,
        "explanation": "貧血時はめまいやふらつきが起こりやすいため、転倒予防としてゆっくり動作することが大切です。",
        "evidence": "がん患者の生活支援",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "EGFR-TKIによる「爪囲炎」のケアで正しいのはどれか。",
        "options": ["深爪にする", "きつい靴を履く", "入浴時に石鹸で丁寧に洗い、清潔に保つ", "消毒液で毎日強く擦る"],
        "correctAnswerIndex": 2,
        "explanation": "足先・指先の清潔と保湿、刺激回避が基本です。深爪は炎症を悪化させるため避けます。",
        "evidence": "皮膚障害マネジメント",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "がん看護",
        "question": "化学療法の継続を迷っている患者への対応で、最も重視すべき点はどれか。",
        "options": ["「辞めたら死ぬ」と厳しく説得する", "患者自身の価値観や希望（意思決定支援）を聴く", "無視して次の点滴を準備する", "家族の意見だけで決める"],
        "correctAnswerIndex": 1,
        "explanation": "シェアード・ディシジョン・メイキング（共同意思決定）が重要です。副作用の辛さと治療の意義を天秤にかけ、患者が納得できる道を探ります。",
        "evidence": "がん看護の基本",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "ICI（免疫チェックポイント阻害薬）投与後に「1型糖尿病」が発症した場合の緊急症状はどれか。",
        "options": ["徐脈", "口渇、多尿、急激な倦怠感（糖尿病ケトアシドーシス）", "便秘", "体重増加"],
        "correctAnswerIndex": 1,
        "explanation": "irAEとしての1型糖尿病は劇症化しやすく、ケトアシドーシスによる昏睡に陥る危険があるため、緊急のインスリン治療が必要です。",
        "evidence": "irAE管理ガイド",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "血管新生阻害薬ベバシズマブの副作用「蛋白尿」の管理において、休薬を検討する基準（定性）は一般的にどれか。",
        "options": ["(±)", "(1+)", "(2+)以上", "尿蛋白は関係ない"],
        "correctAnswerIndex": 2,
        "explanation": "一般に2+以上が持続したり3+が出たりした場合は、24時間蓄尿による定量検査を行い、規定値以上であれば休薬を検討します。",
        "evidence": "ベバシズマブ適正使用ガイド",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "抗がん剤調製時や投与時に用いる「閉鎖式接続器具（CSTD）」を使用する最大のメリットは何か。",
        "options": ["投与時間が短縮できる", "薬剤の揮発や漏出による環境汚染と曝露を防止できる", "薬剤費が安くなる", "ルートが詰まりにくくなる"],
        "correctAnswerIndex": 1,
        "explanation": "医療従事者の安全を守るための器具であり、特に揮発しやすい薬剤の吸入曝露を防ぐ効果が高いです。",
        "evidence": "曝露対策ガイドライン",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "①呼吸器手技",
        "subCategory": "化学療法",
        "question": "末梢静脈から抗がん剤を投与する際、推奨される穿刺部位はどれか。",
        "options": ["手背（手の甲）", "手関節（首）付近", "前腕の中央部（太い血管）", "足の甲"],
        "correctAnswerIndex": 2,
        "explanation": "手背や関節付近は皮膚が薄く、漏出した際に腱や神経を損傷しやすいため、極力避け、前腕の太いしっかりした血管を選択します。",
        "evidence": "血管外漏出予防指針",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "プラチナ製剤（シスプラチン等）に過敏症（アナフィラキシー）が起こりやすいタイミングはいつか。",
        "options": ["初回投与の開始直後", "数回目の投与後（薬剤の蓄積による感作後）", "治療終了から1年後", "いつ起こるか全く予測できない"],
        "correctAnswerIndex": 1,
        "explanation": "プラチナ製剤は初回よりも、6〜8サイクル目など、ある程度回数を重ねてから過敏症が出現しやすい傾向があります。蓄積投与に注意が必要です。",
        "evidence": "プラチナ製剤過敏症への対応",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "ICI投与後、「ALT/ASTの上昇」が見られた。irAEとしての肝障害を疑う際、ステロイド以外に併用を検討されるのはどれか。",
        "options": ["抗生物質", "ウルソデオキシコール酸", "鉄剤", "利尿薬"],
        "correctAnswerIndex": 1,
        "explanation": "肝機能改善薬としてのウルソや、重症度に応じたステロイド加療、必要に応じて免疫抑制剤が検討されます。",
        "evidence": "irAE管理ガイド",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "がん薬物療法を受ける患者の「骨髄抑制」のうち、一般的に最も早く回復し始めるのはどれか。",
        "options": ["赤血球", "好中球", "血小板", "リンパ球"],
        "correctAnswerIndex": 1,
        "explanation": "好中球は寿命が短いため、投薬後7〜14日で底を打ち、その後比較的速やかに回復に向かいます。赤血球などは寿命が長いため変化が遅いです。",
        "evidence": "血液毒性の推移",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "ニボルマブ（オプジーボ）とイピリムマブ（ヤーボイ）の「併用療法」を行う際、単剤療法と比較して注意すべき点は何か。",
        "options": ["効果が下がる", "irAE（副作用）の発現頻度と重症度が高まる", "点滴時間が半分になる", "副作用が全くなくなる"],
        "correctAnswerIndex": 1,
        "explanation": "免疫を強力に活性化させるため、単剤よりもirAEの発生リスクが顕著に増加し、より厳重な管理が求められます。",
        "evidence": "併用療法の適正使用ガイド",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "化学療法中の「性生活」に関する指導で正しいのはどれか。",
        "options": ["全く制限はない", "薬剤が体液に排出される可能性があるため、治療中および終了後一定期間は避妊（コンドーム使用等）が必要", "毎日行うべき", "二度とできない"],
        "correctAnswerIndex": 1,
        "explanation": "抗がん剤の曝露リスク（パートナーへの影響）や、胎児への催奇形性の懸念があるため、適切な期間の避妊が必要です。",
        "evidence": "がん患者の妊孕性・性生活指導",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "エトポシドなどの薬剤を溶解・投与する際、プラスチック製の器具（PVC等）から可塑剤（DEHP）が溶け出す「溶出」に注意が必要な理由はどれか。",
        "options": ["薬剤が変色するから", "溶け出した成分が人体に害を及ぼす可能性があるため", "ルートが溶けて穴が開くから", "点滴が止まるから"],
        "correctAnswerIndex": 1,
        "explanation": "特定の溶媒を用いる薬剤ではプラスチックを劣化させ、有害な可塑剤を溶出させるため、非PVC製のライン等の使用が指定されています。",
        "evidence": "薬剤の配合変化・溶出に関する指針",
        "reference": "オリジナル"
    }
];

const updatedQuestions = [...questions, ...batch2];
fs.writeFileSync(questionsPath, JSON.stringify(updatedQuestions, null, 2), 'utf8');
console.log(`Successfully added Chemo Expansion Batch 2. New Total: ${updatedQuestions.length}`);
