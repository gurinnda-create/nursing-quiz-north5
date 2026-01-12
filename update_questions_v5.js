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
        "question": "肺癌における「リンパ節転移」のアセスメントで、特に鎖骨の上に触れることができる、消化器癌などでも有名なリンパ節の名前を何というか。",
        "options": ["ウィルヒョウ（Virchow）リンパ節", "鎖骨下リンパ節", "腋窩リンパ節", "鼠径リンパ節"],
        "correctAnswerIndex": 0,
        "explanation": "左鎖骨上窩にあるリンパ節で、ここに転移があるとN3（またはM1）に相当し、進行癌であることが示唆されます。",
        "evidence": "リンパ節転移の触診項目",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "がん化学療法における「曝露対策」として、点滴ラインの接続部を外す際に推奨される閉鎖式接続システム（CSTD）の役割は何か。",
        "options": ["空気を抜くため", "接続・切断時に薬剤の蒸気（ガス）や液漏れが外部に漏れるのを物理的に遮断するため", "安く済ませるため", "接続を早くするため"],
        "correctAnswerIndex": 1,
        "explanation": "抗がん剤が空気中に飛散したり看護師の手に触れたりするリスクを大幅に低下させる、医療者の安全確保のための器具です。",
        "evidence": "職業曝露の防止策",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "肺癌",
        "question": "非小細胞肺癌のステージIIIa期において、一般的に行われることが多い治療の組み合わせ（集学的治療）はどれか。",
        "options": ["手術のみ", "化学療法と放射線療法の併用、あるいはこれらと手術の組み合わせ", "経過観察のみ", "湿布のみ"],
        "correctAnswerIndex": 1,
        "explanation": "局所進行癌であるIIIa期では、単独療法ではなく、複数の治療を組み合わせて完治や長期延命を目指します。",
        "evidence": "肺癌ステージ別の治療指針",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "がん薬物療法で使用される「ポート（CVポート）」において、1回ごとに針を刺し直す必要があるパーツの名前はどれか。",
        "options": ["カテーテル", "セプタム（シリコン製の隔壁）", "タンク", "接続部"],
        "correctAnswerIndex": 1,
        "explanation": "皮膚の下にあるセプタムに専用針を刺すことで血管内に薬剤を送ります。針の抜き差しに伴う感染や破損の観察が重要です。",
        "evidence": "中心静脈ポートの構造",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "免疫チェックポイント阻害薬投与中に、「重度の腹痛、下痢、血便」が出た場合に最も警戒すべき合併症はどれか。",
        "options": ["irAEとしての大腸炎・腸管穿孔", "便秘の解消", "ただの食欲不振", "痔"],
        "correctAnswerIndex": 0,
        "explanation": "irAE大腸炎は高度になると腸に穴が開く（穿孔）ため、即座にステロイド治療を行う必要があります。",
        "evidence": "消化管irAEのアセスメント",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "がん看護",
        "question": "肺癌末期で、癌性悪液質（カヘキシア）に対する栄養管理として、現在の標準的な考え方はどれか。",
        "options": ["とにかく無理やり食べさせる", "患者の嗜好や食べやすい量を尊重し、経口摂取困難なら無理な強制栄養（点滴等）による負担も考慮する", "24時間点滴を全開にする", "何も食べさせない"],
        "correctAnswerIndex": 1,
        "explanation": "悪液質では栄養を詰め込んでも吸収・利用されないことが多いため、QOLや本人の「食べたい」気持ちを優先します。",
        "evidence": "がん終末期の栄養支援",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "肺癌の化学療法で使用される「ドセタキセル」の主な副作用であり、投与から1〜2週間後に顕著になるものはどれか。",
        "options": ["眠気", "高度の好中球減少（骨髄抑制）", "血圧上昇", "聴覚の上昇"],
        "correctAnswerIndex": 1,
        "explanation": "ドセタキセルは骨髄抑制が非常に強く出やすい薬剤であり、白血球の最低値となる時期には感染予防が欠かせません。",
        "evidence": "タキサン系薬剤のアセスメント",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "①呼吸器手技",
        "subCategory": "酸素療法",
        "question": "肺癌による肺機能低下がある患者が、酸素吸入を開始して落ち着いた。指導すべき内容として正しいのはどれか。",
        "options": ["火気（タバコ、ライター等）を絶対に近づけないこと", "窓を閉め切ること", "ずっと寝ていること", "酸素の流量を自分で勝手に変えて良いこと"],
        "correctAnswerIndex": 0,
        "explanation": "酸素は助燃性ガスであるため、近くでの火気使用は火災の原因となり極めて危険です。",
        "evidence": "在宅酸素療法の安全指導",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "制吐薬「デキサメタゾン」の注意すべき経口内服での副作用はどれか。",
        "options": ["低血糖", "不眠、精神的興奮、しゃっくり、胃粘膜障害", "血圧低下", "脱毛"],
        "correctAnswerIndex": 1,
        "explanation": "ステロイド剤は吐き気止めとして有用ですが、副作用として中枢神経の興奮による不眠や吃逆（しゃっくり）が出ることがあります。",
        "evidence": "デキサメタゾンの看護留意点",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "EGFR-TKIなどの分子標的薬による「爪囲炎（そういえん）」を予防するための適切なケアはどれか。",
        "options": ["爪を極短く切る", "保湿剤を塗り、窮屈でない靴を履く、指先を清潔に保つ", "消毒液に浸す", "放置する"],
        "correctAnswerIndex": 1,
        "explanation": "指先の乾燥や刺激が爪囲炎を悪化させるため、保湿と防御が基本です。",
        "evidence": "皮膚障害マネジメント",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "肺癌における「放射線化学療法（同時併用）」が行われる際、特に注意すべき急性合併症はどれか。",
        "options": ["放射線食道炎による嚥下困難・痛み", "難聴", "不眠", "食欲増進"],
        "correctAnswerIndex": 0,
        "explanation": "食道に近い部位への照射では食道炎が頻発するため、食事内容の工夫や鎮痛薬の使用が検討されます。",
        "evidence": "放射線療法の副作用管理",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "がん看護",
        "question": "肺癌による骨転移があり「高カルシウム血症」を呈した際に見られる代表的な初期症状はどれか。",
        "options": ["下痢", "食欲不振、悪心、倦怠感、多尿、意識障害", "浮腫", "血痰"],
        "correctAnswerIndex": 1,
        "explanation": "骨から溶け出したCaが血液中に増え、消化器症状や中枢神経症状を引き起こします。放置すると昏睡に至る緊急事態です。",
        "evidence": "オンコロジー・エマージェンシーのアセスメント",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "化学療法における「好中球減少」に対して、白血球の産生を促すために用いられる皮下注射剤の名前はどれか。",
        "options": ["インスリン", "G-CSF（顆粒球コロニー形成刺激因子）", "抗菌薬", "ヘパリン"],
        "correctAnswerIndex": 1,
        "explanation": "フィルグラスチム等のG-CSFは、骨髄を刺激して好中球の回復を早めるために用いられます。",
        "evidence": "造血幹細胞を刺激する薬剤",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "化学療法中の患者が「手が冷たい水に触れるとビリビリする」と訴えている。肺癌でよく用いられるプラチナ製剤の中でも、特にこの末梢神経障害（冷感刺激による悪化）が顕著な薬剤はどれか。",
        "options": ["オキサリプラチン", "シスプラチン", "カルボプラチン", "ネダプラチン"],
        "correctAnswerIndex": 0,
        "explanation": "大腸癌の標準ですが肺癌の一部レジメンでも検討されるオキサリプラチンは、冷たいものに触れることで急激に悪化する独特の神経障害があります。",
        "evidence": "プラチナ製剤ごとの副作用比較",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "がん看護",
        "question": "肺癌患者が化学療法の効果がなく「あとどのくらい生きられますか」と質問してきた際のコミュニケーションで適切なのはどれか。",
        "options": ["「あと1年です」と断定する", "「そんなこと考えないでください」とはぐらかす", "患者がなぜそう聞いたのか、今の不安や望みを丁寧に聴く", "「わかりません」の一言で終わらせる"],
        "correctAnswerIndex": 2,
        "explanation": "余命への問いには、その背景にある「やり残したこと」や「恐怖」に対する支援が含まれており、受容的かつ共感的な対応が求められます。",
        "evidence": "全人的苦痛への関わり",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "肺癌に使用される「ビノレルビン（ナベルビン）」という薬剤の由来は植物であるが、どの植物から抽出されたか。",
        "options": ["ニチニチソウ（ビンカアルカロイド）", "西洋イチイ（タキサン系）", "キハダ", "アロエ"],
        "correctAnswerIndex": 0,
        "explanation": "ビンカアルカロイド系の一種です。このように植物由来の抗がん剤も多く存在します。",
        "evidence": "抗がん剤の起源と分類",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "免疫チェックポイント阻害薬投与後に、「肝機能データの急激な悪化（AST/ALTの上昇）」とともに irAE 肝障害を疑う場合の対応として、最初に行うのはどれか。",
        "options": ["化学療法を増量する", "化学療法を中断し、ステロイドの開始を検討する", "運動を勧める", "アルコールを勧める"],
        "correctAnswerIndex": 1,
        "explanation": "irAEの疑いがある場合は、まず原因薬剤を休薬し、重症度Gradeに応じてステロイド治療を開始します。",
        "evidence": "irAE管理アルゴリズム",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "肺癌",
        "question": "肺癌のステージIV期において、主な治療方針はどれか。",
        "options": ["根治手術のみ", "全身薬物療法（化学療法、免疫療法等）と症状緩和の並行", "放置", "マラソン大会への出場"],
        "correctAnswerIndex": 1,
        "explanation": "遠隔転移があるIV期では全身療法が主となり、症状のコントロールを図りながら予後の延長を目指します。",
        "evidence": "進行癌の治療目標",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "化学療法中の「味覚障害」の原因として、関与している可能性がある栄養素の不足はどれか。",
        "options": ["亜鉛", "カルシウム", "ビタミンC", "鉄分"],
        "correctAnswerIndex": 0,
        "explanation": "抗がん剤により亜鉛が体外に排出されやすくなり、味を感じる細胞（味蕾）の再生が滞ることが一因とされています。",
        "evidence": "味覚障害と栄養管理",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "がん薬物療法を受ける患者に対して行う、外見の変化（脱毛、肌荒れ等）に伴う苦痛を和らげる支援を何と呼ぶか。",
        "options": ["アピアランスケア", "スキンケアのみ", "ファッションチェック", "メーキャップ"],
        "correctAnswerIndex": 0,
        "explanation": "自分らしさを取り戻し、社会との繋がりを維持するための外見支援のことをアピアランスケアと呼びます。",
        "evidence": "アピアランスケアガイドライン",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "①呼吸器手技",
        "subCategory": "化学療法",
        "question": "CVポートの「逆血確認」で、血液が全く引けない（リザーバー側に返ってこない）場合に疑うべきトラブルはどれか。",
        "options": ["血管内に正しく入っている", "カテーテルの閉塞や不適切な位置（ピンチオフ、血栓付着等）", "逆血がないのが正常", "点滴の速度が速すぎる"],
        "correctAnswerIndex": 1,
        "explanation": "通常は逆血が確認できるはずです。引けない場合は位置異常や血栓閉塞の可能性があるため、無理に流さず医師に確認が必要です。",
        "evidence": "中心静脈ポートのトラブルシューティング",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "肺癌等で用いられる「ペメトレキセド」投与の翌日から、予防的に内服されることが多い薬剤の種類はどれか。",
        "options": ["副腎皮質ステロイド（皮疹の予防）", "抗菌薬", "下剤", "睡眠薬"],
        "correctAnswerIndex": 0,
        "explanation": "ペメトレキセドに伴う発疹を抑えるために、投与当日前後3日間ほどステロイドを内服するレジメンが多く見られます。",
        "evidence": "レジメン別の支持療法",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "化学療法中の「倦怠感（だるさ）」に対するアセスメント指標「ESAS（エドモントン症状評価システム）」に含まれる項目はどれか。",
        "options": ["痛み、倦怠感、吐き気、抑うつ、不安、眠気、食欲、幸福感、息苦しさ", "昨日の歩数", "身長", "好きな食べ物"],
        "correctAnswerIndex": 0,
        "explanation": "がん患者の主要な苦痛症状を患者主観で0〜10点でスコア化するツールです。",
        "evidence": "症状評価ツールの活用",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "分子標的薬 TKI 投与による「ざそう様皮疹」に対し、最初から行うべき予防的スキンケアはどれか。",
        "options": ["保湿剤（ヒルドイド等）の塗布と、ステロイド外用薬、遮光、適切な洗顔", "冷やすこと", "日焼け", "垢すり"],
        "correctAnswerIndex": 0,
        "explanation": "症状が出てからではなく、内服開始当日から保湿や保護を行う「先制的治療」が有効です。",
        "evidence": "標的薬に伴う皮膚障害対策",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "がん看護",
        "question": "化学療法を受ける患者が、自分の治療方針について医師と一緒に相談して決める過程を何と呼ぶか。",
        "options": ["SDM（Shared Decision Making：共同意思決定）", "お任せ医療", "インフォームド・ディセント", "強制"],
        "correctAnswerIndex": 0,
        "explanation": "患者と医療者が対等の立場になり、最新のエビデンスと患者の価値観をすり合わせて選ぶプロセスです。特に看護師がその橋渡しとなることが重要です。",
        "evidence": "臨床倫理と意思決定支援",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    }
];

const updatedQuestions = [...questions, ...newQuestions];
fs.writeFileSync(questionsPath, JSON.stringify(updatedQuestions, null, 2), 'utf8');
console.log(`Successfully updated questions.json with Batch 16-D (25 questions). New Total: ${updatedQuestions.length}`);
