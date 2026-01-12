const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, 'src/data/questions.json');
const rawData = fs.readFileSync(questionsPath, 'utf8');
const questions = JSON.parse(rawData);

let currentId = Math.max(...questions.map(q => q.id), 0) + 1;

const newQuestions = [
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "抗悪性腫瘍薬の投与による骨髄抑制で、白血球の減少が最も著明になる時期（ナディア）は一般的に投与後いつ頃か。",
        "options": ["1〜3日後", "7〜14日後", "21〜28日後", "1ヶ月以降"],
        "correctAnswerIndex": 1,
        "explanation": "多くの抗がん剤では投与後1〜2週間で白血球（好中球）が最低値となります。この時期は感染症のリスクが最大になります。",
        "evidence": "化学療法による副作用の推移",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "シスプラチン投与時に、腎毒性を軽減するために行われる必須の処置はどれか。",
        "options": ["日光を避ける", "大量の輸液（ハイドレーション）", "食事制限", "運動の禁止"],
        "correctAnswerIndex": 1,
        "explanation": "シスプラチンは高度な腎障害を引き起こす可能性があるため、尿量を確保して薬剤の排泄を促す大量の輸液が必要不可欠です。",
        "evidence": "シスプラチンの投与管理",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "非小細胞肺癌の腺癌に特異的に用いられる抗がん剤で、骨髄抑制や消化器症状の軽減のために葉酸とビタミンB12を併用する薬剤はどれか。",
        "options": ["パクリタキセル", "ドセタキセル", "ペメトレキセド（アリムタ）", "ゲムシタビン"],
        "correctAnswerIndex": 2,
        "explanation": "ペメトレキセドは代謝拮抗薬であり、深刻な副作用を減らすために葉酸の内服とビタミンB12の筋肉注射を併用します。",
        "evidence": "ペメトレキセドの投与規定",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "肺小細胞癌（SCLC）において、感受性が高く第一選択の一つとされる白金製剤との組み合わせ薬剤はどれか。",
        "options": ["エトポシド", "ゲフィチニブ", "ベバシズマブ", "エルロチニブ"],
        "correctAnswerIndex": 0,
        "explanation": "小細胞癌は進行が早いものの化学療法感受性が高く、シスプラチン＋エトポシド（EP療法）やイリノテカンとの併用が標準的です。",
        "evidence": "小細胞癌の化学療法レジメン",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "細胞障害性抗がん剤による「悪心・嘔吐」のうち、投与開始15分から数時間以内に現れるものを何と呼ぶか。",
        "options": ["遅発性嘔吐", "急性嘔吐", "予測性嘔吐", "心因性嘔吐"],
        "correctAnswerIndex": 1,
        "explanation": "投与直後から24時間以内に起こるものを急性嘔吐、24時間以降に起こるものを遅発性嘔吐と呼びます。",
        "evidence": "催吐性リスクの評価",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "免疫チェックポイント阻害薬（ニボルマブ等）の作用機序として正しいものはどれか。",
        "options": ["がん細胞のDNAを直接破壊する", "がん細胞に栄養を送る血管を止める", "T細胞のブレーキを解除し、自己の免疫力を再活性化させる", "がん細胞の増殖シグナルを遮断する"],
        "correctAnswerIndex": 2,
        "explanation": "がん細胞が免疫から逃れる仕組み（PD-1/PD-L1結合）を阻害し、T細胞が再びがんを攻撃できるようにします。",
        "evidence": "免疫チェックポイント阻害薬の機序",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "免疫チェックポイント阻害薬に特有の副作用で、全身のさまざまな臓器に起こる免疫関連の有害事象を何と呼ぶか。",
        "options": ["ADL", "irAE", "QOL", "PFS"],
        "correctAnswerIndex": 1,
        "explanation": "irAE（immune-related Adverse Events）は、自己免疫的な機序によって起こる肺炎、大腸炎、内分泌障害などの総称です。",
        "evidence": "irAEの定義と種類",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "血管新生阻害薬（ベバシズマブなど）の重大な副作用として、注意すべき項目はどれか。",
        "options": ["骨髄抑制のみ", "高血圧、蛋白尿、穿孔、出血", "しびれ", "脱毛"],
        "correctAnswerIndex": 1,
        "explanation": "血管新生を阻害するため、血圧上昇や尿蛋白、さらには傷の治りが遅くなる（創傷治癒遅延）ことによる穿孔などに注意が必要です。",
        "evidence": "血管新生阻害薬の副作用管理",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "肺小細胞癌で見られることがある「異所性ACTH産生腫瘍」により引き起こされる症候群はどれか。",
        "options": ["クッシング症候群", "バセドウ病", "橋本病", "尿崩症"],
        "correctAnswerIndex": 0,
        "explanation": "小細胞癌などの腫瘍細胞が本来の場所ではないところでホルモンを産生することがあり、クッシング症候群様の症状を呈することがあります。",
        "evidence": "副腫瘍症候群",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "EGFR遺伝子変異陽性例に対して用いられるゲフィチニブなどの薬剤の分類はどれか。",
        "options": ["細胞障害性抗がん剤", "分子標的薬（チロシンキナーゼ阻害薬：TKI）", "免疫チェックポイント阻害薬", "ホルモン剤"],
        "correctAnswerIndex": 1,
        "explanation": "特定のがん細胞が持つ遺伝子変異やタンパク質を標的にして攻撃する薬剤で、EGFR-TKIと呼ばれます。",
        "evidence": "分子標的薬の分類",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "①呼吸器手技",
        "subCategory": "化学療法",
        "question": "抗がん剤が血管外に漏出した場合（エキストラバゼーション）の初期対応として適切なのはどれか。",
        "options": ["直ちに注入を止める", "薬剤を薄めるために生理食塩水を多量に注入する", "患部を強く揉む", "温める"],
        "correctAnswerIndex": 0,
        "explanation": "漏出を疑ったらまず中止し、カテーテルを抜かずに残っている薬剤を吸引するなどの処置を行います。揉むのは禁忌です。",
        "evidence": "血管外漏出への対応マニュアル",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "肺癌の化学療法において、脱毛が起こりやすい主な理由は何か。",
        "options": ["薬剤が髪の毛のタンパク質を直接溶かすため", "細胞分裂の活発な毛母細胞に作用するため", "精神的なストレスによるもの", "皮脂の分泌が止まるため"],
        "correctAnswerIndex": 1,
        "explanation": "多くの細胞障害性抗がん剤は、分裂が盛んな細胞（がん細胞、毛根、骨髄など）に作用するため、副作用として脱毛や骨髄抑制が起こります。",
        "evidence": "抗がん剤の有害事象機序",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "イリノテカン投与中の副作用で、コリン作動性クリーゼ（腹痛、下痢、発汗など）を呈した場合に考慮される薬剤はどれか。",
        "options": ["インスリン", "アトロピン硫酸塩（抗コリン薬）", "下剤", "抗菌薬"],
        "correctAnswerIndex": 1,
        "explanation": "イリノテカンはアセチルコリンエステラーゼを阻害し、副交感神経刺激症状を引き起こすため、抗コリン薬が有効です。",
        "evidence": "イリノテカンの副作用管理",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "肺癌におけるRECISTガイドラインに基づく「奏効率」の判定で、腫瘍の長径の合計が30%以上減少した状態を何と呼ぶか。",
        "options": ["CR（完全奏効）", "PR（部分奏効）", "SD（安定）", "PD（進行）"],
        "correctAnswerIndex": 1,
        "explanation": "腫瘍が消失すればCR、30%以上減少すればPR、維持されていればSD、20%以上増加すればPDと判定します。",
        "evidence": "効果判定基準（RECIST）",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "アントラサイクリン系薬剤を投与する際に、最も注意すべき累積毒性はどれか。",
        "options": ["腎毒性", "心毒性（心不全など）", "肺線維症", "聴力障害"],
        "correctAnswerIndex": 1,
        "explanation": "アントラサイクリン系（アドリアマイシンなど）は心筋障害を引き起こすことがあり、一生の間の累積投与量に制限があります。",
        "evidence": "累積毒性の管理",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "肺癌症例で「上大静脈症候群」を呈している患者に対する、化学療法以外の緊急対応として一般的なのはどれか。",
        "options": ["マッサージ", "放射線療法やステント留置", "多量の飲水", "冷罨法"],
        "correctAnswerIndex": 1,
        "explanation": "腫瘍が血管を圧迫して上半身の鬱血を起こしているため、放射線で腫瘍を縮小させたり、ステントで物理的に広げたりします。",
        "evidence": "オンコロジー・エマージェンシーへの対応",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "①呼吸器手技",
        "subCategory": "化学療法",
        "question": "抗がん剤調製時や投与時に、薬剤が環境に漏れるのを防ぐための「ハザード対策」として不適切なのはどれか。",
        "options": ["専用の安全キャビネットを使用する", "ガウン、グローブ、マスクを着用する", "使用済みのラベルを一般ゴミとして捨てる", "閉鎖式接続器具（CSTD）を使用する"],
        "correctAnswerIndex": 2,
        "explanation": "薬剤が触れたものはすべてハザード廃棄物として適切に分別し、環境やスタッフの曝露を防ぐ必要があります。",
        "evidence": "抗がん剤の曝露対策ガイドライン",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "肺小細胞癌の化学療法において、シスプラチンの代わりに腎障害が少ない薬剤として選ばれる白金製剤はどれか。",
        "options": ["カルボプラチン", "オキサリプラチン", "ネダプラチン", "ミトマイシンC"],
        "correctAnswerIndex": 0,
        "explanation": "シスプラチンに比べて腎毒性や催吐性が軽減されているカルボプラチン（CBDCA）が広く用いられます。",
        "evidence": "白金製剤の使い分け",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "化学療法中の患者が38度以上の発熱を呈し、好中球数が500/μL未満の状態を何と呼ぶか。",
        "options": ["DIC", "FN（発熱性好中球減少症）", "GVHD", "ILD"],
        "correctAnswerIndex": 1,
        "explanation": "FNは致死的な感染症のリスクが非常に高い状態であり、速やかな抗菌薬投与が必要です。",
        "evidence": "FN診療ガイドライン",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "ALK融合遺伝子陽性肺癌に特異的に効果を示す分子標的薬はどれか。",
        "options": ["アレクチニブ（アレセンサ）", "エルロチニブ", "イマチニブ", "ラパチニブ"],
        "correctAnswerIndex": 0,
        "explanation": "ALK陽性例に対しては、ALKチロシンキナーゼ阻害薬であるアレクチニブなどが高い効果を示します。",
        "evidence": "ドライバー遺伝子と対応薬剤",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "化学療法による「しびれ」などの末梢神経障害が原因で起こりやすい事故はどれか。",
        "options": ["誤嚥", "転倒・転落", "誤薬", "離設"],
        "correctAnswerIndex": 1,
        "explanation": "足の裏の感覚が鈍くなると踏ん張りが効かず、ふらつきやすくなるため転倒予防の指導が重要です。",
        "evidence": "感覚障害と安全管理",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "がん化学療法に伴う吐き気止め（制吐薬）のガイドラインにおいて、中等度〜高度催吐性リスクに対して推奨される3剤併用療法に含まれないのはどれか。",
        "options": ["5-HT3受容体拮抗薬", "NK1受容体拮抗薬", "デキサメタゾン（ステロイド）", "抗生物質"],
        "correctAnswerIndex": 3,
        "explanation": "制吐管理の基本は、5-HT3拮抗薬、NK1拮抗薬、ステロイドの組み合わせが中心となります。",
        "evidence": "制吐薬適正使用ガイドライン",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "免疫チェックポイント阻害薬投与中にみられる「肺炎（Pneumonitis）」において、細菌性肺炎との鑑別で重要なポイントはどれか。",
        "options": ["熱があるかないか", "画像上の所見や、ステロイドへの反応性", "痰の多さ", "年齢"],
        "correctAnswerIndex": 1,
        "explanation": "irAE肺炎は細菌性とは異なり、抗生物質。ではなくステロイドに反応するのが特徴です。急速に進行する場合があるため注意が必要です。",
        "evidence": "irAE副作用マネジメント",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "肺癌術後補助化学療法で行われることが多い、経口フッ化ピリミジン製剤はどれか。",
        "options": ["UFT（テガフール・ウラシル）", "アドリアマイシン", "ブレオマイシン", "メトトレキサート"],
        "correctAnswerIndex": 0,
        "explanation": "病期により、再発予防を目的としてUFTなどの内服薬が長期間用いられることがあります。",
        "evidence": "術後補助療法",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "がん看護",
        "question": "化学療法を受ける患者の心理過程において、副作用への恐怖から治療を拒否する場合、看護師がとるべき最も適切な態度はどれか。",
        "options": ["「わがままを言わないでください」と叱る", "患者の不安や思いを傾聴し、多職種で意思決定を支援する", "家族に説得させる", "放置する"],
        "correctAnswerIndex": 1,
        "explanation": "Shared Decision Making（共同意思決定）に基づき、患者自身の価値観を尊重した支援が求められます。",
        "evidence": "がん看護の基本原則",
        "reference": "病気が見える　呼吸器"
    }
];

const updatedQuestions = [...questions, ...newQuestions];
fs.writeFileSync(questionsPath, JSON.stringify(updatedQuestions, null, 2), 'utf8');
console.log(`Successfully updated questions.json with Batch 16-A (25 questions). New Total: ${updatedQuestions.length}`);
