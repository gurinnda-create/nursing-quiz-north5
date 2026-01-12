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
        "question": "抗がん剤調製時や投与時に、看護師が二次曝露を避けるために着用すべき個人防護手袋の種類として最も適切なのはどれか。",
        "options": ["家庭用ビニール手袋", "パウダー付き天然ゴム手袋", "厚みのある抗がん剤耐性不浸透性手袋（ニトリル等）", "綿手袋"],
        "correctAnswerIndex": 2,
        "explanation": "抗がん剤が浸透しにくい素材（ニトリルやネオプレン等）で、パウダーフリー、厚みのあるもの、かつ必要に応じて2重装着が推奨されます。",
        "evidence": "個人防護具の選択基準",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "シスプラチン投与開始前の「プレハイドレーション」の目的はどれか。",
        "options": ["患者の空腹を満たすため", "あらかじめ尿量を増やし、薬剤の腎毒性を最小限に抑える準備をするため", "血圧を下げるため", "眠気を誘うため"],
        "correctAnswerIndex": 1,
        "explanation": "投与前に十分な水分を体内に確保し、排尿を促すことで、腎臓の尿細管での薬剤濃度を下げ、障害を予防します。",
        "evidence": "ハイドレーションの臨床的意義",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "①呼吸器手技",
        "subCategory": "化学療法",
        "question": "CVポートから点滴を行う際、針を刺す前の皮膚消毒に使用されることが多い薬剤はどれか。",
        "options": ["水", "イソジン（ポビドンヨード）またはクロルヘキシジンアルコール", "ハンドクリーム", "オキシドール"],
        "correctAnswerIndex": 1,
        "explanation": "中心静脈ポートの穿刺は無菌操作であり、適切な皮膚消毒剤を用いて広い範囲を消毒します。",
        "evidence": "血管内留置カテーテル感染予防",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "分子標的薬「エルロチニブ（タルセバ）」内服中の患者が、食事で特に気をつけるべき組み合わせ（相互作用）はどれか。",
        "options": ["タバコ（喫煙）により血中濃度が著しく低下する", "牛乳を飲むと吸収が良くなる", "納豆を食べると効きすぎる", "生肉を食べると下痢をする"],
        "correctAnswerIndex": 0,
        "explanation": "タルセバは喫煙により代謝が亢進し、血中濃度が下がって効果が弱まるため、禁煙指導が不可欠です。",
        "evidence": "喫煙と薬物代謝の相互作用",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "免疫チェックポイント阻害薬投与中に患者が「まぶたの重み、飲み込みにくさ」を訴えた際、最も懸念すべき irAE（神経・筋障害）はどれか。",
        "options": ["風邪", "重症型筋無力症（MG）", "認知症の進行", "結膜炎"],
        "correctAnswerIndex": 1,
        "explanation": "irAEとしての重症型筋無力症や筋炎は、呼吸停止に至るリスクがある極めて重篤な副作用です。",
        "evidence": "irAE神経筋副作用の観察",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "非小細胞肺癌の「脳転移」において、腫瘍周囲の浮腫を軽減するために併用される薬剤の種類はどれか。",
        "options": ["副腎皮質ステロイド", "下剤", "抗菌薬", "睡眠薬"],
        "correctAnswerIndex": 0,
        "explanation": "ステロイドは脳浮腫を抑制し、頭痛や意識障害などの神経症状を緩和する効果があります。",
        "evidence": "脳転移の症状緩和",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "ドセタキセル投与中に、血管透過性が亢進することによりみられる特徴的な身体症状はどれか。",
        "options": ["難聴", "浮腫（むくみ）、胸水貯留", "頻尿", "高血圧"],
        "correctAnswerIndex": 1,
        "explanation": "タキサン系薬剤、特にドセタキセルは体液貯留を起こしやすく、体重管理や息切れの観察が重要です。",
        "evidence": "体液貯留のマネジメント",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "①呼吸器手技",
        "subCategory": "化学療法",
        "question": "抗がん剤点滴セットの「スピルキット」に含まれている、薬剤を回収するための吸水シートの素材として適切なのはどれか。",
        "options": ["新聞紙", "高吸水ポリマー含有の専用シート", "ラップ", "ボロ布"],
        "correctAnswerIndex": 1,
        "explanation": "漏洩を最小限に抑えるよう、高い吸水能力を持つ専用のシートを汚染範囲に被せて対応します。",
        "evidence": "スピルオーバーへの緊急対応",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "肺癌における「悪性胸水」による呼吸困難を緩和するために行われる、胸膜腔に薬剤を注入して肺を癒着させる処置の名前はどれか。",
        "options": ["胸膜癒着術", "肺切除術", "気管切開術", "胸腔ドレナージ解除"],
        "correctAnswerIndex": 0,
        "explanation": "ドレナージで胸水を抜いた後、癒着剤（タルク等）を注入して胸膜をくっつけることで胸水の再貯留を防ぎます。",
        "evidence": "悪性胸水のコントロール",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "シスプラチンなどの高度催吐性レジメンで用いられる「NK1受容体拮抗薬」の主な商品名はどれか。",
        "options": ["アプレピタント（イメンド）", "フェンタニル", "モルヒネ", "デキサメタゾン"],
        "correctAnswerIndex": 0,
        "explanation": "イメンドは脳内のP物質受容体をブロックすることで、遅発性嘔吐に対して高い予防効果を発揮します。",
        "evidence": "制吐薬の種類と特徴",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "化学療法中の「血小板減少」において、患者に指導すべき生活上の注意はどれか。",
        "options": ["鼻を強くかまない、怪我に気をつける", "たくさん歩く", "熱い風呂に入る", "水分を控える"],
        "correctAnswerIndex": 0,
        "explanation": "血が止まりにくいため、粘膜の出血（鼻血、歯肉出血）や皮下出血、怪我による大量出血に注意し、安全な生活を指導します。",
        "evidence": "血小板減少患者のADL指導",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "肺小細胞癌（SCLC）の化学療法後に「予防的全脳照射（PCI）」が行われることがある主な理由は何か。",
        "options": ["認知症になるから", "脳転移の発生頻度が高いため、微小転移を叩いて再発を抑制するため", "頭を良くするため", "めまいを治すため"],
        "correctAnswerIndex": 1,
        "explanation": "小細胞癌は脳への転移が非常に多く、治療への反応が良い初期段階で予防的に照射を行うことで延命効果が期待できます。",
        "evidence": "PCIの適応と効果",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "ゲムシタビン投与翌日にみられる一過性の副作用で、インフルエンザに似た熱や関節痛が出る状態を何と呼ぶか。",
        "options": ["インフルエンザ様症候群（flu-like syndrome）", "感染症の悪化", "敗血症", "アナフィラキシー"],
        "correctAnswerIndex": 0,
        "explanation": "ジェムザールの代表的な副作用で、解熱鎮痛薬などで対応します。通常は数日で治まります。",
        "evidence": "ゲムシタビンの副作用プロファイル",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "①呼吸器手技",
        "subCategory": "化学療法",
        "question": "末梢静脈から抗がん剤を点滴する際、もっとも漏出のリスクが高い刺入部位はどこか。",
        "options": ["前腕正中部", "手背（手の甲）や関節部位", "上腕部", "足の甲"],
        "correctAnswerIndex": 1,
        "explanation": "関節周囲や手背は皮膚が薄く、血管も細いため、漏れた場合の組織損傷や神経・腱へのダメージが深刻になりやすいため避けるべきです。",
        "evidence": "安全な穿刺部位の選定",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "分子標的薬「アファチニブ（ジオトリフ）」内服中、もっとも頻度が高く日常生活に支障をきたしやすい副作用はどれか。",
        "options": ["便秘", "高度の下痢", "高血圧", "頻尿"],
        "correctAnswerIndex": 1,
        "explanation": "EGFR-TKIの中でもジオトリフは下痢の頻度が極めて高く、早期からの止瀉薬服用などのセルフケア支援が必須です。",
        "evidence": "皮膚・消化器の副作用マネジメント",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "化学療法中の「口腔内乾燥」に対する、おすすめのケア商品はどれか。",
        "options": ["刺激の強いアルコール含有マウスウォッシュ", "保湿ジェル、ノンアルコールのマウスウォッシュ、頻回なうがい", "熱いお茶", "炭酸飲料"],
        "correctAnswerIndex": 1,
        "explanation": "粘膜が弱っているため低刺激のものを使い、保湿を保つことが口内炎の予防にも繋がります。",
        "evidence": "口腔ケアのセルフケア支援",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "肺癌における「術前」化学療法（ネオアジュバント化学療法）を行う主な目的はどれか。",
        "options": ["手術しなくて済むようにするため", "腫瘍を縮小させて手術の成功率（切除率）を高め、微小転移を叩くため", "入院期間を延ばすため", "体力をつけるため"],
        "correctAnswerIndex": 1,
        "explanation": "手術前に腫瘍を小さくし、再発リスクを下げることを目的としています。",
        "evidence": "周術期化学療法の役割",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "がん化学療法の有害事象を、症状の重さで評価する国際的な基準を何と呼ぶか。",
        "options": ["JCS", "CTCAE", "BMI", "ADL"],
        "correctAnswerIndex": 1,
        "explanation": "CTCAE（共通有害事象共用語規準）により、Grade 1（軽症）から Grade 5（死亡）までの尺度で評価します。",
        "evidence": "副作用の重症度別スケール",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "細胞障害性抗がん剤が目に入ってしまった場合、第一に行う緊急対応はどれか。",
        "options": ["ティッシュで拭く", "直ちに多量の流水や生理食塩液で15分以上洗浄し、眼科を受診する", "そのままにする", "目を閉じる"],
        "correctAnswerIndex": 1,
        "explanation": "曝露対策の基本であり、速やかに大量の水で洗い流し、適切な処置を受ける必要があります。",
        "evidence": "抗がん剤曝露時の緊急対応フロー",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "肺癌における「緩和的化学療法」の目的として正しいものはどれか。",
        "options": ["延命および、癌に伴う症状の緩和とQOL（生活の質）の維持", "副作用に耐える練習", "100%の完治のみを目指す", "入院費を抑える"],
        "correctAnswerIndex": 0,
        "explanation": "完治が難しい段階においても、腫瘍の勢いを抑えることで苦痛を減らし、自分らしい生活を支えることが目的です。",
        "evidence": "緩和医療と化学療法の併存",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "肺癌の薬物療法で用いられる「血管新生阻害薬」が、創傷治癒（傷の治り）に及ぼす影響はどれか。",
        "options": ["傷を早く治す", "血管形成を抑えるため、傷の治りが悪くなる（遅延・穿孔リスク）", "全く影響しない", "皮膚を丈夫にする"],
        "correctAnswerIndex": 1,
        "explanation": "血管新生を阻害するため、手術後や大きな傷がある場合は、一定期間あけてから投与を開始する必要があります。",
        "evidence": "ベバシズマブの投与タイミング",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "化学療法による「骨髄抑制」で、赤血球が減少（貧血）した際に見られる典型的な自覚症状はどれか。",
        "options": ["発熱", "動悸・息切れ、強い倦怠感", "かゆみ", "口内炎"],
        "correctAnswerIndex": 1,
        "explanation": "酸素運搬能力が低下するため、少しの動作で息が切れたり、慢性的なだるさを感じるようになります。",
        "evidence": "貧血症状のアセスメント",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "③薬剤知識",
        "subCategory": "化学療法",
        "question": "末梢静脈から「ビノレルビン（ナベルビン）」などの血管刺激性の高い薬剤を投与する際に注意すべき局所合併症はどれか。",
        "options": ["静脈炎（血管が赤く硬くなる、痛み）", "脱毛", "不眠", "食欲不振"],
        "correctAnswerIndex": 0,
        "explanation": "薬剤の刺激により血管が炎症を起こし、痛みや色素沈着が生じやすいため、投与法に工夫（十分な希釈、フラッシュなど）が必要です。",
        "evidence": "静脈炎の予防と対応",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "化学療法",
        "question": "肺小細胞癌（SCLC）が抗がん剤に対して非常に感受性が高い理由は何か。",
        "options": ["細胞が死んでいるから", "細胞分裂（増殖率）が非常に高く、抗がん剤の標的になりやすいため", "薬ががん細胞を避けるから", "日光を浴びているから"],
        "correctAnswerIndex": 1,
        "explanation": "小細胞癌は増殖が非常に速いため、細胞分裂を阻害する抗がん剤が特によく効きますが、一方で再発も早いという特徴があります。",
        "evidence": "小細胞癌の生物学的特徴",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    },
    {
        "id": currentId++,
        "category": "②疾患観察",
        "subCategory": "がん看護",
        "question": "外来で化学療法を継続する患者にとって、もっとも重要な「緊急時セルフケア」の指標は何か。",
        "options": ["体重が100g減ったかどうか", "38度以上の発熱時など、事前に示された基準での受診や電話連絡", "毎日のランチメニュー", "爪の長さ"],
        "correctAnswerIndex": 1,
        "explanation": "在宅での高度な好中球減少等に迅速に対応できるよう、緊急受診のレッドフラッグを認識してもらうことが安全管理上、最も重要です。",
        "evidence": "外来サポーティブケアの基本",
        "reference": "スーパービジュアル　見える　呼吸器疾患"
    }
];

const updatedQuestions = [...questions, ...newQuestions];
fs.writeFileSync(questionsPath, JSON.stringify(updatedQuestions, null, 2), 'utf8');
console.log(`Successfully updated questions.json with Batch 16-C (25 questions). New Total: ${updatedQuestions.length}`);
