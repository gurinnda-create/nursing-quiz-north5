const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, 'src/data/questions.json');
const rawData = fs.readFileSync(questionsPath, 'utf8');
const questions = JSON.parse(rawData);

let currentId = Math.max(...questions.map(q => q.id), 0) + 1;

const monthlyFocusQuestions = [
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "シスプラチン（プラチナ製剤）投与時に最も注意すべき副作用はどれか。",
        "options": ["脱毛", "高度の悪心・嘔吐および腎障害", "便秘", "末梢神経障害"],
        "correctAnswerIndex": 1,
        "explanation": "シスプラチンは強い催吐性を持ち、また腎毒性が高いため、十分な輸液（ハイドレーション）と催吐管理が必須です。",
        "evidence": "肺癌診療ガイドライン",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "免疫チェックポイント阻害薬（ICI）で見られる「irAE」とは何の略か。",
        "options": ["即時型アレルギー反応", "免疫関連有害事象", "感染症の悪化", "腫瘍の急激な縮小"],
        "correctAnswerIndex": 1,
        "explanation": "irAE（immune-related Adverse Events）は、免疫が過剰に活性化されることで全身のさまざまな臓器に起こる副作用の総称です。",
        "evidence": "免疫チェックポイント阻害薬 適正使用ガイド",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "肺癌の化学療法中、発熱性好中球減少症（FN）を疑う際の定義として正しい組み合わせはどれか。",
        "options": ["発熱（37.0℃以上）＋好中球 1500/μL未満", "発熱（37.5℃以上）＋好中球 1000/μL未満", "発熱（38.0℃以上）＋好中球 500/μL未満", "発熱（39.0℃以上）＋好中球 100/μL未満"],
        "correctAnswerIndex": 2,
        "explanation": "FNは、好中球数が500/μL未満（または48時間以内に500未満になると予想される状態）かつ、38.0℃以上の発熱がある状態を指し、緊急対応が必要です。",
        "evidence": "FN診療ガイドライン",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "パクリタキセルなどのタキサン系薬剤に特有な副作用はどれか。",
        "options": ["口内炎", "末梢神経障害（しびれ）", "出血傾向", "心不全"],
        "correctAnswerIndex": 1,
        "explanation": "パクリタキセルやドセタキセルは、投与後のしびれや痛みなどの末梢神経障害が特徴的です。",
        "evidence": "がん薬物療法看護",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "①呼吸器手技",
        "subCategory": "化学療法",
        "question": "抗がん剤が血管外漏出した場合の初期対応として誤っているのはどれか。",
        "options": ["直ちに投与を中止する", "カテーテルはそのままで、残っている薬剤を吸引する", "漏出した部位を強く揉んで拡散させる", "医師に報告し、必要に応じて冷罨法や温罨法を行う"],
        "correctAnswerIndex": 2,
        "explanation": "揉むことは薬剤の組織ダメージを広げるため禁忌です。初期対応は投与中止、吸引、腫脹範囲のマーキング、挙上が基本です。",
        "evidence": "血管外漏出対応マニュアル",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "EGFR-TKI（分子標的薬）で見られやすい皮膚症状はどれか。",
        "options": ["水疱", "痤瘡様皮疹（にきびのような湿疹）", "青あざ", "皮膚の硬化"],
        "correctAnswerIndex": 1,
        "explanation": "EGFR阻害薬では、顔面や体幹に痤瘡様皮疹（ざそうようひしん）が出やすく、適切なスキンケアが必要です。",
        "evidence": "分子標的薬副作用対策",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "ベバシズマブ（血管新生阻害薬）を使用する際、禁忌となる可能性が高い状態はどれか。",
        "options": ["高血圧", "喀血（新鮮血の排出）", "糖尿病", "高齢"],
        "correctAnswerIndex": 1,
        "explanation": "血管新生を阻害するため、腫瘍からの出血リスクがある場合（特に扁平上皮癌の空洞形成例など）は出血の危険が高いため慎重な判断が必要です。",
        "evidence": "ベバシズマブ適正使用",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "免疫チェックポイント阻害薬投与後に、「息切れ、乾性咳嗽、発熱」が見られた場合に最も疑うべき副作用はどれか。",
        "options": ["細菌性肺炎", "心不全", "免疫関連の間質性肺疾患（Pneumonitis）", "気管支喘息"],
        "correctAnswerIndex": 2,
        "explanation": "irAEとして頻度が高く、かつ重篤になりやすいのが間質性肺疾患です。感染性肺炎との鑑別が重要です。",
        "evidence": "irAE管理ガイド",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "ペメトレキセド（アリムタ）投与時に併用が必須となっているビタミン剤はどれか。",
        "options": ["ビタミンC、E", "ビタミンB1、B2", "葉酸、ビタミンB12", "ビタミンA、D"],
        "correctAnswerIndex": 2,
        "explanation": "副作用（重症な骨髄抑制や消化器症状）を軽減するため、投与開始の7日前から葉酸の服用とビタミンB12の筋肉注射が必要です。",
        "evidence": "アリムタ適正使用",
        "reference": "オリジナル"
    },
    {
        "id": currentId++,
        "category": "①呼吸器手技",
        "subCategory": "化学療法",
        "question": "抗がん剤調製時や投与時に、曝露対策として用いられる閉鎖式接続器具（CSTD）の主な目的はどれか。",
        "options": ["感染を防ぐため", "医療従事者の薬剤曝露を最小限に抑えるため", "投与速度を一定にするため", "点滴漏れを防ぐため"],
        "correctAnswerIndex": 1,
        "explanation": "抗がん剤の揮発や漏れを物理的に遮断し、看護師などの医療従事者が薬剤を吸い込んだり浴びたりするのを防ぐために使用します。",
        "evidence": "がん薬物療法における曝露対策ガイドライン",
        "reference": "オリジナル"
    }
];

const updatedQuestions = [...questions, ...monthlyFocusQuestions];
fs.writeFileSync(questionsPath, JSON.stringify(updatedQuestions, null, 2), 'utf8');
console.log(`Successfully added Monthly Focus questions. New Total: ${updatedQuestions.length}`);
