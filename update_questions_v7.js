const fs = require('fs');
const path = require('path');

const questionsPath = path.join(__dirname, 'src/data/questions.json');
const rawData = fs.readFileSync(questionsPath, 'utf8');
const questions = JSON.parse(rawData);

let currentId = Math.max(...questions.map(q => q.id), 0) + 1;

const newQuestions = [
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "吸引", "question": "口腔・鼻腔吸引において、吸引圧をかけるタイミングとして適切なのはどれか。", "options": ["カテーテルを挿入する前から", "挿入部位の奥まで到達し、引き抜くときから", "挿入している最中ずっと", "どこでも良い"], "correctAnswerIndex": 1, "explanation": "挿入中に圧をかけると粘膜を傷つける恐れがあるため、目的の部位まで入れてから、回転させながら引き抜く際に圧をかけます。", "evidence": "安全な吸引手技", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "吸引", "question": "1回の吸引時間は、最大でどの程度にとどめるべきか。", "options": ["5分間", "10〜15秒以内", "30秒〜1分", "3秒"], "correctAnswerIndex": 1, "explanation": "吸引中は酸素も一緒に吸い出してしまうため、無呼吸状態が長くならないよう短時間で行います。", "evidence": "低酸素症の防止", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "疾患観察", "question": "呼吸介助法（スクイージング）を行う際のタイミングとして正しいのはどれか。", "options": ["吸気（吸う時）に合わせて圧迫する", "呼気（吐く時）に合わせて胸郭を圧迫する", "ずっと圧迫し続ける", "呼吸に関係なく行う"], "correctAnswerIndex": 1, "explanation": "息を吐き出す勢いを利用して、痰の移動を促す手技です。", "evidence": "肺理学療法の基本手技", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "疾患観察", "question": "呼吸困難がある患者が、テーブルに突っ伏したり、膝を抱えたりして前屈みになる姿勢を何というか。", "options": ["側臥位", "起坐位（トリポッド・ポジション）", "仰臥位", "腹臥位"], "correctAnswerIndex": 1, "explanation": "呼吸補助筋が使いやすくなり、横隔膜が下がって肺が広がりやすくなるため、無意識にとることが多い姿勢です。", "evidence": "呼吸困難を和らげる姿勢", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "疾患観察", "question": "COPD患者による「口すぼめ呼吸」の生理的な効果はどれか。", "options": ["空気を多く吸い込むため", "呼気時に気道の内圧を高め、末梢気道の閉塞を防ぐため", "唇を鍛えるため", "喉を潤すため"], "correctAnswerIndex": 1, "explanation": "吐き出すときに抵抗を作ることで、気道が潰れるのを防ぎ、効率よく空気を吐き出せるようにします。", "evidence": "呼吸訓練の生理的機序", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "肺癌", "question": "肺癌末期の患者に対する「スピリチュアル・ペイン（霊的苦痛）」への関わりとして適切なのはどれか。", "options": ["「元気を出して」と励まし続ける", "「あなたの人生にはどんな意味がありましたか」と人生の振り返りに寄り添う", "宗教の話を無理やりする", "無視する"], "correctAnswerIndex": 1, "explanation": "存在意義や死への恐怖に対する苦痛を、その人の人生観に沿って静かに受け止める関わりが重要です。", "evidence": "エンド・オブ・ライフケアの基本", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "肺癌", "question": "肺小細胞癌の腫瘍マーカーの中で、神経内分泌分化を反映する代表的な指標はどれか。", "options": ["ProGRP、NSE", "CEA", "SCC", "AFP"], "correctAnswerIndex": 0, "explanation": "小細胞癌の診断や治療効果判定において、ProGRPなどは感度が高い指標となります。", "evidence": "腫瘍マーカーの臨床的活用", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "酸素療法", "question": "在宅酸素療法（HOT）を行っている患者が、外出時に携帯用ボンベを使用して酸素を吸う際、気をつけるべき「残り時間」の計算に不可欠な情報はどれか。", "options": ["ボンベの容積、圧力、および設定流量", "天気", "靴の重さ", "歩くスピード"], "correctAnswerIndex": 0, "explanation": "設定された流量（L/min）に対して、ボンベに何リットル入っているかから、あと何分使えるかを常に把握する必要があります。", "evidence": "HOT患者の外出支援", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "リハビリテーション", "question": "呼吸リハビリテーションに含まれる「ADL（日常生活動作）」の工夫として、不適切なのはどれか。", "options": ["重いものはまとめて一気に運ぶ", "動作の節目で息を吐く", "椅子に座って作業をする", "ゆっくり動く"], "correctAnswerIndex": 0, "explanation": "一気に力を入れると息が切れる（労作性呼吸困難）ため、動作を細分化し、息を吐きながら動くことが基本です。", "evidence": "セルフマネジメントと生活の工夫", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "疾患観察", "question": "打診において、肺気腫などにより肺が過膨張しているときに聞こえる、高く響く音を何というか。", "options": ["清音（正常）", "過共鳴音", "濁音（実質の変化）", "鼓音"], "correctAnswerIndex": 1, "explanation": "肺に空気が溜まりすぎていることを示唆する所見です。", "evidence": "胸部打診の解釈", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "疾患観察", "question": "爪の付け根が盛り上がり、太鼓のバチのように指先が太くなる「ばち指」が見られる主な原因は何か。", "options": ["栄養の摂りすぎ", "慢性の低酸素状態や、肺癌などの増殖因子に関連するもの", "手の使いすぎ", "加齢"], "correctAnswerIndex": 1, "explanation": "肺癌や間質性肺炎、先天性心疾患などの慢性的な低酸素状態で見られる特徴的な所見です。", "evidence": "身体診察と肺徴候", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "肺炎", "question": "老人ホームなどで多発する、嘔吐物の吸引や誤嚥が原因で起こる肺炎を何というか。", "options": ["過敏性肺炎", "誤嚥性肺炎", "夏型過敏性肺炎", "レジオネラ肺炎"], "correctAnswerIndex": 1, "explanation": "口腔内細菌や胃内容物が気道へ入ることで炎症を起こします。口腔ケアとポジショニングが予防に不可欠です。", "evidence": "高齢者の肺炎予防", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "吸入療法", "question": "加圧式定量吸入器（pMDI）の使用において、吸気と噴霧のタイミングを合わせやすくするために用いられる補助器具の名前はどれか。", "options": ["スペーサー", "ネブライザー", "ピークフローメーター", "マウスピース"], "correctAnswerIndex": 0, "explanation": "噴霧された薬剤を一度スペーサー内に留めることで、ゆっくり吸い込むことができ、手技のミスを減らします。", "evidence": "吸入デバイスの上手な活用", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "採血・検査", "question": "肺癌のステージ評価のために行われる「縦隔鏡検査」について、最も注意すべき重篤な合併症はどれか。", "options": ["かすれ声（喉頭回帰神経麻痺）、大出血", "便秘", "脱毛", "不眠"], "correctAnswerIndex": 0, "explanation": "縦隔には太い血管や神経が密集しているため、反回神経の損傷による嗄声や血管損傷のリスクがあります。", "evidence": "縦隔鏡検査の看護", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "シスプラチン投与中の「尿量確認」を行う際、目標とされる1時間の尿量は一般的にどの程度か。", "options": ["100mL以上", "10mL", "1000mL", "5mL"], "correctAnswerIndex": 0, "explanation": "腎障害を防ぐため、十分な利尿（100mL/時以上）がついているかを厳密にチェックします。", "evidence": "プラチナ製剤の安全性管理", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "化学療法", "question": "非小細胞肺癌の「ベバシズマブ」投与において、事前に患者が過去に経験したことがないか確認すべき「血管障害」に関連する既往はどれか。", "options": ["高血圧の放置、喀血、血栓塞栓症、消化管穿孔の既往", "肩こり", "近視", "腰痛"], "correctAnswerIndex": 0, "explanation": "血管新生を阻害するため、これらの既往がある場合は投与が禁忌または慎重投与となります。", "evidence": "薬剤別の禁忌事項", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "間質性肺炎", "question": "間質性肺炎の患者が、急激に乾性咳嗽と呼吸不全を強めた場合に疑うべき、極めて致死率の高い状態を何というか。", "options": ["感冒", "急性増悪", "安定期", "気管支炎"], "correctAnswerIndex": 1, "explanation": "原因不明に急激に影が広がり、呼吸機能が落ちる状態で、ステロイドパルス療法などの強力な治療が急がれます。", "evidence": "間質性肺炎の管理指針", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "胸水・穿刺", "question": "胸水穿刺において、一度に大量（1.5L以上など）の胸水を抜いてしまった際に起こる、再膨張に伴う肺の合併症を何というか。", "options": ["肺切除", "再膨張性肺水腫", "肺癌の増加", "気胸"], "correctAnswerIndex": 1, "explanation": "縮んでいた肺が急に広がると血管圧が急変し、肺に水が漏れてしまう致死的な合併症であるため、徐々に抜く必要があります。", "evidence": "穿刺手技の合併症", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "採血・検査", "question": "結核のスクリーニング検査として行われる、血液を用いて結核菌特異的なインターフェロンγを測定する検査（QFT、T-SPOT）の総称はどれか。", "options": ["ツベルクリン反応", "IGRA（インターフェロンγ遊離試験）", "グラム染色", "細胞診"], "correctAnswerIndex": 1, "explanation": "BCG接種の影響を受けずに、現在または過去の結核感染を高精度に診断できます。", "evidence": "結核の診断プロトコル", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "肺癌", "question": "肺癌の術後、ベッド上での運動として「足首の曲げ伸ばし（アンクル・パンピング）」を勧める最大の目的はどれか。", "options": ["歩きやすくするため", "静脈還流を促し、深部静脈血栓症（DVT）を予防するため", "足を細くするため", "靴を履く練習"], "correctAnswerIndex": 1, "explanation": "ふくらはぎの筋肉を動かすことで、手術後の血栓形成（エコノミークラス症候群）を防ぎます。", "evidence": "周術期合併症の予防", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "吸引", "question": "気管切開カテーテルからの吸引において、カテーテルの挿入する深さとして適切な基準はどれか。", "options": ["カニューレより30cm先まで", "カニューレの長さを把握し、その先端からわずかに（1-2cm）出る程度まで", "抵抗を感じるまで奥深く", "どこでも良い"], "correctAnswerIndex": 1, "explanation": "深く入れすぎると気管分岐部を刺激して不整脈や粘膜損傷を来すため、必要最小限の深さに留めます。", "evidence": "気道管理の手法", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "禁煙支援", "question": "禁煙治療におけるニコチンパッチ（ニコチネルTTS等）の主な作用機序はどれか。", "options": ["経皮的に少量のニコチンを補うことで、離脱症状を抑えながら禁煙を助ける（ニコチン代替療法）", "タバコを不味くする", "タバコを吸うのを忘れるようにする", "血圧を上げる"], "correctAnswerIndex": 0, "explanation": "体内のニコチン濃度を段階的に下げ、自力での禁煙を支援します。", "evidence": "禁煙支援の薬理学", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "解剖生理", "question": "右肺が3つの部分（上・中・下葉）に分かれているのに対し、左肺が2つの部分（上・下葉）に分かれている主な理由は何か。", "options": ["左側には心臓があるから", "左の方が小さいから", "特に理由はない", "左肺には空気があまり入らないから"], "correctAnswerIndex": 0, "explanation": "心臓が中央から左寄りに位置しているため、その分肺のスペースが限られています。", "evidence": "肺の肉眼的解剖", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "解剖生理", "question": "安静時の呼吸において、主に使われる「呼吸筋」はどれか。", "options": ["横隔膜、外肋間筋", "腹直筋", "大胸筋", "僧帽筋"], "correctAnswerIndex": 0, "explanation": "横隔膜が下がると胸腔が広がり、肺に空気が入ります。努力呼吸では首や肩の筋肉（補助筋）も使われます。", "evidence": "呼吸の力学", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "気管支喘息", "question": "喘息の急性増悪（発作）時に、即効性を期待して用いられる気管支拡張薬の吸入剤はどれか。", "options": ["吸入ステロイド薬（ICS）", "短時間作用性吸入β2刺激薬（SABA）", "抗生物質", "抗インフルエンザ薬"], "correctAnswerIndex": 1, "explanation": "「リリーバー」と呼ばれ、数分で気道を広げる効果がありますが、使いすぎは心負荷等の危険もあるため管理が重要です。", "evidence": "喘息死の予防と管理", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "COPD", "question": "COPDの診断ガイドラインにおいて、不可逆的な気流制限を証明するために行われる、吸入薬使用後の肺機能検査での一秒率の基準はどれか。", "options": ["0.7（70%）未満", "0.9（90%）未満", "0.5（50%）以上", "1.0（100%）"], "correctAnswerIndex": 0, "explanation": "気管支拡張薬を使っても一秒率が回復しない（70%未満）ことがCOPDの定義の一つです。", "evidence": "GOLD（国際的COPD診断基準）", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "肺塞栓症", "question": "肺血栓塞栓症を疑う際の身体所見で、片方のふくらはぎの腫れや痛みがある際、何を疑うか。", "options": ["筋肉痛", "深部静脈血栓症（DVT）", "骨折", "腱鞘炎"], "correctAnswerIndex": 1, "explanation": "足にできた血栓が流れて肺に詰まるのが肺塞栓の原因（VTE）であるため、足の観察が重要です。", "evidence": "静脈血栓塞栓症の連続性", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "解剖生理", "question": "パルスオキシメータ（SpO2）が測定しているものは、血液中の何の割合か。", "options": ["全てのヘモグロビンに対する、酸素と結合したヘモグロビンの割合", "赤血球の数", "二酸化炭素の量", "鉄分の量"], "correctAnswerIndex": 0, "explanation": "経皮的に動脈血の酸素飽和度を測定しています。貧血がひどい場合、SpO2が正常でも体内は酸素不足になることがあります。", "evidence": "酸素療法の指標と解釈", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "肺癌", "question": "肺癌のステージIII期に対して行われる「化学放射線療法」後、地固め療法（再発予防）として用いられる免疫チェックポイント阻害薬（デュルバルマブ）の対象となるのはどれか。", "options": ["PD-L1陽性の切除不能なIII期非小細胞肺癌", "すべての肺癌", "小細胞癌のみ", "I期肺癌"], "correctAnswerIndex": 0, "explanation": "放射線と化学療法後の再発率を下げる、現在の標準的な標準治療（PACIFICレジメン）です。", "evidence": "肺癌治療ガイドライン新展開", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "化学療法", "question": "がん薬物療法における「悪心・嘔吐」を予防するために、複数の制吐薬を組み合わせる考え方を何というか。", "options": ["単剤療法", "多剤併用制吐療法（コンビネーション管理）", "放置療法", "心理療法"], "correctAnswerIndex": 1, "explanation": "作用機序の異なる（ステロイド、セロトニン拮抗薬、NK1拮抗薬など）薬剤を事前に使うことで、吐き気のでない治療を目指します。", "evidence": "制吐管理の基本方針", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "がん看護", "question": "終末期の呼吸困難に対し、モルヒネなどの強オピオイドが処方される主な目的は何か。", "options": ["患者を眠らせてしまうため", "呼吸中枢の感受性を下げ、息苦しさの『不快感』を和らげるため", "寿命を縮めるため", "酸素を増やすため"], "correctAnswerIndex": 1, "explanation": "少量からの使用により、呼吸数を減らし、本人が感じる苦しさを取り除くのが目的です（安楽死目的ではありません）。", "evidence": "呼吸困難に対する薬物療法", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "解剖生理", "question": "肺活量などの静的肺容量を測定する際、鼻をクリップで留める理由は何か。", "options": ["臭いを防ぐため", "鼻から空気が逃げたり入ったりするのを防ぎ、口だけの空気の出入りを正確に測るため", "痛みをこらえるため", "流行だから"], "correctAnswerIndex": 1, "explanation": "鼻呼吸が混ざると肺容量を正確に算出できないため、完全に閉じる必要があります。", "evidence": "スパイロメトリーの標準手技", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "吸入療法", "question": "喘息の吸入指導後、患者がデバイスを持って帰る際に「最もできていなければならないこと」の確認項目はどれか。", "options": ["薬剤の名前を覚える", "実際に吸入する手技を自分一人で正しく再現できること（デモンストレーション）", "毎日3時間持っていること", "箱を綺麗に保管すること"], "correctAnswerIndex": 1, "explanation": "吸入薬は正しく吸えなければ効果がゼロになるため、具体的な手技の習得確認が最も重要です。", "evidence": "吸入支援アドヒアランスの向上", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "解剖生理", "question": "動脈血ガス分析で、CO2（二酸化炭素分圧）の正常値は、およそどの範囲か。", "options": ["35-45 mmHg", "20-25 mmHg", "80-100 mmHg", "0 mmHg"], "correctAnswerIndex": 0, "explanation": "この値が上がれば換気不全（呼吸性アシドーシス）、下がれば過換気（呼吸性アルカローシス）を疑います。", "evidence": "動脈血ガスデータの正常値", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "人工呼吸器", "question": "人工呼吸器に接続されている患者の気道内圧アラームが高い（High Pressure）原因として考えにくいのはどれか。", "options": ["回路の折れ曲がり", "痰が詰まっている", "患者と機械の呼吸が合っていない（ファイティング）", "回路の外れ（リーク）"], "correctAnswerIndex": 3, "explanation": "「リーク」や「外れ」の場合は圧が下がるため、低圧（Low Pressure）アラームが鳴ります。高圧は「通り道の邪魔がある」ときです。", "evidence": "人工呼吸器アラームへの対応", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "①呼吸器手技", "subCategory": "人工呼吸器", "question": "非侵襲的陽圧換気（NPPV）を使用する際、看護師が最も頻繁に観察・ケアすべき「皮膚」の問題はどこか。", "options": ["足の裏", "鼻根部（マスクが当たる部分）", "背中", "手のひら"], "correctAnswerIndex": 1, "explanation": "マスクによる圧迫で褥瘡（床ずれ）ができやすいため、皮膚保護材の使用やフィッティング調整が重要です。", "evidence": "NPPVの合併症予防", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "③薬剤知識", "subCategory": "吸入療法", "question": "喘息の長期管理薬「アドエア」や「シムビコート」などの配合剤に含まれる、2種類の薬剤成分の組み合わせで正しいのはどれか。", "options": ["吸入ステロイド薬 ＋ 長時間作用性β2刺激薬（LABA）", "抗生物質 ＋ 下剤", "ステロイド ＋ 痛み止め", "去痰薬 ＋ 咳止め"], "correctAnswerIndex": 0, "explanation": "強力に炎症を抑えるステロイドと、気道をずっと広げるLABAを1つにすることで、服薬アドヒアランスを高めます。", "evidence": "合剤吸入薬のメリット", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "解剖生理", "question": "ヘモグロビン解離曲線が「右方」にシフト（酸素を手放しやすくなる）する条件はどれか。", "options": ["体温が低下したとき", "アシドーシス（pH低下）、CO2上昇、体温上昇など", "アルカローシス（pH上昇）", "酸素が多すぎるとき"], "correctAnswerIndex": 1, "explanation": "組織が活発に活動して代謝産物が出ているときに、効率よく酸素を配給する生理的な仕組みです。", "evidence": "酸素運搬の機序", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "解剖生理", "question": "呼吸性アシドーシスの補償行為として、腎臓が行うのはどれか。", "options": ["HCO3-（重炭酸イオン）を再吸収（保持）して体内のアルカリ度を上げる", "水分を捨てる", "呼吸を止める", "何もしない"], "correctAnswerIndex": 0, "explanation": "肺で酸（CO2）が溜まっているのを、腎臓がアルカリ分を溜めることで中和（代償）しようとします。", "evidence": "腎性代償の仕組み", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "COPD", "question": "COPD患者に対して推奨される食事の内容として適切なのはどれか。", "options": ["一度に大量に食べる", "高エネルギー、高タンパク質を少量ずつ複数回に分けて摂取する", "水分を極限まで控える", "ジャンクフードのみを勧める"], "correctAnswerIndex": 1, "explanation": "呼吸に多くのエネルギーを要するため消耗しやすく、また一度に食べると横隔膜を押し上げて苦しくなるため、分割摂取が勧められます。", "evidence": "COPDの栄養管理", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "肺癌", "question": "肺小細胞癌（SCLC）に関連する「傍腫瘍症候群」として、自己抗体により神経伝達が妨げられ、筋力低下を来す疾患はどれか。", "options": ["ランバート・イートン症候群（LEMS）", "アルツハイマー病", "パーキンソン病", "てんかん"], "correctAnswerIndex": 0, "explanation": "小細胞癌の患者の一部で見られ、反復刺激により筋力が一時的に回復するという特徴的な所見があります。", "evidence": "肺癌に伴う神経学的合併症", "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++, "category": "②疾患観察", "subCategory": "がん看護", "question": "肺癌患者への説明。告知直後のショック状態にあり、「あたまが真っ白で何も聞こえません」と訴える患者に対し、看護師がとるべきその場での最優先の対応はどれか。", "options": ["最初から説明をやり直す", "沈黙を肯定し、支えていることを伝え、ゆっくり落ち着くまで傍にいる", "「頑張りましょう」と元気に励ます", "家族に代わりを聞いてもらうよう急かす"], "correctAnswerIndex": 1, "explanation": "防衛反応の一種であることを理解し、情報提供よりも情緒的サポートを優先します。", "evidence": "危機状況における看護介入", "reference": "スーパービジュアル　見える　呼吸器疾患"
    }
];

const updatedQuestions = [...questions, ...newQuestions];
fs.writeFileSync(questionsPath, JSON.stringify(updatedQuestions, null, 2), 'utf8');
console.log(`Successfully updated questions.json with Batch 16-F (42 questions). New Total: ${updatedQuestions.length}`);
