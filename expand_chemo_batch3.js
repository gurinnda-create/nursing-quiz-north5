const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, 'src/data/questions.json');
const rawData = fs.readFileSync(questionsPath, 'utf8');
const questions = JSON.parse(rawData);

let currentId = Math.max(...questions.map(q => q.id), 0) + 1;

const batch3 = [
    // --- 免疫関連副作用 (irAE) 深掘り ---
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "irAEとしての「副腎不全」で見られる電解質異常の特徴はどれか。", "options": ["高ナトリウム血症、低カリウム血症", "低ナトリウム血症、高カリウム血症", "高カルシウム血症", "変化なし"], "correctAnswerIndex": 1, "explanation": "副腎皮質ホルモン（アルドステロン等）の欠乏により、ナトリウムが失われカリウムが保持されるため、低Na・高K血症を呈します。", "evidence": "irAE管理ガイド", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "化学療法", "question": "ICI投与中に「筋肉痛、脱力感、褐色尿（コーラ色）」が見られた。まず何を疑うべきか。", "options": ["腎結石", "免疫関連の横紋筋融解症", "単なる筋肉痛", "尿路感染症"], "correctAnswerIndex": 1, "explanation": "横紋筋融解症では筋肉組織が壊れ、ミオグロビンが尿中に排出されるため褐色尿となります。腎不全を併発する恐れがあるため緊急対応が必要です。", "evidence": "irAE副作用プロファイル", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "抗PD-L1抗体（デュルバルマブ等）投与後の「肺臓炎」に対し、最初に行われる標準的治療はどれか。", "options": ["抗生物質のみ", "高用量副腎皮質ステロイド（プレドニゾロン等）", "抗がん剤の増量", "経過観察"], "correctAnswerIndex": 1, "explanation": "irAEによる炎症を抑えるため、ステロイド治療が第一選択となります。重症度によりパルス療法も検討されます。", "evidence": "irAE間質性肺疾患の管理指針", "reference": "オリジナル"
    },
    // --- 分子標的薬・新規薬剤 ---
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "MET遺伝子外exon 14スキッピング変異陽性の肺癌に用いられる「テポチニブ」で最も多い副作用はどれか。", "options": ["脱毛", "浮腫（むくみ）", "聴覚障害", "味覚障害"], "correctAnswerIndex": 1, "explanation": "MET阻害薬は特徴的に四肢などの強い浮腫（末梢性浮腫）を起こしやすく、体重変化のチェックが重要です。", "evidence": "テポチニブ適正使用ガイド", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "RET融合遺伝子陽性肺癌に用いられる「セルペルカチニブ（レットヴィモ）」投与中に注意すべき併用禁忌の食品・薬剤はどれか。", "options": ["グレープフルーツ、セントジョーンズワート（CYP3A4代謝に関連）", "牛乳", "納豆", "緑茶"], "correctAnswerIndex": 0, "explanation": "多くの分子標的薬はCYP3A4という酵素で代謝されるため、その働きを阻害するグレープフルーツや、促進するセントジョーンズワートとの併用は血中濃度を変動させます。", "evidence": "添付文書", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "ROS1遺伝子陽性肺癌の治療に用いられる「エヌトレクチニブ（ロズリトレク）」で、特に特徴的な副作用（神経系）はどれか。", "options": ["攻撃性の増加", "味覚不全、めまい、知覚異常", "不眠", "食欲増進"], "correctAnswerIndex": 1, "explanation": "ROS1/NTRK阻害薬では中枢神経系への影響により、味覚の変化やめまい、感覚の異常が現れやすいことが知られています。", "evidence": "ロズリトレク適正使用ガイド", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "化学療法", "question": "分子標的薬治療で効果判定を行う際、血液中のがん由来DNAを解析する手法を何と呼ぶか。", "options": ["血栓検査", "リキッドバイオプシー（液体生検）", "腫瘍マーカー単独検査", "染色体検査"], "correctAnswerIndex": 1, "explanation": "従来の組織採取（組織生検）よりも低侵襲で、リアルタイムに遺伝子変異の状態を確認できる手法です。", "evidence": "肺癌診療ガイドライン", "reference": "オリジナル"
    },
    // --- 化学療法に伴う手技・安全管理 ---
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "化学療法", "question": "抗がん剤投与中に「インフュージョン・リアクション」が起こりやすい時間帯はいつか。", "options": ["投与開始15〜30分以内", "投与終了の3日後", "投与開始の24時間後", "薬剤が空になる直前"], "correctAnswerIndex": 0, "explanation": "多くは投与開始初期に起こります。そのため、投与開始から15分程度はスタッフがベッドサイドで厳重に観察することが求められます。", "evidence": "がん薬物療法看護マニュアル", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "化学療法", "question": "化学療法で使用される「インフュージョンポンプ」のアラームが鳴った際、最初に行うべきことはどれか。", "options": ["音を消して放置する", "患者の刺入部と全ルートの閉塞・屈曲・漏れがないかを確認する", "コンセントを抜く", "ポンプの故障と断定して交換する"], "correctAnswerIndex": 1, "explanation": "まずは物理的な閉塞や漏れなどの異常がないかを確認し、安全を確保します。", "evidence": "ME機器安全管理", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "化学療法", "question": "抗がん剤の「ダブルチェック」を行う際、二人のナースが確認すべき項目で不適切なものはどれか。", "options": ["患者名・レジメン名", "薬剤名・用量・投与経路", "投与速度・順序", "その日の患者のランチの内容"], "correctAnswerIndex": 3, "explanation": "6R（正しい患者、薬剤、用量、方法、時間、目的）に基づく確認が必須です。ランチの内容は関係ありません。", "evidence": "医療安全管理マニュアル", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "化学療法", "question": "CVポートから点滴を行う際、専用の「ヒューバー針（ノンコアリングニードル）」を使用しなければならない理由は何か。", "options": ["薬が早く流れるから", "ポートのセプタム（ゴム部分）を削り取らず、漏れを防止するため", "痛くないから", "保険点数が高いから"], "correctAnswerIndex": 1, "explanation": "通常の針ではゴムを削り取ってしまい、ポートの破損や薬剤漏れ、塞栓の原因となります。専用針はゴムを押し広げて刺す構造になっています。", "evidence": "血管内留置カテーテル管理ガイドライン", "reference": "オリジナル"
    },
    // --- サポーティブケア・精神的支援 ---
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "化学療法", "question": "化学療法による「しびれ（末梢神経障害）」に対し、患者自身ができる対策として適切なのはどれか。", "options": ["熱湯に手をつけて刺激する", "冷たい水に長時間さらす", "手足を冷やさないように保護し、転倒に注意する", "全く動かさないようにする"], "correctAnswerIndex": 2, "explanation": "冷えによってしびれが悪化することがあるため、保温が推奨されます。また、感覚が鈍くなるため怪我や転倒への注意が必要です。", "evidence": "がん薬物療法に伴う末梢神経障害マネジメント", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "化学療法", "question": "抗がん剤投与後、患者が「味覚がおかしい、何を食べても砂のようだ」と話している。適切な関わりはどれか。", "options": ["「気のせいですよ」と笑って流す", "「もっと濃い味にしましょう」と強制する", "味覚変化を共感的理解で受け止め、食べやすい工夫（出汁を効かせる、冷ます等）を一緒に考える", "「もう治りません」とはっきり告げる"], "correctAnswerIndex": 2, "explanation": "味覚障害はQOLを大きく下げます。寄り添いながら、個々の好みの変化に合わせた食事の工夫を提案します。", "evidence": "緩和ケアにおける食支援", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "がん看護", "question": "化学療法を受ける患者の「治療の目標」が、完治から「延命・症状緩和」へ移行した際の看護で重要なのはどれか。", "options": ["検査結果のみを詳細に伝える", "残された時間をいかに過ごすか、患者のライフスタイルや意向を尊重する（アドバンス・ケア・プランニング）", "治療を強要する", "希望を持たせないように暗い話だけをする"], "correctAnswerIndex": 1, "explanation": "人生の質（QOL）を優先し、患者が「どう生きたいか」を支える多職種連携が重要です。", "evidence": "がん看護基本概念", "reference": "オリジナル"
    },
    // --- 薬剤別追加 ---
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "B型肝炎ウイルス（HBV）既往感染者が化学療法を受ける際、特に注意すべきリスクはどれか。", "options": ["B型肝炎の再活性化（de novo B型肝炎）", "C型肝炎への変異", "肝がんの急激な縮小", "副作用がなくなる"], "correctAnswerIndex": 0, "explanation": "化学療法による免疫抑制により、体内に潜伏していたHBVが再び増殖し、重症肝炎を起こすことがあります。定期的なHBV-DNA量の測定が必要です。", "evidence": "HBV再活性化予防ガイドライン", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "アブラキサン（nab-パクリタキセル）が通常のパクリタキセルと大きく異なる点はどれか。", "options": ["効果が半分である", "アルコールを含まない（アルコール過敏症でも使用可能）", "点滴時間が5倍かかる", "値段が極めて安い"], "correctAnswerIndex": 1, "explanation": "ヒト血清アルブミンにパクリタキセルを結合させており、エタノールや溶媒（ポリオキシエチレンヒマシ油）を含まないため、過敏症リスクが低減され、フィルタの使用も不要です。", "evidence": "アブラキサン適正使用ガイド", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "化学療法中の「便秘」に対し、まず推奨される非薬物療法はどれか。", "options": ["断食", "水分摂取と適度な運動", "毎日コーラを飲む", "下剤を一度に大量に飲む"], "correctAnswerIndex": 1, "explanation": "活動量の低下や水分不足が便秘を助長します。基本的な生活習慣の調整が第一歩です。", "evidence": "がん患者の消化器症状マネジメント", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "化学療法開始前に「歯科受診」が推奨される最大の理由はどれか。", "options": ["歯を白くするため", "抗がん剤による口内炎の重症化や、化膿・感染のリスクを減らすため", "歯医者が空いているから", "歯科の点数稼ぎ"], "correctAnswerIndex": 1, "explanation": "抗がん剤による好中球減少時に歯周病などの火種があると、そこから全身感染症（菌血症）に発展したり、口内炎が悪化したりするため、事前の口腔ケアが極めて重要です。", "evidence": "周術期口腔機能管理ガイドライン", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "肺がんのレジメンで「CBDCA + PEM + Pembrolizumab」が行われる際、患者への説明で正しいのはどれか。", "options": ["「1種類の薬だけ使います」", "「細胞障害性抗がん剤2種と、免疫チェックポイント阻害薬を組み合わせた強力な治療です」", "「飲み薬だけの治療です」", "「副作用は絶対にありません」"], "correctAnswerIndex": 1, "explanation": "複数の機序の薬剤を組み合わせることで高い効果を狙いますが、それぞれの薬剤の副作用が重なって現れる可能性があることを伝える必要があります。", "evidence": "レジメン説明用資材", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "化学療法", "question": "ICI（免疫チェックポイント阻害薬）投与後の「甲状腺機能障害」で、甲状腺機能亢進症（破壊性甲状腺炎）から機能低下症へ移行する際に注意すべきバイタルの変化はどれか。", "options": ["頻脈から徐脈、低体温、血圧低下（無気力状態）", "血圧の急上昇", "高熱", "呼吸数の増加"], "correctAnswerIndex": 0, "explanation": "破壊によって一時的にホルモンが漏れ出し亢進した後、枯渇して低下症に至ります。徐脈やむくみ、精神活動の低下に注意します。", "evidence": "irAE管理ガイド", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "レボフロキサシンなどの「キノロン系抗菌薬」を化学療法中のFN予防で服用することがある。その主な目的はどれか。", "options": ["ウイルスを殺すため", "腸内細菌などによる内因性感染のリスクを低減するため", "食欲を出すため", "血圧を下げるため"], "correctAnswerIndex": 1, "explanation": "高度な好中球減少が予想される場合、一部のレジメンでは細菌感染を予防するために抗菌薬が処方されます。", "evidence": "がん薬物療法における感染予防", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "ICI投与中に「劇症1型糖尿病」が発症した場合、診断に不可欠な検査項目はどれか。", "options": ["身長・体重", "血糖値、HbA1c、血中・尿中Cペプチド（インスリン分泌能）", "視力検査", "X線検査"], "correctAnswerIndex": 1, "explanation": "急激なインスリン欠乏を確認するため、血糖値だけでなくCペプチドの消失を確認することが診断の決め手となります。", "evidence": "劇症1型糖尿病診断基準", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "化学療法", "question": "間質性肺炎の既往がある患者にICI（免疫チェックポイント阻害薬）を投与するリスクはどれか。", "options": ["リスクは全くない", "間質性肺炎が再燃・増悪し、致死的な呼吸不全を起こすリスクが高い", "薬が効きすぎる", "咳が止まらなくなるだけ"], "correctAnswerIndex": 1, "explanation": "既往や合併がある場合、irAEとしての肺炎リスクが格段に高まるため、投与の可否は極めて慎重に判断されます。", "evidence": "irAE副作用マネジメント", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "がん化学療法の「休薬・減量」の判断基準となる、国際的な有害事象の指標を何と呼ぶか。", "options": ["GCS", "CTCAE（共通有害事象共用語規準）", "JCS", "WHO分類"], "correctAnswerIndex": 1, "explanation": "グレード1（軽症）から5（死亡）までの尺度で副作用を評価し、治療継続の判断材料にします。", "evidence": "がん薬物療法における評価基準", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "細胞障害性抗がん剤の投与前に「デキサメタゾン（ステロイド）」を投与する主な理由は何か。", "options": ["ガンを直接治すため", "急性および遅発性の悪心・嘔吐を予防するため", "眠くするため", "食欲をなくすため"], "correctAnswerIndex": 1, "explanation": "ステロイドは制吐薬としての高い効果があり、多くのレジメンにおいて前投薬として組み込まれています。", "evidence": "制吐薬適正使用ガイドライン", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "化学療法", "question": "化学療法終了後、CVポートをフラッシュする際に用いられる「ロック用製剤」は一般的にどれか。", "options": ["蒸留水", "ヘパリン生理食塩液（または生理食塩液）", "アルコール", "抗生物質"], "correctAnswerIndex": 1, "explanation": "カテーテル内での血液凝固（閉塞）を防ぐためにヘパリン加生食等で満たします。最近ではポートの種類により生食のみで良い場合もあります。", "evidence": "CVポート管理マニュアル", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "化学療法", "question": "化学療法中の「血小板減少」において、患者に指導すべき内容として適切なのはどれか。", "options": ["毎日お酒を飲む", "鼻を強くかまない、怪我に気をつける", "激しいコンタクトスポーツを推奨する", "脱毛を気にする"], "correctAnswerIndex": 1, "explanation": "血が止まりにくいため、粘膜の保護や外傷予防が重要です。鼻出血や歯肉出血に注意を促します。", "evidence": "血液毒性に伴う生活支援", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "化学療法", "question": "プラチナ製剤などを使用するレジメンにおいて、投与前後で「体重測定」を行う主な理由は何か。", "options": ["太ったか確認するため", "体液貯留（浮腫）やハイドレーションによる水分過多・心負荷をアセスメントするため", "食事量を推定するため", "なんとなく習慣で"], "correctAnswerIndex": 1, "explanation": "大量の輸液を行う場合、尿量が追いつかずに心負荷がかかっていないか、体重増加の推移で確認します。", "evidence": "肺がん化学療法の看護アセスメント", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "制吐薬「パロノセトロン」はどの世代の5-HT3受容体拮抗薬か。", "options": ["第1世代", "第2世代（半減期が長く効果が持続する）", "第3世代", "漢方薬"], "correctAnswerIndex": 1, "explanation": "パロノセトロンは第2世代の5-HT3受容体拮抗薬で、従来の薬剤よりも半減期が長く、遅発性の嘔吐にも一定の効果を発揮します。", "evidence": "制吐薬の分類", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "がん看護", "question": "がん告知を受けたばかりの患者が「なぜ私だけがこんな目に」と怒りをあらわにしている。この段階での看護師の対応として適切なのはどれか。", "options": ["「落ち着いてください」と諭す", "「もっと大変な人もいます」と比較する", "怒りの感情を否定せず、表出を促し、傍にいる（傾聴）", "無視して部屋を出る"], "correctAnswerIndex": 2, "explanation": "キューブラー＝ロスの死の受容過程や、スピリチュアルな苦痛を理解し、防衛機制としての怒りを受け止めることが大切です。", "evidence": "サイコオンコロジーの基本", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "ドセタキセルによる「末梢神経障害」で、生活上の助言として誤っているのはどれか。", "options": ["ボタンのない服を選ぶ", "階段には手すりを使う", "素足で生活する（刺激を与えるため）", "包丁の使用に注意する"], "correctAnswerIndex": 2, "explanation": "感覚が鈍くなっているため、素足では怪我に気づきにくくなります。靴下を履いて保護することが推奨されます。", "evidence": "末梢神経障害の生活指導", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "肺がん治療薬「アファチニブ（ジオトリフ）」内服中、特に控えるべき飲み物はどれか。", "options": ["お茶", "セイヨウオトギリソウ（セントジョーンズワート）を含むハーブティー", "水", "スポーツドリンク"], "correctAnswerIndex": 1, "explanation": "セントジョーンズワートは代謝酵素を誘導し、抗がん剤の血中濃度を下げてしまい、効果を減弱させる可能性があります。", "evidence": "添付文書", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "化学療法", "question": "ICI投与後に見られるirAEの「重症型筋無力症」のアセスメントで、緊急性が極めて高い症状はどれか。", "options": ["話がしにくい（構音障害）", "呼吸が苦しい、飲み込めない（球麻痺症状）", "まぶたが少し重い", "手足がだるい"], "correctAnswerIndex": 1, "explanation": "呼吸筋麻痺や誤嚥性肺炎を来すクリーゼの状態は生命に関わるため、ICU管理が必要になるほどの緊急事態です。", "evidence": "irAE管理ガイド", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "プラチナ製剤「ネダプラチン」がシスプラチンと比較して軽減されている副作用はどれか。", "options": ["骨髄抑制", "腎毒性と悪心・嘔吐", "脱毛", "視力障害"], "correctAnswerIndex": 1, "explanation": "ネダプラチンはシスプラチンを改良し、腎毒性や催吐性を抑えた薬剤です。ただし、血液毒性（血小板減少など）は現れやすい注意点があります。", "evidence": "添付文書", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "化学療法", "question": "中心静脈カテーテル（CVC）挿入中の患者が点滴中に「胸の痛み、咳」を訴え、バイタルが低下した。空気が混入した疑い（空気塞栓）がある場合、とるべき体位はどれか。", "options": ["右側臥位", "左側臥位、頭低位（トレンデレンブルグ位）", "座位", "うつ伏せ"], "correctAnswerIndex": 1, "explanation": "右心室に入った空気が肺動脈へ流れるのを防ぐため、左側を下にすることで空気を右心房に留めやすくし、頭を低くします。", "evidence": "中心静脈管理の合併症対応", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "化学療法", "question": "化学療法による「脱毛」に対するウィッグ（かつら）の準備時期として最適なのはどれか。", "options": ["全部抜けてから", "治療開始前（自毛があるうちにスタイルを合わせる）", "治療が終わってから", "準備する必要はない"], "correctAnswerIndex": 1, "explanation": "元の髪型に合わせやすく、精神的なショックを和らげるためにも、抜ける前からの準備が推奨されます。", "evidence": "アピアランスケアの実際", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "シスプラチン投与時に行われる「マグネシウム」補給の主な目的は何か。", "options": ["骨を強くするため", "シスプラチンによる尿中排出促進に伴う、低マグネシウム血症とそれに伴う腎障害を予防するため", "血圧を上げるため", "眠気を防ぐため"], "correctAnswerIndex": 1, "explanation": "シスプラチンは腎細尿管を傷つけ、電解質の再吸収を妨げます。特にMg不足は腎毒性を助長するため、補液に添加されることが一般的です。", "evidence": "シスプラチン腎毒性管理指針", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "化学療法", "question": "がん薬物療法を受ける高齢患者において、特に注意すべき身体的特徴はどれか。", "options": ["記憶力が良すぎる", "予備能（心・腎・肝機能等）の低下と、多剤併用による相互作用のリスク", "骨が丈夫すぎる", "皮膚が厚すぎる"], "correctAnswerIndex": 1, "explanation": "生理的な機能低下により副作用が強く出やすく、また持病の薬との飲み合わせにも細心の注意が必要です。", "evidence": "高齢者癌薬物療法ガイドライン", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "5-HT3受容体拮抗薬（制吐薬）の主な副作用で、患者に事前に伝えておくべき症状はどれか。", "options": ["頻尿", "便秘、頭痛", "多汗", "視力上昇"], "correctAnswerIndex": 1, "explanation": "このクラスの薬剤は腸管の動きを抑制するため便秘になりやすく、また頭痛もよく見られる副作用です。", "evidence": "添付文書", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "化学療法", "question": "化学療法終了後に、「集中力が続かない、物忘れが増えた」と訴える状態を俗に何と呼ぶか。", "options": ["認知症", "ケモブレイン", "統合失調症", "健忘症"], "correctAnswerIndex": 1, "explanation": "「ケモブレイン」と呼ばれ、抗がん剤治療に伴う認知機能低下が研究されています。患者の不安を和らげる説明が必要です。", "evidence": "がんサバイバーシップ看護", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "抗がん剤が目に入ってしまった場合の第一選択の対応はどれか。", "options": ["布で拭く", "直ちに大量の流水（または生理食塩液）で15分以上洗浄し、眼科を受診する", "目薬をさす", "そのままにする"], "correctAnswerIndex": 1, "explanation": "曝露時の緊急対応の基本です。こすらずに、すぐにしっかり洗い流すことが重要です。", "evidence": "曝露対策マニュアル", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "化学療法", "question": "外来化学療法を受けている患者が「38.5℃の発熱」があった場合に取るべき行動はどれか。", "options": ["氷枕で冷やして様子を見る", "次の受診（2週間後）まで待つ", "直ちに病院（化学療法部や主治医）に連絡し、指示を仰ぐ", "市販の解熱剤を飲んで寝る"], "correctAnswerIndex": 2, "explanation": "FN（発熱性好中球減少症）の疑いがあり、一刻を争う場合があります。遅滞なく病院へ連絡するよう徹底指導します。", "evidence": "外来化学療法患者指導資料", "reference": "オリジナル"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "肺がんのレジメン名で「CBDCA + nab-PTX」の「nab-PTX」とは何の薬剤か。", "options": ["パクリタキセル", "アブラキサン（ナノ粒子白蛋白結合パクリタキセル）", "ドセタキセル", "ビノレルビン"], "correctAnswerIndex": 1, "explanation": "nabはNanoparticle Albumin-Boundの略です。アブラキサンを指します。", "evidence": "薬剤略称一覧", "reference": "オリジナル"
    }
];

const updatedQuestions = [...questions, ...batch3];
fs.writeFileSync(questionsPath, JSON.stringify(updatedQuestions, null, 2), 'utf8');
console.log(`Successfully added Chemo Expansion Batch 3. New Total: ${updatedQuestions.length}`);
