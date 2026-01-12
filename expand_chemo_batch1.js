const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, 'src/data/questions.json');
const rawData = fs.readFileSync(questionsPath, 'utf8');
const questions = JSON.parse(rawData);

let currentId = Math.max(...questions.map(q => q.id), 0) + 1;

const newChemoQuestions = [
    // --- 薬剤別・レジメン別の知識 ---
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "抗がん剤調製時や投与時に、曝露対策として看護師が着用すべき個人防護具（PPE）で不適切なものはどれか。",
        "options": ["ガウン（浸透性のないもの）", "サージカルマスク（不織布マスク）のみ", "抗がん剤耐性手袋（2重装着）", "ゴーグルまたはフェイスシールド"],
        "correctAnswerIndex": 1,
        "explanation": "抗がん剤の曝露対策では、サージカルマスクだけでなく、必要に応じてN95マスク（粉塵曝露時）や、ガウン・手袋・ゴーグルのフル装備が求められます。特に手袋は抗がん剤耐性のものを2重に着用します。",
        "evidence": "がん薬物療法における曝露対策ガイドライン",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "カルボプラチン（CBDCA）の投与量を決定する際に用いられる「Calvert（カルバート）式」に計算上必要な指標はどれか。",
        "options": ["身長", "体表面積", "推定GFRまたはクレアチニン・クリアランス（腎機能）", "肝機能（ALT/AST）"],
        "correctAnswerIndex": 2,
        "explanation": "カルボプラチンは腎排泄性の薬剤であり、AUC（血中濃度曲線下面積）と腎機能（GFR）に基づいて投与量を決定（Calvert式）します。体表面積を用いる多くの抗がん剤とは異なります。",
        "evidence": "添付文書",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "非小細胞肺癌の一次治療で用いられる「ペメトレキセド」の主な副作用として、注意が必要な「皮膚症状」はどれか。",
        "options": ["ざそう様皮疹", "手足症候群", "多形紅斑（皮疹）", "色素沈着"],
        "correctAnswerIndex": 2,
        "explanation": "ペメトレキセド投与により、紅斑性の皮疹が出現することがあります。これを予防するために、ステロイドの事前投与（前投薬）が行われることがあります。",
        "evidence": "添付文書",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "ドセタキセル投与中に見られる副作用で、長期投与によって蓄積しやすく、生活に支障をきたしやすいのはどれか。",
        "options": ["不正出血", "浮腫（むくみ）および体液貯留", "頻尿", "高血圧"],
        "correctAnswerIndex": 1,
        "explanation": "ドセタキセルは投与回数が増えるにつれて、浮腫や胸水貯留などの体液貯留が起こりやすくなります。これらを軽減するためにステロイドの併用が行われます。",
        "evidence": "ドセタキセル適正使用ガイド",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "ビノレルビン（ナベルビン）を静脈投与する際、看護師が最も注意すべき「局所反応」はどれか。",
        "options": ["血管痛・静脈炎", "凍傷", "筋肉痛", "知覚過敏"],
        "correctAnswerIndex": 0,
        "explanation": "ビノレルビンは血管刺激性が強く、投与中に血管痛や静脈炎を起こしやすい薬剤です。投与後は十分なフラッシュが必要です。",
        "evidence": "がん薬物療法看護",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "イリノテカン（CPT-11）投与直後から数時間以内の「早発性下痢」の主な原因はどれか。",
        "options": ["粘膜障害", "好中球減少", "抗コリン作用の不足（コリン作動性クリーゼ）", "浸透圧異常"],
        "correctAnswerIndex": 2,
        "explanation": "イリノテカンによる早発性下痢は、コリン作動性情動による副交感神経刺激が原因です。腹痛や発汗を伴うことがあり、アトロピン（抗コリン薬）の投与が有効です。",
        "evidence": "添付文書",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "抗PD-1抗体（ニボルマブ等）で見られるirAEの「重症型筋無力症」を疑う典型的な症状はどれか。",
        "options": ["動悸・息切れ", "眼瞼下垂（まぶたが下がる）、複視", "下痢", "手足のしびれ"],
        "correctAnswerIndex": 1,
        "explanation": "免疫関連副作用としての重症型筋無力症では、眼瞼下垂や複視、嚥下困難、筋力低下が現れます。クリーゼ（呼吸不全）に進行する場合があり、早急なステロイド治療が必要です。",
        "evidence": "irAE管理ガイド",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "免疫チェックポイント阻害薬（ICI）投与中の患者が「激しい頭痛、視野欠損、全身倦怠感」を訴えた際、疑うべきirAEはどれか。",
        "options": ["肺炎", "大腸炎", "下垂体炎", "心筋炎"],
        "correctAnswerIndex": 2,
        "explanation": "ICIは内分泌系（下垂体、甲状腺、副腎など）に副作用を引き起こすことがあります。下垂体炎では低尿崩症や副腎皮質機能不全により、重篤な自覚症状が現れます。",
        "evidence": "免疫チェックポイント阻害薬の基礎知識",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "EGFR遺伝子変異陽性肺癌の治療薬「オシメルチニブ」において、特に注意が必要な致死的な副作用はどれか。",
        "options": ["脱毛", "間質性肺疾患（ILD）", "口内炎", "下痢"],
        "correctAnswerIndex": 1,
        "explanation": "EGFR-TKI全般に言えることですが、副作用としての間質性肺疾患は致死率が高く、投与初期から乾性咳嗽や呼吸困難に注意が必要です。",
        "evidence": "添付文書",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "ALK融合遺伝子陽性肺癌の治療薬「アレクチニブ（アレセンサ）」投与中の患者が、日光を避けるべき理由はどれか。",
        "options": ["日光を浴びると薬の効果が消えるため", "光線過敏症（日焼けのような発疹）が起こりやすいため", "ビタミンDの吸収を妨げるため", "頭痛を誘発するため"],
        "correctAnswerIndex": 1,
        "explanation": "アレクチニブには光線過敏症の副作用があり、外出時の日焼け止め使用や長袖の着用などの遮光対策が指導のポイントとなります。",
        "evidence": "アレセンサ患者指導ガイド",
        "reference": "オリジナル"
    },
    // --- 看護業務・初期対応 ---
    {
        "id": currentId++,
        "category": "①呼吸器手技",
        "subCategory": "化学療法",
        "question": "抗がん剤点滴投与中の看護師によるルート観察で、最も優先順位が高いチェック項目はどれか。",
        "options": ["点滴の残量確認", "刺入部の腫脹・痛みの有無、逆血の確認", "滴下速度が予定通りか", "固定テープの外れがないか"],
        "correctAnswerIndex": 1,
        "explanation": "血管外漏出の早期発見が最優先です。わずかな腫れや痛み、患者の違和感を逃さないことが、重篤な組織損傷を防ぐ鍵となります。",
        "evidence": "血管外漏出予防ガイドライン",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "①呼吸器手技",
        "subCategory": "化学療法",
        "question": "CVポートから抗がん剤を投与する直前に行うべき、最も確実な「開通性確認」の方法はどれか。",
        "options": ["生理食塩水を注入した際、抵抗がないことを確認する", "刺入部を指で押さえてみる", "シリンジで吸引し、血液が引けること（逆血）を確認する", "点滴を全開にして滴下を確認する"],
        "correctAnswerIndex": 2,
        "explanation": "シリンジによる逆血確認が必須です。抵抗がないだけではカテーテルの逸脱やピンチオフを完全には否定できません。",
        "evidence": "中心静脈ポート管理マニュアル",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "①呼吸器手技",
        "subCategory": "化学療法",
        "question": "抗がん剤投与中に、患者が「急な息苦しさ、顔面のほてり、胸の圧迫感」を訴えた。直ちに行うべき対応はどれか。",
        "options": ["酸素吸入を開始する", "点滴を全開にして薬剤を流し切る", "直ちに投与を中止（クランプ）し、生理食塩水でルートを確保する", "バイタルサインを測定してから判断する"],
        "correctAnswerIndex": 2,
        "explanation": "インフュージョン・リアクション（過敏症）の疑いです。何よりもまず薬剤の流入を止めることが鉄則です。中止してから応援要請と処置に移ります。",
        "evidence": "インフュージョン・リアクション対応指針",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "①呼吸器手技",
        "subCategory": "化学療法",
        "question": "抗がん剤の空ボトルや点滴セットを廃棄する際、適切な分別区分はどれか。",
        "options": ["燃えるゴミ", "不燃ゴミ", "医療廃棄物（バイオハザードマーク・橙色容器など、または薬剤曝露用容器）", "資源ゴミ"],
        "correctAnswerIndex": 2,
        "explanation": "抗がん剤の残液がある容器やラインは、環境曝露を防ぐため、ハザードマークの付いた専用の容器に廃棄する必要があります。",
        "evidence": "廃棄物処理法および曝露対策ガイドライン",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "①呼吸器手技",
        "subCategory": "化学療法",
        "question": "抗がん剤がシーツや床にこぼれた（スピルオーバー）際の対応として、最も基本的な考え方はどれか。",
        "options": ["すぐに雑巾で広く拭き取る", "乾燥するまで待ってから清掃する", "スピルキット（専用清掃用品）を使用し、曝露対策をして中央から外へ拭く", "スピルキットを使用し、曝露対策をして外側から中心へ向かって拭き取る"],
        "correctAnswerIndex": 3,
        "explanation": "汚染範囲を広げないため、「外側から中心へ」向かって拭き取ります。また、専用のスピルキットを用い、PPEを着用して作業します。",
        "evidence": "院内曝露対策マニュアル",
        "reference": "オリジナル"
    }
];

const updatedQuestions = [...questions, ...newChemoQuestions];
fs.writeFileSync(questionsPath, JSON.stringify(updatedQuestions, null, 2), 'utf8');
console.log(`Successfully added Chemo Expansion Batch 1. New Total: ${updatedQuestions.length}`);
