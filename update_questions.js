const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, 'src/data/questions.json');
const rawData = fs.readFileSync(questionsPath, 'utf8');
const questions = JSON.parse(rawData);

const newQuestions = [
    // ①呼吸器手技 (IDs 591-650, total 60)
    { "id": 591, "category": "①呼吸器手技", "subCategory": "吸引", "question": "口腔内を吸引する際、カテーテルをどこまで挿入すべきか。", "options": ["喉の奥まで深く", "口腔内全体、特に唾液が溜まりやすい頬の内側や舌の下など", "鼻の中", "挿入しない"], "correctAnswerIndex": 1, "explanation": "口腔内吸引は目で見える範囲、または不快感を与えない範囲で丁寧に行い、唾液の誤嚥を防ぎます。", "evidence": "口腔ケアの基本", "reference": "SafetyPlus" },
    { "id": 592, "category": "①呼吸器手技", "subCategory": "酸素療法", "question": "パルスオキシメータの値が実態より「高く」出てしまう（偽高値）原因となりうる血液成分はどれか。", "options": ["ヘモグロビン不足", "一酸化炭素ヘモグロビン (CO中毒時)", "糖分", "カリウム"], "correctAnswerIndex": 1, "explanation": "パルスオキシメータは一酸化炭素と結合したヘモグロビンを酸素と誤認するため、CO中毒時には見かけ上の数値が高くなります。", "evidence": "酸素測定のピットフォール", "reference": "SafetyPlus" },
    { "id": 593, "category": "①呼吸器手技", "subCategory": "人工呼吸器", "question": "「ウィーニング（人工呼吸器からの離脱）」を開始するための条件（目安）として正しいのはどれか。", "options": ["患者が飽きた時", "原疾患が改善し、意識が鮮明で、自発呼吸が安定していること", "設定が面倒になった時", "特に基準はない"], "correctAnswerIndex": 1, "explanation": "安全に離脱できるかを見極めるため、呼吸・循環・意識の多面的な評価が必要です。", "evidence": "人工呼吸器離脱プロトコル", "reference": "SafetyPlus" },
    { "id": 594, "category": "①呼吸器手技", "subCategory": "救急対応", "question": "胸骨圧迫を行う際、成人の場合の深さの目安はどれか。", "options": ["1cm", "約5cm（6cmを超えないよう注意）", "10cm以上", "適当で良い"], "correctAnswerIndex": 1, "explanation": "心臓をしっかり圧迫して血流を作るためには、十分な深さと強さが不可欠です。", "evidence": "BLSガイドライン", "reference": "SafetyPlus" },
    { "id": 595, "category": "①呼吸器手技", "subCategory": "モニタリング", "question": "人工呼吸器の「EtCO2（呼気終末二酸化炭素分圧）」波形が消失した際、直ちに疑うべきことは何か。", "options": ["順調な呼吸", "回路の脱落（はずれ）、または食道への誤挿入、心停止", "加湿器の故障", "電池切れ"], "correctAnswerIndex": 1, "explanation": "呼気が一切検知できていない重大なトラブルを意味します。", "evidence": "呼気ガス分析の安全管理", "reference": "SafetyPlus" },
    { "id": 596, "category": "①呼吸器手技", "subCategory": "口腔ケア", "question": "気管挿入されている患者の固定テープによる「潰瘍（皮膚トラブル）」を防ぐための工夫はどれか。", "options": ["テープを貼らない", "テープを貼る位置を毎日少しずつずらし、皮膚保護材を併用する", "石鹸を塗る", "放置する"], "correctAnswerIndex": 1, "explanation": "同じ箇所に圧がかかり続けると、短時間で皮膚が傷ついてしまうため、細かな位置変更が必要です。", "evidence": "皮膚損傷の予防看護", "reference": "SafetyPlus" },
    { "id": 471, "category": "②疾患観察", "subCategory": "心不全", "question": "「起坐呼吸」をする患者に、ベッド上でオーバーテーブルにクッションを置いてうつ伏せてもらう姿勢を何と呼ぶか。", "options": ["リラックスポーズ", "起坐位（の前傾姿勢）", "うつ伏せ", "睡眠"], "correctAnswerIndex": 1, "explanation": "この姿勢は呼吸補助筋が使いやすく、換気効率が上がるため、心不全や喘息の患者に好まれます。", "evidence": "呼吸安楽体位の工夫", "reference": "Nursing Skills" },
    { "id": 472, "category": "②疾患観察", "subCategory": "フィジカルアセスメント", "question": "胸郭打診において、空気も組織もない「液体（胸水など）」が溜まっている部位で聞こえる音はどれか。", "options": ["過共鳴音", "絶対濁音 (ドスドスと鈍い音)", "清音", "鼓音"], "correctAnswerIndex": 1, "explanation": "水分によって音が吸収され、非常に鈍い音が聞こえるようになります。", "evidence": "打診・触診のアセスメント", "reference": "Nursing Skills" },
    { "id": 473, "category": "②疾患観察", "subCategory": "肺炎", "question": "「市中肺炎」の主要な原因菌として、頻度が最も高いとされるのはどれか。", "options": ["セラチア菌", "肺炎球菌", "大腸菌", "結核菌"], "correctAnswerIndex": 1, "explanation": "一般社会で生活している際に発症する肺炎の、最も代表的な原因菌です。", "evidence": "呼吸器感染症診療ガイドライン", "reference": "看護roo!" },
    { "id": 474, "category": "②疾患観察", "subCategory": "疾患管理", "question": "肺血栓塞栓症（PTE）を疑う患者のバイタルサインで、特徴的な変化の組み合わせはどれか。", "options": ["血圧低下・頻脈・SpO2低下", "血圧上昇・徐脈", "正常範囲内", "熱のみ上昇"], "correctAnswerIndex": 0, "explanation": "肺の血管が詰まることで循環が破綻し、急激なショック状態に繋がることがあります。", "evidence": "PTEの緊急アセスメント", "reference": "SafetyPlus" },
    { "id": 611, "category": "③薬剤知識", "subCategory": "吸入薬", "question": "吸入薬のデバイス「レスピマット（スピリーバ等）」を回転させる際、何を確認すべきか。", "options": ["音だけ", "デバイス下部を半回転させ「カチッ」と音がし、インジケーターの色が変わること", "特にない", "手の感触"], "correctAnswerIndex": 1, "explanation": "正しいセット作業を行わないと、薬が噴射されず無効な吸入になります。", "evidence": "レスピマットの指導", "reference": "Nursing Skills" },
    { "id": 612, "category": "③薬剤知識", "subCategory": "抗菌薬", "question": "「セフェム系抗菌薬」の使用において、最も注意すべきアレルギーの合併症は何か。", "options": ["アナフィラキシーショック", "腹痛", "眠気", "口喝"], "correctAnswerIndex": 0, "explanation": "ペニシリンと同様、重篤なアレルギー反応を起こす可能性があるため、初回投与時は特に厳密な観察が必要です。", "evidence": "抗生物質の使用基準", "reference": "SafetyPlus" },
    { "id": 613, "category": "③薬剤知識", "subCategory": "抗凝固薬", "question": "「ヘパリン」の点滴投与中、患者が激しい頭痛と吐き気を訴えた際に真っ先に疑うのはどれか。", "options": ["風邪", "頭蓋内出血（副作用としての出血傾向）", "肩こり", "空腹"], "correctAnswerIndex": 1, "explanation": "脳出血などの重篤な副作用を常に念頭に置き、直ちに神経学的所見を確認します。", "evidence": "抗凝固薬の副作用アセスメント", "reference": "SafetyPlus" },
    { "id": 614, "category": "③薬剤知識", "subCategory": "ステロイド薬", "question": "ステロイド薬の副作用「満月様顔貌（ムーンフェイス）」に悩む患者への対応として適切なのはどれか。", "options": ["食べ過ぎだと叱る", "「治療上避けられない変化だが、薬が減れば元に戻ることが多い」と正確な情報を伝え傾聴する", "放置する", "笑う"], "correctAnswerIndex": 1, "explanation": "ボディイメージの変化は患者の心理的苦痛が大きいため、共感的かつ長期的な視点での支援が必要です。", "evidence": "精神的ケアの実践", "reference": "Nursing Skills" },
    { "id": 615, "category": "③薬剤知識", "subCategory": "鎮静薬", "question": "点滴麻薬（フェンタニル等）を使用中の患者が「眠っていて呼吸数が6回/分」になった際、直ちに行うべき処置はどれか。", "options": ["そのまま寝かせておく", "刺激して覚醒を促し、酸素投与・救急コールを行い医師へ報告する（必要なら拮抗薬の準備）", "歌を歌う", "記録を書く"], "correctAnswerIndex": 1, "explanation": "致死的な呼吸抑制の状態であり、直ちに介入が必要です。拮抗薬（ナロキソン等）の使用も検討されます。", "evidence": "疼痛管理のガイドライン", "reference": "SafetyPlus" }
];

const updatedQuestions = [...questions, ...newQuestions];
fs.writeFileSync(questionsPath, JSON.stringify(updatedQuestions, null, 2), 'utf8');
console.log(`Successfully updated questions.json with Batch 9. New Total: ${updatedQuestions.length}`);
