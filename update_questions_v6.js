const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, 'src/data/questions.json');
const rawData = fs.readFileSync(questionsPath, 'utf8');
const questions = JSON.parse(rawData);

let currentId = Math.max(...questions.map(q => q.id), 0) + 1;

const newQuestions = [
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "肺癌", "question": "肺癌のステージ決定に用いられるPET-CT検査で、放射性薬剤（FDG）が癌細胞に取り込まれる原理は何か。", "options": ["癌細胞の血流が多いため", "癌細胞が正常細胞よりグルコース（糖）を多く消費するため", "癌細胞が光るため", "癌細胞に酸素が多いため"], "correctAnswerIndex": 1, "explanation": "FDGはブドウ糖に似た薬剤で、代謝が盛んな癌細胞に集積する性質を利用して転移や再発を診断します。", "evidence": "核医学検査の機序", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "肺癌", "question": "肺癌術後の「リハビリテーション」において、初期から推奨されるのはどれか。", "options": ["1週間の絶対安静", "早期離離床、呼吸訓練（インセンティブ・スパイロメトリーなど）、喀痰指導", "全力疾走", "発声の禁止"], "correctAnswerIndex": 1, "explanation": "術後の無気肺や肺炎を防ぐため、痛みをコントロールしながら早期に動き出し、しっかり肺を広げることが肝要です。", "evidence": "呼吸器外科の周術期ケア", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "COPD", "question": "COPD（慢性閉塞性肺疾患）において、肺胞が破壊されて一つの大きな袋になった状態を何というか。", "options": ["無気肺", "ブラ（またはブル）", "肺膿瘍", "胸水"], "correctAnswerIndex": 1, "explanation": "肺胞壁が壊れ、空気が溜まる空間が拡大したものをブラと呼びます。これが破れると気胸の原因となります。", "evidence": "肺気腫の病態生理", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "COPD", "question": "COPD患者の身体的特徴で見られる、前後に厚みが増した胸郭の形を何というか。", "options": ["鳩胸", "漏斗胸", "樽状胸（barrel chest）", "扁平胸"], "correctAnswerIndex": 2, "explanation": "肺の過膨張により横隔膜が低位になり、胸板が厚くなったように見える状態です。", "evidence": "COPDの視診項目", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "COPD", "question": "COPDの安定期治療において、長時間作用性抗コリン薬（LAMA）の主な作用はどれか。", "options": ["気道を広げる（気管支拡張作用）", "痰を溶かす", "細菌を殺す", "炎症を止める"], "correctAnswerIndex": 0, "explanation": "副交感神経による気管支収縮を抑え、気流制限を改善します。喘息治療におけるステロイドとは優先順位が異なります。", "evidence": "COPDの薬物療法アルゴリズム", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "気管支喘息", "question": "喘息の急性増悪時に見られる、低酸素状態で唇や爪が青紫色になる状態を何というか。", "options": ["貧血", "チアノーゼ", "黄疸", "色素沈着"], "correctAnswerIndex": 1, "explanation": "還元ヘモグロビンが増加することで起こり、緊急の酸素投与や処置が必要な指標となります。", "evidence": "急性呼吸不全の症状", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "気管支喘息", "question": "喘息患者の呼気中に含まれ、気道の炎症の程度を数値化できる指標はどれか。", "options": ["呼気NO（一酸化窒素）濃度", "CO2濃度", "酸素濃度", "窒素濃度"], "correctAnswerIndex": 0, "explanation": "呼気NO測定は、好酸球性炎症の存在を客観的に評価する非侵襲的な検査です。", "evidence": "喘息の診断的検査", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "気管支喘息", "question": "喘息の「長期管理薬（コントローラー）」として最も重要な薬剤クラスはどれか。", "options": ["吸入β2刺激薬（短時間作用性）", "吸入ステロイド薬（ICS）", "抗生物質", "去痰薬"], "correctAnswerIndex": 1, "explanation": "喘息の本態は気道の慢性炎症であるため、毎日継続して炎症を抑えるステロイド吸入が治療の核となります。", "evidence": "喘息予防・管理ガイドライン", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察",
        "subCategory": "肺炎", "question": "誤嚥性肺炎を予防するために行われる「嚥下調整食」において、サラサラした液体に混入させることで飲み込みやすくするものはどれか。", "options": ["スパイス", "とろみ剤", "砂糖", "油"], "correctAnswerIndex": 1, "explanation": "液体の流速を下げることで、気道への誤流入（誤嚥）を防ぎます。", "evidence": "高齢者肺炎の誤嚥防止ケア", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察",
        "subCategory": "肺炎", "question": "マイコプラズマ肺炎において、聴診で見られる特徴的な所見はどれか。",
        "options": ["激しい捻髪音", "特異的な異常音がないことが多い（理学的所見に乏しい）", "常に喘鳴が聞こえる", "心雑音"],
        "correctAnswerIndex": 1,
        "explanation": "頑固な乾性咳嗽を呈する一方で、胸部聴診所見が正常に近いことも多く、レントゲン所見との乖離が特徴の一つです。",
        "evidence": "非定型肺炎の臨床像",
        "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "解剖生理", "question": "成人の気管の長さは、およそ何cm程度か。", "options": ["およそ2-3cm", "およそ10-12cm", "およそ30cm", "およそ1m"], "correctAnswerIndex": 1, "explanation": "喉頭に続き、第6頸椎から第5胸椎レベルまでの約10〜12cm、直径約2cmの管状の器官です。", "evidence": "気管の解剖学的計測値", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "解剖生理", "question": "肺の表面でガス交換が行われる最小単位の名前はどれか。", "options": ["気管支", "肺胞", "肺葉", "胸腔"], "correctAnswerIndex": 1, "explanation": "肺胞の周囲を取り囲む毛細血管との間で、酸素と二酸化炭素の受け渡しが行われます。", "evidence": "呼吸器系の生理機能", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "肺結核", "question": "結核の感染経路で正しいものはどれか。", "options": ["血液感染", "飛沫核感染（空気感染）", "接触感染", "媒介動物感染"], "correctAnswerIndex": 1, "explanation": "飛沫が乾燥して軽くなった「飛沫核」が、空気の流れに乗って吸い込まれることで感染します。", "evidence": "感染症法の分類と予防", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "肺結核", "question": "結核の治療薬「リファンピシン」の内服中に、患者に事前に説明しておくべき生理的な変化はどれか。", "options": ["尿や涙がオレンジ色（赤色）に着色する", "目が光る", "声が変わる", "身長が伸びる"], "correctAnswerIndex": 0, "explanation": "薬剤そのものの色が体液に反映されるためで、無害であることを伝えて不安を解消します。", "evidence": "抗結核薬の服薬指導", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "間質性肺炎", "question": "間質性肺炎の聴診でみられる、マジックテープを剥がすようなパリパリとした音を何というか。", "options": ["水泡音（ラッセル音）", "捻髪音（ファイン・クラックル）", "いびき音（ロンカイ）", "笛音（ウィーズ）"], "correctAnswerIndex": 1, "explanation": "吸気終末に著明になる乾性の断続音で、肺の線維化を示唆する重要な所見です。", "evidence": "呼吸音の異常分類", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "間質性肺炎", "question": "特発性肺線維症（IPF）において、CT画像でみられる特徴的な「蜂の巣のような影」を何というか。", "options": ["浸潤影", "蜂巣肺（honeycombing）", "結節影", "空洞"], "correctAnswerIndex": 1, "explanation": "肺構造が破壊され、多房性の嚢胞が密集した状態を指します。", "evidence": "画像診断の用語", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "間質性肺炎", "question": "特発性肺線維症（IPF）の進行を抑えるために用いられる、線維化を阻害する薬剤はどれか。", "options": ["抗菌薬", "抗線維化薬（ピルフェニドン、ニンテダニブ等）", "去痰薬", "強心薬"], "correctAnswerIndex": 1, "explanation": "肺の線維化のスピードを遅らせ、呼吸機能の低下を緩和する効果があります。", "evidence": "IPFの治療指針", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "気胸", "question": "緊張性気胸において、バイタルサインが急激に悪化（血圧低下、頻脈）する主な原因は何か。", "options": ["出血多量", "胸腔内圧の上昇による心臓の圧迫と静脈還流の減少（ショック）", "激しい痛み", "酸素が足りないだけ"], "correctAnswerIndex": 1, "explanation": "漏れた空気が心臓や反対側の肺を押しつぶし、血液が心臓に戻れなくなるため、一刻を争う脱気が必要です。", "evidence": "気胸の緊急度判断", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "胸水・穿刺", "question": "胸腔ドレナージ中の管理において、ドレーンバッグの設置位置として適切なのはどれか。", "options": ["患者の枕元（高い位置）", "患者の胸部と同じ高さ", "挿入部位より低い床に近い位置", "廊下"], "correctAnswerIndex": 2, "explanation": "サイフォンの原理と重力を利用して排液を促し、また逆流を防ぐために、常に挿入部位より低い位置に保持します。", "evidence": "ドレーン管理の基本原則", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "胸水・穿刺", "question": "胸腔ドレーンバッグ内の「水封室」で、呼吸に合わせて水柱が上下に動く現象を何というか。", "options": ["サイクリング", "レスピレーション・スイング（呼吸性移動）", "バブリング（鼓動）", "オーバーフロー"], "correctAnswerIndex": 1, "explanation": "胸腔内の圧力が呼吸とともに変化している（疎通がある）ことを示す正常な反応です。", "evidence": "水封ドレーンの観察", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "肺塞栓症", "question": "肺血栓塞栓症を診断する際に、血液検査で上昇するフィブリン分解産物はどれか。", "options": ["CRP", "D-ダイマー", "ALT", "BNP"], "correctAnswerIndex": 1, "explanation": "血栓が溶かされる際に生じる物質で、これが低ければ大規模な血栓症を否定する材料になります。", "evidence": "肺血栓塞栓症のスクリーニング", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "肺塞栓症", "question": "肺血栓塞栓症の治療および再発予防で用いられるヘパリンやワーファリンなどの薬剤クラスを何というか。", "options": ["抗血小板薬", "抗凝固薬", "血栓溶解薬", "血管拡張薬"], "correctAnswerIndex": 1, "explanation": "血液が固まるプロセス（凝固因子）を阻止して、新たな血栓ができるのを防ぎます。", "evidence": "抗血栓療法の分類", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "人工呼吸器", "question": "人工呼吸器管理において、患者が自力で吸おうとしたときに機械がサポートを開始するきっかけ（感度設定）を何というか。", "options": ["トリガー", "PEEP", "一回換気量", "酸素濃度"], "correctAnswerIndex": 0, "explanation": "圧や流量の変化を感知して、機械がタイミングを合わせて送気する仕組みです。", "evidence": "人工呼吸器の設定項目", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "人工呼吸器", "question": "人工呼吸器の呼気終末に一定の圧をかけることで肺胞の虚脱を防ぐ設定（PEEP）の主な目的はどれか。", "options": ["痰を出しやすくする", "機能的残気量を増やし、酸素化を改善する", "加湿をする", "機械の音を小さくする"], "correctAnswerIndex": 1, "explanation": "肺を膨らませたままにすることで、換気血流比を改善し、酸素を取り込みやすくします。", "evidence": "PEEPの生理的効果", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "喀痰", "question": "痰を出しやすくする去痰薬の中で、粘液タンパクを切断して痰をサラサラにする作用を持つ薬剤（ムコダイン等）の分類を何というか。", "options": ["気道分泌促進薬", "気道粘液溶解薬", "潤滑薬", "気管支拡張薬"], "correctAnswerIndex": 1, "explanation": "痰の構造に直接働きかけて粘度を下げることで、排出を容易にします。", "evidence": "去痰薬の作用機序", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "解剖生理", "question": "血液のpH（酸・塩基平衡）を調節する主な2つの臓器はどこか。", "options": ["脳と心臓", "肺と腎臓", "肝臓と脾臓", "胃と腸"], "correctAnswerIndex": 1, "explanation": "肺はCO2を排出（呼吸性）し、腎臓はHCO3-を保持（代謝性）することでpHを常に一定に保っています。", "evidence": "ホメオスタシスの調節系", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "採血・検査", "question": "動脈血ガス分析のための採血後、最も重要な処置はどれか。", "options": ["すぐに温める", "5分以上しっかりと圧迫止血を行う", "採血部位をマッサージする", "放置する"], "correctAnswerIndex": 1, "explanation": "動脈は圧が高いため、内出血や血腫を防ぐために静脈よりも長く、しっかりとした圧迫圧が必要です。", "evidence": "動脈穿刺の合併症予防", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "睡眠時無呼吸", "question": "睡眠時無呼吸症候群（SAS）の簡易検査や精密検査（PSG）で見られる「AHI」とは何の平均回数か。", "options": ["1時間あたりの無呼吸と低呼吸の合計回数", "1分間の心拍数", "起きた回数", "いびきの音量"], "correctAnswerIndex": 0, "explanation": "AHI（Apnea Hypopnea Index）が5以上でSASと診断され、重症度により治療方針が決まります。", "evidence": "SASの診断基準", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "気管支喘息", "question": "喘息の吸入ステロイド薬の副作用として、口の中にカビが生えるような状態（口腔カンジダ症）を予防するために必須の行動はどれか。", "options": ["歯磨きをしない", "吸入後のうがい", "甘いものを控える", "食事を抜く"], "correctAnswerIndex": 1, "explanation": "口の中に残った薬剤を洗い流すことで、局所的な免疫抑制による感染を防ぎます。", "evidence": "吸入手技の指導ポイント", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "肺癌", "question": "肺小細胞癌（SCLC）で、ホルモン分泌（ADH不適切分泌症候群：SIADH）により引き起こされる電解質異常はどれか。", "options": ["低ナトリウム血症", "高カルシウム血症", "低カリウム血症", "高マグネシウム血症"], "correctAnswerIndex": 0, "explanation": "抗利尿ホルモンが過剰になることで水分が体に溜まり、血液が薄まって低Na血症、ふらつき、意識障害などを起こします。", "evidence": "肺癌に合併する内分泌症候群", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "COPD", "question": "COPDの急性増悪の最大かつ最も多い原因は何か。", "options": ["運動不足", "気道感染（風邪、インフルエンザ、細菌性肺炎など）", "食べ過ぎ", "睡眠不足"], "correctAnswerIndex": 1, "explanation": "風邪などをきっかけに急激に肺機能が悪化するため、予防接種や手洗い、早期受診の指導が重要です。", "evidence": "COPD増悪の管理", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "解剖生理", "question": "呼吸中枢が存在する脳の部位はどこか。", "options": ["大脳皮質", "延髄・橋", "小脳", "脊髄"], "correctAnswerIndex": 1, "explanation": "延髄にある呼吸中枢が血液中のCO2分圧等の変化を感知し、呼吸のリズムを無意識にコントロールしています。", "evidence": "呼吸の調節機構", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "膠原病関連肺病変", "question": "関節リウマチに伴う間質性肺炎の治療で、炎症（免疫反応）を強力に抑えるために用いられる薬剤はどれか。", "options": ["副腎皮質ステロイド、免疫抑制薬", "降圧薬", "利尿薬", "整腸剤"], "correctAnswerIndex": 0, "explanation": "自己免疫疾患に伴う肺病変では、まず炎症を止める治療が優先されます。", "evidence": "間質性肺疾患の治療", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "術後看護", "question": "肺切除術後の合併症で、吻合部や肺表面から空気が漏れ続け、ドレーンの排気（エアリーク）が止まらない状態を何というか。", "options": ["気胸", "遷延性肺ろう", "肺膿瘍", "胸膜炎"], "correctAnswerIndex": 1, "explanation": "数日以上リークが続く場合は、吸引圧の調整や、場合によっては再手術や癒着術を検討します。", "evidence": "術後合併症の観察", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "吸入療法", "question": "ドライパウダー吸入器（DPI）を用いる際、患者に指導すべき吸い方のポイントはどれか。", "options": ["ゆっくり長く吸う", "一気に、強く、深く吸い込む", "鼻から吸う", "浅く吸う"], "correctAnswerIndex": 1, "explanation": "薬剤を粉末状にバラバラにして肺の奥まで届けるために、ある程度の吸気流速（勢い）が必要です。", "evidence": "吸入デバイスの使い分け", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "サルコイドーシス", "question": "サルコイドーシスにおいて、眼に現れる特徴的な症状（ぶどう膜炎）で見られる見た目の異常はどれか。", "options": ["目が真っ赤に腫れる", "霧視（目がかすむ）、飛蚊症（虫が飛んで見える）", "視力が10倍になる", "色が変わる"], "correctAnswerIndex": 1, "explanation": "全身性の肉芽腫疾患であり、肺以外に眼や心臓、皮膚などの異常がないかチェックが必要です。", "evidence": "全身疾患としてのサルコイドーシス", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "採血・検査", "question": "肺機能検査（スパイロメトリー）において、肺自体のしなやかさや、空気がどれだけ入るかを示す指標を何というか。", "options": ["一秒率", "拘束性障害（肺活量など）", "最大換気量", "残気量"], "correctAnswerIndex": 1, "explanation": "%肺活量（%VC）が80%未満の場合、拘束性換気障害（間質性肺炎など）を疑います。", "evidence": "呼吸機能検査の解釈", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "採血・検査", "question": "肺機能検査において、空気の通り道の狭さ（気流制限）を評価する、最初の一秒間に吐き出せる割合を何というか。", "options": ["一秒率（FEV1%）", "機能的残気量", "予備吸気量", "全肺気量"], "correctAnswerIndex": 0, "explanation": "一秒率が70%未満の場合、閉塞性換気障害（COPDや喘息）を疑います。", "evidence": "閉塞性障害の指標", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "肺癌", "question": "肺癌術後の患者が、急に胸の痛みと呼吸困難を訴え、片側の肺音が消失し、気管が反対側に偏位している場合に疑うべき致死的な合併症はどれか。", "options": ["心筋梗塞", "緊張性気胸", "肺炎", "便秘"], "correctAnswerIndex": 1, "explanation": "術後のエアリークが悪化して緊張性気胸になると、急な心停止のリスクがあるため、最優先のアセスメント項目です。", "evidence": "術後エマージェンシー", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "禁煙支援", "question": "禁煙治療において、脳内のニコチン受容体に作用して喫煙の満足感を得にくくし、離脱症状を和らげる飲み薬はどれか。", "options": ["バレニクリン（チャンピックス）", "ニコチンガム", "ニコチンパッチ", "安定剤"], "correctAnswerIndex": 0, "explanation": "ニコチンを含まない内服薬であり、高い禁煙成功率が期待できますが、副作用として吐き気や悪夢が報告されています。", "evidence": "禁煙治療の基礎", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "疾患観察", "question": "高齢者が夜間に「ゼーゼー」と苦しくなり、起き上がると楽になる状態（起坐呼吸）が見られた。呼吸器疾患以外でまず疑うべきものはどれか。", "options": ["心不全（心源性喘息）", "胃潰瘍", "筋肉痛", "ただの寝不足"], "correctAnswerIndex": 0, "explanation": "心不全により肺に水が溜まる（肺水腫）と、横になるより座っている方が肺の容量が確保され楽になるのが特徴です。", "evidence": "心原性呼吸困難のアセスメント", "reference": "病気が見える　呼吸器"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "肺癌", "question": "肺癌の腫瘍マーカー「CEA」が上昇している場合に、肺癌以外で考慮すべき要因はどれか。", "options": ["喫煙習慣、消化器系の癌、炎症性疾患など", "睡眠時間", "運動強度", "髪の毛の長さ"], "correctAnswerIndex": 0, "explanation": "CEAは特異度が100%ではないため、喫煙や良性の肺疾患、大腸癌などでも上昇することがあります。", "evidence": "腫瘍マーカーの限界と活用", "reference": "病気が見える　呼吸器"
    }
];

const updatedQuestions = [...questions, ...newQuestions];
fs.writeFileSync(questionsPath, JSON.stringify(updatedQuestions, null, 2), 'utf8');
console.log(`Successfully updated questions.json with Batch 16-E (42 questions). New Total: ${updatedQuestions.length}`);
