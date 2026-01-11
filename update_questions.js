const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, 'src/data/questions.json');
const rawData = fs.readFileSync(questionsPath, 'utf8');
const questions = JSON.parse(rawData);

let currentId = Math.max(...questions.map(q => q.id), 0) + 1;

const newQuestions = [
    // 病気が見える　呼吸器 (25 questions - PART 2)
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "気管支喘息",
        "question": "喘息の長期管理（コントローラー）において、吸入ステロイド薬（ICS）と併用されることが多い「LABA」とは何の略か。",
        "options": ["短時間作用性吸入β2刺激薬", "長時間作用性吸入β2刺激薬", "吸入抗コリン薬", "テオフィリン製剤"],
        "correctAnswerIndex": 1,
        "explanation": "LABAはLong-Acting Beta2 Agonistの略で、ICSと併用することで相乗効果が期待できます。",
        "evidence": "喘息の薬物療法ステップ",
        "reference": "病気が見える　呼吸器"
    },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "肺癌", "question": "肺上葉の腫瘍が交感神経節を圧迫することで生じる、縮瞳、眼瞼下垂、眼球陥凹を伴う状態を何というか。", "options": ["ホーナー症候群", "パンコースト症候群", "上大静脈症候群", "イートン・ランバート症候群"], "correctAnswerIndex": 0, "explanation": "ホーナー（Horner）症候群は、交感神経経路の遮断によって起こります。", "evidence": "肺癌による局所浸潤症状", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "肺炎", "question": "レジオネラ肺炎において、潜伏期間として適切なのはどれか。", "options": ["数時間", "2-10日程度", "1ヶ月", "半年"], "correctAnswerIndex": 1, "explanation": "2-10日程度の潜伏期を経て、高熱や比較的徐脈、中枢神経症状などを伴う重症肺炎を呈することがあります。", "evidence": "非定型肺炎の特徴", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "①呼吸器手技", "subCategory": "採血・検査", "question": "胸水検査（胸水穿刺）において、乳び胸水を疑う際、胸水中の何の値が上昇しているか。", "options": ["血糖値", "トリグリセリド（中性脂肪）", "尿酸", "ALT"], "correctAnswerIndex": 1, "explanation": "リンパ管（胸管）の損傷により、中性脂肪を豊富に含むリンパ液が胸腔内に漏れるため、白濁した乳び胸水となります。", "evidence": "胸水の性状分析", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "肺結核", "question": "結核菌の染色法として、赤い棒状の菌として染め出されるのはどれか。", "options": ["グラム染色", "ギムザ染色", "チール・ネールゼン染色（抗酸菌染色）", "パパニコロウ染色"], "correctAnswerIndex": 2, "explanation": "結核菌は酸で脱色されない「抗酸菌」であり、チール・ネールゼン染色などで赤く染まります。", "evidence": "抗酸菌の微生物学的検査", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "肺気腫", "question": "肺気腫の病態を適切に表しているのはどれか。", "options": ["肺胞壁が破壊され、末梢気道が拡張・融合した状態", "気道に膿が溜まった状態", "肺の血管が詰まった状態", "胸膜に水が溜まった状態"], "correctAnswerIndex": 0, "explanation": "肺胞壁の破壊により、肺の弾性力が低下し、呼気時に気道が潰れやすくなります。", "evidence": "肺気腫の病理", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "肺塞栓症", "question": "肺血栓塞栓症の原因（塞栓子）として、圧倒的に多いのはどこからの血栓か。", "options": ["上腕の静脈", "下肢・骨盤内の深在静脈（DVT）", "心臓の左心房", "頸静脈"], "correctAnswerIndex": 1, "explanation": "ロングフライト血栓症（エコノミークラス症候群）に代表されるように、脚の深部静脈でできた血栓が肺に飛びます。", "evidence": "VTE（静脈血栓塞栓症）の連続性", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "①呼吸器手技", "subCategory": "人工呼吸器", "question": "人工呼吸器の合併症で、気道内圧が高すぎることにより肺胞が破れることを何と呼ぶか。", "options": ["VAP", "バロトラウマ（気圧外傷）", "肺水腫", "無気肺"], "correctAnswerIndex": 1, "explanation": "過度な圧力がかかることで気胸や縦隔気腫を引き起こすことがあります。", "evidence": "人工呼吸器管理下の合併症予防", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "解剖生理", "question": "第10胸椎レベルを通る、横隔膜にある穴はどれか。", "options": ["大動脈裂孔", "食道裂孔", "大静脈孔", "気管裂孔"], "correctAnswerIndex": 1, "explanation": "食道裂孔は第10胸椎、大動脈裂孔は第12胸椎、大静脈孔は第8胸椎レベルにあります。", "evidence": "横隔膜の解剖", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "過敏性肺炎", "question": "日本で夏季に多く、古い家のカビ（トリコスポロン）が原因となる過敏性肺炎はどれか。", "options": ["農夫肺", "空調機肺", "夏型過敏性肺炎", "鳥飼病"], "correctAnswerIndex": 2, "explanation": "日本の過敏性肺炎の中で最も頻度が高く、夏場に症状が悪化し、入院（環境隔離）で改善するのが特徴です。", "evidence": "過敏性肺炎の型別分類", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "肺癌", "question": "肺小細胞癌の腫瘍マーカーとして特異度が高いのはどれか。", "options": ["CEA", "SCC", "ProGRP", "SLX"], "correctAnswerIndex": 2, "explanation": "小細胞癌ではProGRPやNSE、腺癌ではCEAが指標となります。", "evidence": "肺癌の腫瘍マーカー", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "①呼吸器手技", "subCategory": "採血・検査", "question": "動脈血ガス分析で、HCO3-（重炭酸イオン）が減少している際のアセスメントはどれか。", "options": ["呼吸性アシドーシスの補償行為", "代謝性アシドーシス（または呼吸性アルカローシスの代償）", "正常範囲", "脱水"], "correctAnswerIndex": 1, "explanation": "重曹（アルカリ成分）が減っているため、代謝の面で酸性に傾いていることを示します。", "evidence": "酸塩期平衡の代謝コンポーネント", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "膠原病関連肺病変", "question": "膠原病（関節リウマチなど）に伴って発症しやすい呼吸器疾患はどれか。", "options": ["肺癌", "間質性肺炎", "気胸", "肺栓塞症"], "correctAnswerIndex": 1, "explanation": "多くの膠原病で自己免疫による肺の間質への攻撃が起こり、炎症・線維化を来します。", "evidence": "膠原病肺の臨床", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "睡眠時無呼吸", "question": "SASの保存的治療（内科的治療）の第一選択はどれか。", "options": ["鼻を広げるテープ", "CPAP（経鼻的持続陽圧呼吸療法）", "酸素吸入", "睡眠薬の服用"], "correctAnswerIndex": 1, "explanation": "寝ている間にマスクから一定の圧力をかけ続け、気道の閉塞を防ぐ方法が最も有効です。", "evidence": "SASの治療ガイドライン", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "解剖生理", "question": "肺胞の表面に存在し、表面張力を下げて肺胞を膨らみやすくしている物質はどれか。", "options": ["ヘモグロビン", "肺サーファクタント（表面活性物質）", "コラーゲン", "アルブミン"], "correctAnswerIndex": 1, "explanation": "II型肺胞上皮細胞から分泌され、肺のコンプライアンス（膨らみやすさ）を高めています。", "evidence": "肺の力学的特性", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "肺膿瘍", "question": "肺胞内で細菌感染が起こり、組織が壊死して膿が溜まった状態を何というか。", "options": ["肺水腫", "肺膿瘍（肺壊疽）", "肺梗塞", "肺線維症"], "correctAnswerIndex": 1, "explanation": "嫌気性菌などが原因で空洞内に膿が溜まる状態で、悪臭を伴う大量の膿性痰が特徴です。", "evidence": "肺化膿症の病態", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "①呼吸器手技", "subCategory": "酸素療法", "question": "COPD患者に高濃度酸素を投与した際、呼吸が止まってしまう現象を何と呼ぶか。", "options": ["過換気症候群", "CO2ナルコーシス", "中枢性無呼吸", "肺気腫の悪化"], "correctAnswerIndex": 1, "explanation": "低酸素状態を唯一の呼吸刺激としていた慢性呼吸不全患者において、酸素投与でその刺激が消失し、二酸化炭素が急激に貯留する状態です。", "evidence": "CO2ナルコーシスの発生機序", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "胸膜疾患", "question": "悪性胸膜中皮腫の最大の危険因子（曝露歴）はどれか。", "options": ["タバコ（喫煙）", "アスベスト（石綿）", "アルコール", "排気ガス"], "correctAnswerIndex": 1, "explanation": "石綿曝露から30-40年以上の潜伏期間を経て発症することが知られています。", "evidence": "中皮腫の疫学", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "解剖生理", "question": "成人の左右の気管支のうち、異物が入り込みやすいのはどちらか。", "options": ["右気管支", "左気管支", "両方同じ", "喉頭で止まる"], "correctAnswerIndex": 0, "explanation": "右気管支は左に比べて「太く、短く、垂直に近い」ため、誤嚥した異物が落ち込みやすいです。", "evidence": "気管支の解剖的差異", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "肺癌", "question": "肺癌による「上大静脈症候群」で見られる典型的な症状はどれか。", "options": ["下肢のむくみ", "顔面・頸部・上肢の浮腫、頭部の静脈怒張", "足の痛み", "腹水"], "correctAnswerIndex": 1, "explanation": "上大静脈が腫瘍で圧迫され、上半身の血液が心臓に戻りにくくなることで起こります。", "evidence": "肺癌の血管圧迫症状", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "解剖生理", "question": "肺を物理的に保護し、呼吸に伴う摩擦を軽減している2層の膜を何と称するか。", "options": ["腹膜", "胸膜（肋膜）", "心膜", "髄膜"], "correctAnswerIndex": 1, "explanation": "臓側胸膜と壁側胸膜の間にわずかな胸水があり、滑りやすくしています。", "evidence": "胸郭の構造", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "換気血流比不均等", "question": "肺胞の換気はあるが、血流がない（詰まっている）状態を何と呼ぶか。", "options": ["シャント（血流あり、換気なし）", "死腔（換気あり、血流なし）", "正常", "無気肺"], "correctAnswerIndex": 1, "explanation": "肺塞栓症などが死腔を増大させる代表的な疾患です。", "evidence": "換気血流比の異常", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "解剖生理", "question": "血液中で酸素を運ぶ主な役割を担っているのはどれか。", "options": ["血漿", "ヘモグロビン（赤血球）", "白血球", "血小板"], "correctAnswerIndex": 1, "explanation": "酸素の大部分（約98%以上）はヘモグロビンと結合して運ばれます。", "evidence": "酸素の運搬機構", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "疾患観察", "question": "チェーン・ストークス呼吸（周期的呼吸）が見られる原因として多いのはどれか。", "options": ["重症心不全、脳疾患", "糖尿病", "過換気", "元気な若者"], "correctAnswerIndex": 0, "explanation": "無呼吸と1回換気量の漸増・漸減を繰り返す異常呼吸様式です。", "evidence": "呼吸パターンのアセスメント", "reference": "病気が見える　呼吸器" },
    { "id": currentId++, "category": "②疾患観察", "subCategory": "肺血栓塞栓症", "question": "手術後早期の離床や弾性ストッキングの着用は、何の予防を目的としているか。", "options": ["肺炎", "深部静脈血栓症（DVT）および肺血栓塞栓症", "褥瘡", "創感染"], "correctAnswerIndex": 1, "explanation": "長時間寝たきりによる血流の停滞（うっ血）を防ぎ、血栓形成を予防するためです。", "evidence": "周術期の血栓症予防", "reference": "病気が見える　呼吸器" }
];


const updatedQuestions = [...questions, ...newQuestions];
fs.writeFileSync(questionsPath, JSON.stringify(updatedQuestions, null, 2), 'utf8');
console.log(`Successfully updated questions.json with Batch 14-B2 (25 questions). New Total: ${updatedQuestions.length}`);
