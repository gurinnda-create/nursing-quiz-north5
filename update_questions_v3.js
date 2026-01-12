const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, 'src/data/questions.json');
const rawData = fs.readFileSync(questionsPath, 'utf8');
const questions = JSON.parse(rawData);

let currentId = Math.max(...questions.map(q => q.id), 0) + 1;

const newQuestions = [
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "肺癌",
        "question": "非小細胞肺癌の組織型の中で、日本人の肺癌において最も頻度が高く、女性や非喫煙者にも多くみられるのはどれか。",
        "options": ["腺癌", "扁平上皮癌", "小細胞癌", "大細胞癌"],
        "correctAnswerIndex": 0,
        "explanation": "腺癌は日本の肺癌の約半数を占め、肺の末梢に発生しやすい特徴があります。",
        "evidence": "肺癌の疫学",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "肺癌",
        "question": "肺尖部の腫瘍（パンコースト型肺癌）が第8頸神経や第1・2胸神経を圧迫することで生じる、上肢の痛みや痺れを特徴とする症候群はどれか。",
        "options": ["ホーナー症候群", "パンコースト症候群", "上大静脈症候群", "イートン・ランバート症候群"],
        "correctAnswerIndex": 1,
        "explanation": "肺尖部の腫瘍が腕神経叢を侵食することで、肩から腕にかけての激しい痛みや運動麻痺が生じます。",
        "evidence": "パンコースト腫瘍の症状",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "肺癌",
        "question": "小細胞癌（SCLC）が肺癌全体の約何%を占めるか。",
        "options": ["約5%", "約10〜15%", "約30%", "約50%"],
        "correctAnswerIndex": 1,
        "explanation": "小細胞癌は約10〜15%程度ですが、増殖が極めて速く、発見時にはすでに転移していることが多い悪性度の高い癌です。",
        "evidence": "肺癌の分類と頻度",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "肺癌",
        "question": "肺癌の転移部位として、頻度が高いものの組み合わせはどれか。",
        "options": ["脳、骨、肝臓、副腎", "胃、腸、腎臓", "皮膚、筋肉", "甲状腺、心臓"],
        "correctAnswerIndex": 0,
        "explanation": "肺癌は血行性転移を起こしやすく、特に脳、骨（脊椎など）、肝臓、副腎への転移が臨床上重要です。",
        "evidence": "遠隔転移の好発部位",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "腫瘍崩壊症候群（TLS）において、血液中で上昇する電解質はどれか。",
        "options": ["カルシウム", "カリウム、リン、尿酸", "マグネシウム", "ナトリウム"],
        "correctAnswerIndex": 1,
        "explanation": "化学療法により急激にがん細胞が壊れると、細胞内のK、P、核酸（尿酸）が放出され、高K血症や急性腎不全の原因となります。",
        "evidence": "腫瘍崩壊症候群のアセスメント",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "肺小細胞癌（SCLC）の標準的治療で用いられる「イリノテカン」で、遅発性の激しい副作用として注意すべきものはどれか。",
        "options": ["難聴", "下痢", "高血圧", "不眠"],
        "correctAnswerIndex": 1,
        "explanation": "イリノテカンによる下痢は、腸内細菌による代謝産物が原因で起こる遅発性のものがあり、致死的になることもあるため厳重な管理が必要です。",
        "evidence": "イリノテカンの副作用",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "免疫チェックポイント阻害薬（ICI）を投与中の患者が「極度の倦怠感、食欲不振、低血圧」を訴えた際、疑うべき irAE（内分泌障害）はどれか。",
        "options": ["甲状腺機能亢進症", "副腎皮質機能不全（副腎不全）", "糖尿病", "尿崩症"],
        "correctAnswerIndex": 1,
        "explanation": "下垂体や副腎への攻撃によりコルチゾールが低下し、急性副腎不全（副腎クリーゼ）に陥ると生命に関わります。",
        "evidence": "irAE内分泌障害",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "がん看護",
        "question": "がん末期の患者が呼吸困難（息苦しさ）を訴えている際、薬物療法以外で有効な看護介入はどれか。",
        "options": ["扇風機で顔に風を送る", "部屋を閉め切る", "全力で運動させる", "うつ伏せにする"],
        "correctAnswerIndex": 0,
        "explanation": "三叉神経を介した刺激（顔への送風）は、非薬物的に呼吸困難感を緩和する効果が報告されています。",
        "evidence": "呼吸困難の緩和ケア",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "肺癌における遺伝子パネル検査の結果、見つかることがある「HER2変異」や「BRAF変異」に基づき治療を行う考え方を何と呼ぶか。",
        "options": ["集学的治療", "プレシジョン・メディシン（精密医療）", "対症療法", "予防的投薬"],
        "correctAnswerIndex": 1,
        "explanation": "個々の患者の遺伝子変異に合わせて最適な薬剤を選択するオーダーメイド医療のことです。",
        "evidence": "がんゲノム医療の基本",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "肺癌",
        "question": "肺癌による「骨転移」のアセスメントで、特に注意すべき緊急事態はどれか。",
        "options": ["筋肉痛", "脊髄圧迫（麻痺、排尿障害）", "皮膚のかゆみ", "脱毛"],
        "correctAnswerIndex": 1,
        "explanation": "脊椎転移が脊髄を圧迫すると、不可逆的な麻痺を残す可能性があるため、オンコロジー・エマージェンシーとして緊急の減圧処置が必要です。",
        "evidence": "骨転移の合併症",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "肺癌等の治療で用いられる「アントラサイクリン系薬剤」投与中に血管外漏出が起こった際、細胞毒性を中和するために用いられることがある冷却以外の処置薬剤（適応外を含む）はどれか。",
        "options": ["ジメチルスルホキシド（DMSO）", "インスリン", "抗生物質", "鉄剤"],
        "correctAnswerIndex": 0,
        "explanation": "アントラサイクリン系の漏出には冷罨法と、特定の薬剤（デクスラゾキサンやDMSO）の使用が検討されることがあります。",
        "evidence": "血管外漏出の薬物処置",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "①呼吸器手技",
        "subCategory": "採血・検査",
        "question": "肺癌の確定診断（組織診）のために行われる、気管支内視鏡を用いた生検の前後に注意すべき合併症はどれか。",
        "options": ["気胸、出血", "視力低下", "難聴", "下痢"],
        "correctAnswerIndex": 0,
        "explanation": "肺の一部を採取するため、肺のパンク（気胸）や出血の有無をレントゲン等で確認する必要があります。",
        "evidence": "内視鏡検査後の観察項目",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "がん薬物療法における「催吐性リスク」の評価で、最もリスクが高い（90%以上の患者に吐き気を催す）薬剤の代表はどれか。",
        "options": ["シスプラチン", "ゲムシタビン", "ドセタキセル", "UFT"],
        "correctAnswerIndex": 0,
        "explanation": "シスプラチンは高度催吐性リスク（High risk）に分類され、強力な制吐管理が必要です。",
        "evidence": "催吐性リスク分類",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "免疫チェックポイント阻害薬（ICI）によくみられる、皮膚の irAE として正しいものはどれか。",
        "options": ["脱毛", "痤瘡様皮疹、白斑、そう痒症", "色素沈着", "アトピー性皮膚炎"],
        "correctAnswerIndex": 1,
        "explanation": "免疫の攻撃がメラノサイト等に向かうことで白斑（色が抜ける）が生じたり、激しいかゆみ（そう痒）が出ることがあります。",
        "evidence": "皮膚のirAEマネジメント",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "分子標的薬「ベバシズマブ」の中止が必要な、致死的な合併症になり得る症状はどれか。",
        "options": ["軽い鼻出血", "消化管穿孔、重篤な喀血", "便秘", "手足のしびれ"],
        "correctAnswerIndex": 1,
        "explanation": "血管新生阻害薬の重大な副作用として、消化管穿孔や、肺癌細胞からの出血（喀血）があり、命に関わります。",
        "evidence": "ベバシズマブ使用上の注意",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "がん看護",
        "question": "がん患者の痛み（癌性疼痛）のアセスメントで、鎮痛薬の適切な増量を判断するために重要な尺度（スケール）はどれか。",
        "options": ["VRSやNRS（痛みスケール）", "血圧の変化", "体重の変化", "脈拍の変化"],
        "correctAnswerIndex": 0,
        "explanation": "本人の主観的な訴えを数値化（NRS: 0〜10の評価など）し、それを指標に除痛を図ります。",
        "evidence": "癌性疼痛のアセスメント",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "がん疼痛緩和のために用いられるオピオイド（麻薬性鎮痛薬）の代表的な副作用であり、治療開始初期から下剤を併用すべきものはどれか。",
        "options": ["下痢", "便秘", "高血圧", "不眠"],
        "correctAnswerIndex": 1,
        "explanation": "オピオイドは腸管の動きを抑制するため、ほぼ必発に近い割合で便秘を引き起こします。",
        "evidence": "オピオイドの副作用管理",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "肺癌",
        "question": "肺癌の進展範囲を示す「TNM分類」の「N」は何を指しているか。",
        "options": ["原発巣の大きさ", "リンパ節転移の有無・範囲", "遠隔転移の有無", "年齢"],
        "correctAnswerIndex": 1,
        "explanation": "TはTumor（原発巣）、NはNode（リンパ節）、MはMetastasis（遠隔転移）を指します。",
        "evidence": "肺癌の臨床病期（ステージング）",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "シスプラチン投与開始後、低マグネシウム血症を予防するために、輸液に添加される電解質はどれか。",
        "options": ["ナトリウム", "マグネシウム", "カルシウム", "カリウム"],
        "correctAnswerIndex": 1,
        "explanation": "シスプラチンは尿中へのマグネシウム排出を促進し、低Mg血症による腎不全悪化を招くため、Mg補給が行われます。",
        "evidence": "シスプラチンの腎保護",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "分子標的薬「オシメルチニブ」において、投与初期から注意深くモニタリングすべき心臓の合併症はどれか。",
        "options": ["QT延長、心不全指標（BNP）の上昇", "頻脈のみ", "血圧上昇", "不整脈（期外収縮）のみ"],
        "correctAnswerIndex": 0,
        "explanation": "副作用として心毒性があり、心機能低下や心不全症状に注意が必要です。",
        "evidence": "オシメルチニブの副作用アセスメント",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "①呼吸器手技",
        "subCategory": "化学療法",
        "question": "抗がん剤調製に使用される「安全キャビネット」で、外気への曝露を防ぐための気流の仕組みはどれか。",
        "options": ["全面開放", "HEPAフィルタを通したクリーンエアの下向き層流と、吸い込み気流", "ただの換気扇", "エアコンと同じ"],
        "correctAnswerIndex": 1,
        "explanation": "垂直層流とフロントからの吸い込みにより、薬剤や粉塵が調理者の顔にかからないように設計されています。",
        "evidence": "無菌調製の環境整備",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "肺小細胞癌（SCLC）に対して、近年免疫チェックポイント阻害薬と併用して一次治療に用いられるようになった、トポイソメラーゼII阻害薬はどれか。",
        "options": ["エトポシド", "メトトレキサート", "シクロホスファミド", "フルオロウラシル"],
        "correctAnswerIndex": 0,
        "explanation": "SCLCでは白金製剤＋エトポシドにICIを組み合わせるのが現在の標準的な一次治療です。",
        "evidence": "小細胞癌の標準治療",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "がん看護",
        "question": "がん化学療法の目的の一つである「サバイバーシップ支援」とは何か。",
        "options": ["治療することだけを指す", "診断段階から治療中、治療後も含め、がんと共に生きる患者の生活全般を支えること", "船に乗ること", "お金を配ること"],
        "correctAnswerIndex": 1,
        "explanation": "がんと診断された人が、社会生活を維持し、より良く生きていくための多面的な支援を指します。",
        "evidence": "がんサバイバーシップ",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "免疫チェックポイント阻害薬を投与中の患者に、ステロイドパルス療法を行う主な目的はどれか。",
        "options": ["免疫力を高めるため", "重篤な irAE（肺臓炎、神経障害など）による過剰な免疫反応を抑制するため", "がん細胞をやっつけるため", "元気にするため"],
        "correctAnswerIndex": 1,
        "explanation": "irAEという「自分の免疫が自分を攻撃している状態」を鎮めるために、強力な免疫抑制が必要となります。",
        "evidence": "irAEの重症度別対応",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "がん看護",
        "question": "肺癌末期で、癌性悪液質（カヘキシア）を呈している患者の身体的特徴はどれか。",
        "options": ["食欲旺盛で太る", "急激な体重減少、骨格筋量の減少、食欲不振", "むくみのみ", "血色が良い"],
        "correctAnswerIndex": 1,
        "explanation": "腫瘍から分泌される物質等により代謝異常が起こり、通常の栄養補給だけでは改善困難な衰弱状態となります。",
        "evidence": "がん性悪液質の病態",
        "reference": "病気が見える　呼吸器"
    }
];

const updatedQuestions = [...questions, ...newQuestions];
fs.writeFileSync(questionsPath, JSON.stringify(updatedQuestions, null, 2), 'utf8');
console.log(`Successfully updated questions.json with Batch 16-B (25 questions). New Total: ${updatedQuestions.length}`);
