// AI占い 共通ロジック（PC版・スマホ版で共用）
        // タロットカードデータ（全78枚）は tarot-data.js で定義

        // 運勢データ
        const fortunes = [
            {
                title: '大吉', score: 95, work: 5, love: 5, money: 5, health: 5,
                message: '本日は最高の運勢です！すべての歯車が噛み合い、何をやっても上手くいく特別な一日になるでしょう。長い間温めてきた計画を実行に移すなら今日です。あなたの直感も冴え渡っており、迷ったときは最初に「これだ」と感じた選択肢を選ぶことで、幸運の流れに乗ることができます。',
                workComment: '重要な商談やプレゼンで大きな成果が期待できます。上司や取引先からの評価も上がりやすい日です。',
                loveComment: '運命的な出会いの予感。パートナーがいる人は、絆がさらに深まる出来事が訪れそうです。',
                moneyComment: '臨時収入や思わぬ幸運が舞い込むかも。投資や大きな買い物の判断にも適した日です。',
                healthComment: '心身ともにエネルギーが満ちています。新しい運動を始めるのに最適なタイミングです。',
                luckyColor: 'ゴールド', luckyItem: '腕時計', luckyNumber: '7',
                advice: '今日は攻めの姿勢が吉と出ます。普段なら躊躇してしまうような挑戦こそ、思い切って飛び込んでみましょう。人との出会いも幸運の鍵です。誘いを受けたら断らずに参加してみると、そこから新しい道が開ける可能性があります。感謝の言葉を口にすることで、さらに運気が上昇します。',
                analysis: '今日のあなたは最高のエネルギーに満ちています。バイオリズム・運気・周囲の環境という3つの要素がすべて好調で、この状態は非常に稀です。特に午前中から午後にかけて運気のピークが訪れるため、重要な予定はこの時間帯に入れることをおすすめします。新しいチャレンジ、告白、契約、どれをとっても追い風が吹いています。',
                caution: '絶好調な日ほど、慢心には注意が必要です。周囲への配慮を忘れず、謙虚な姿勢を保つことで、今日の幸運を長く持続させることができます。'
            },
            {
                title: '中吉', score: 78, work: 4, love: 4, money: 3, health: 4,
                message: '良い流れが続いている一日です。大きな飛躍というよりは、着実な前進が期待できます。これまでコツコツと積み重ねてきた努力が、周囲に認められ始めるタイミングでもあります。少しの工夫とポジティブな心がけで、運気はさらに上向いていくでしょう。',
                workComment: '地道な作業が評価される日。丁寧な仕事を心がけると、思わぬところで信頼を獲得できます。',
                loveComment: '穏やかで安定した関係が築ける日。素直な気持ちを言葉にすると良い方向に進みます。',
                moneyComment: '堅実な金運。無駄遣いを控えれば、将来につながる良いお金の流れが作れそうです。',
                healthComment: '体調は良好ですが、夜更かしは禁物。規則正しい生活が運気を支えてくれます。',
                luckyColor: 'ブルー', luckyItem: 'ハンカチ', luckyNumber: '3',
                advice: '今日は「continuation（継続）」がキーワードです。新しいことを始めるよりも、今取り組んでいることを丁寧に進めることで、運気を最大限に活かせます。周囲とのコミュニケーションを大切にし、感謝や労いの言葉を積極的に伝えましょう。それがあなたへの信頼となって返ってきます。',
                analysis: 'あなたの周囲の環境が好意的に働いている時期です。人間関係の運気が特に高く、協力者や理解者が現れやすい状態にあります。一人で抱え込まず、周囲を頼ることでより大きな成果につながるでしょう。午後からは金運も緩やかに上昇していきます。',
                caution: '好調な流れに油断して、細かい確認を怠りがちです。書類のチェックや約束の時間など、基本的なことこそ丁寧に確認しましょう。'
            },
            {
                title: '吉', score: 62, work: 3, love: 3, money: 3, health: 3,
                message: '穏やかで順調な一日になりそうです。特別大きな幸運はないかもしれませんが、大きなトラブルもなく、自分のペースで物事を進められる安定した運気です。日常の中にある小さな幸せに気づくことで、心が満たされる一日になるでしょう。',
                workComment: 'ルーティンワークが捗る日。急がず焦らず、目の前のタスクを一つずつ片付けましょう。',
                loveComment: '現状維持が吉。焦って関係を進めようとせず、自然な流れに身を任せましょう。',
                moneyComment: '可もなく不可もない金運。予定通りの支出に留めることで安定を保てます。',
                healthComment: '大きな不調はありませんが、リフレッシュの時間を意識的に作ると良いでしょう。',
                luckyColor: 'グリーン', luckyItem: 'マグカップ', luckyNumber: '5',
                advice: '今日は「いつも通り」を大切にする日です。無理に流れを変えようとせず、自分のリズムを守ることが運気の安定につながります。空いた時間には読書や散歩など、心を落ち着ける活動がおすすめです。夜は好きな音楽を聴いたり、ゆっくりお風呂に浸かったりして、明日への英気を養いましょう。',
                analysis: '安定した運気の中にいます。運気の波が穏やかなため、大きな決断よりも準備や計画に適した一日です。今日蒔いた種は数週間後に芽を出す可能性が高いので、将来への投資（学習・人脈づくり・健康管理）に時間を使うと効果的です。',
                caution: '平穏な一日だからこそ、退屈さから余計な行動を起こしたくなるかもしれません。衝動買いや軽率な発言には注意しましょう。'
            },
            {
                title: '小吉', score: 48, work: 3, love: 2, money: 2, health: 3,
                message: '小さな幸運がぽつぽつと訪れる一日です。ただし、運気の波がやや不安定なため、良いことと悪いことが交互にやってくるような感覚があるかもしれません。目の前のことに集中し、確実にこなしていくことで、チャンスを掴む準備が整います。',
                workComment: '集中力にムラが出やすい日。重要な作業は午前中に済ませておくのが賢明です。',
                loveComment: '誤解が生じやすい日。言葉足らずにならないよう、丁寧な説明を心がけましょう。',
                moneyComment: '小さな出費が重なりそう。財布の紐は少し固めに締めておくのが吉です。',
                healthComment: '疲れが溜まりやすい日。無理をせず、こまめな休憩を心がけてください。',
                luckyColor: 'イエロー', luckyItem: 'メモ帳', luckyNumber: '8',
                advice: '今日は「準備の日」と割り切りましょう。大きな勝負や重要な決断は避け、来るべきチャンスに備えて足場を固めることに専念してください。身の回りの整理整頓をすると、運気の流れが良くなります。デスクの上や部屋を片付けることから始めてみましょう。夜には明日の計画を立てると、運気の底上げにつながります。',
                analysis: '運気はやや控えめですが、決して悪い状態ではありません。今は運気の充電期間にあたります。この時期に焦って行動すると空回りしやすいため、インプットや準備に徹するのが賢明です。数日後には運気の上昇期が控えていますので、それまでにエネルギーを蓄えておきましょう。',
                caution: '周囲の意見に流されやすい日です。安請け合いや、その場の雰囲気での約束は後悔のもと。即答を避け、一晩考えてから返事をしましょう。'
            },
            {
                title: '末吉', score: 35, work: 2, love: 2, money: 2, health: 2,
                message: '運気はやや低調ですが、悲観する必要はありません。「末吉」は「これから運が開けていく」という意味を持つ運勢です。今日の我慢や努力は、必ず近い将来の幸運につながります。守りの姿勢を基本としながら、小さな善行を積み重ねることで運気の回復を早めることができます。',
                workComment: 'ミスが出やすい日。ダブルチェックを徹底し、確認作業に時間をかけましょう。',
                loveComment: '感情がすれ違いやすい日。相手の立場に立って考えることで衝突を回避できます。',
                moneyComment: '衝動買いは後悔のもと。今日は「買わない」選択が未来の自分を助けます。',
                healthComment: '免疫力が下がり気味。栄養バランスの良い食事と十分な睡眠を意識してください。',
                luckyColor: 'ラベンダー', luckyItem: 'お守り', luckyNumber: '2',
                advice: '今日は「守り」と「感謝」がキーワードです。新しい挑戦や大きな決断は延期し、現状維持に努めましょう。こんな日こそ、当たり前の日常に感謝する心が運気を好転させます。家族や友人に「ありがとう」を伝える、ゴミを拾う、席を譲るなど、小さな善行が明日以降の運気を押し上げてくれます。早めの就寝もおすすめです。',
                analysis: '運気は低めの位置にありますが、下降ではなく上昇の入り口に立っている状態です。今日一日を丁寧に過ごすことで、運気の回復スピードは大きく変わります。特に人間関係のトラブルにだけは注意が必要ですが、逆に言えばそこさえ乗り切れば、明日からは徐々に流れが良くなっていくでしょう。',
                caution: '疲れやストレスから、つい否定的な言葉が出やすい日です。ネガティブな発言は運気をさらに下げてしまいます。愚痴を言いたくなったら、深呼吸をして空を見上げましょう。'
            },
            {
                title: '凶', score: 22, work: 1, love: 1, money: 1, health: 1,
                message: '今日は運気が低迷する一日ですが、恐れる必要はありません。凶の日は「軽率な行動を控え、自分を見つめ直しなさい」という天からのメッセージです。イレギュラーな出来事が起こっても、慌てず冷静に対処すれば、被害は最小限に抑えられます。むしろ今日の経験が、あなたを一回り成長させてくれるでしょう。',
                workComment: '思わぬトラブルに注意。今日の契約や重要な決定は、可能なら日を改めましょう。',
                loveComment: '口論に発展しやすい日。感情的になりそうなときは、一度その場を離れましょう。',
                moneyComment: '金銭トラブルに要注意。貸し借りや大きな買い物は絶対に避けてください。',
                healthComment: '体調を崩しやすい日。無理は禁物、いつもより早めの休息を心がけましょう。',
                luckyColor: 'ホワイト', luckyItem: '塩（清めの塩）', luckyNumber: '1',
                advice: '今日は徹底した「守りの日」です。重要な決断、大きな買い物、新しい挑戦はすべて延期しましょう。その代わり、部屋の掃除や身の回りの整理など、「浄化」につながる行動が運気の回復を早めます。白いものを身につける、神社にお参りする、湯船にゆっくり浸かるのも効果的です。今日を静かに乗り切れば、明日からは必ず運気が上向いていきます。夜は早めに休み、心と体をリセットしましょう。',
                analysis: '運気のバイオリズムが最も低い位置にありますが、これは誰にでも周期的に訪れる自然な状態です。重要なのは、この時期に無理に流れに逆らわないこと。凶の日の過ごし方こそが、その後の運気の回復力を決めます。今日は自分をいたわり、静かに過ごすことで、明日以降の急回復が期待できます。夜明け前が最も暗いように、あなたの運気も今が底。ここから上昇が始まります。',
                caution: '「悪いことが重なる」と感じたら、それは休息のサインです。予定を詰め込まず、余裕を持った行動を。運転や刃物の扱いなど、うっかりミスによる怪我にも十分注意してください。'
            },
        ];

        function switchTab(tab) {
            // タブボタンの状態を更新
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector(`button[onclick="switchTab('${tab}')"]`).classList.add('active');

            // セクションを表示・非表示
            document.querySelectorAll('.tab-section').forEach(sec => sec.style.display = 'none');
            document.getElementById(tab + '-section').style.display = 'block';
        }

        function buildTarotAnalysis(card, reversed) {
            const img = card.image;
            let suitText;
            if (img.includes('major')) {
                suitText = 'このカードは22枚の大アルカナの一枚で、人生の大きな流れや転機に関わる強いメッセージを持っています。目先の出来事だけでなく、数週間〜数ヶ月単位の重要なテーマとして受け止めてください。';
            } else if (img.includes('wands')) {
                suitText = '「ワンド」は情熱と行動のスート。仕事への意欲、挑戦、エネルギーの使い方に関するメッセージです。';
            } else if (img.includes('cups')) {
                suitText = '「カップ」は感情と愛のスート。恋愛や人間関係、心の充足に関するメッセージです。';
            } else if (img.includes('swords')) {
                suitText = '「ソード」は思考と決断のスート。課題への向き合い方、決断、コミュニケーションに関するメッセージです。';
            } else {
                suitText = '「ペンタクル」は物質と実りのスート。お金や仕事の成果、生活の基盤に関するメッセージです。';
            }
            const posText = reversed
                ? '逆位置で現れたこのカードは、本来のエネルギーが滞っているか、内側に向かっている状態を示します。今の課題に気づかせてくれる大切なサインとして受け取りましょう。'
                : '正位置で現れたこのカードは、カードの持つエネルギーが素直に発揮されている状態です。流れに乗って行動することで、良い結果につながりやすいでしょう。';
            return suitText + ' ' + posText;
        }

        /* ===== タロットは一日一回（0時を過ぎると再び引ける） ===== */
        const TAROT_STORE_KEY = 'classic_tarot_draw';

        function tarotTodayKey() {
            const d = new Date();
            return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        }

        function loadTodaysDraw() {
            try {
                const raw = localStorage.getItem(TAROT_STORE_KEY);
                if (!raw) return null;
                const saved = JSON.parse(raw);
                if (saved.day !== tarotTodayKey()) return null;
                if (typeof saved.index !== 'number') return null;
                if (!tarotCards || !tarotCards[saved.index]) return null;
                return saved;
            } catch (e) { return null; }
        }

        function saveTodaysDraw(index, reversed) {
            try {
                localStorage.setItem(TAROT_STORE_KEY, JSON.stringify({ day: tarotTodayKey(), index: index, reversed: reversed }));
            } catch (e) { /* 保存できなくても占い自体は動かす */ }
        }

        function updateNextDrawNote() {
            const el = document.getElementById('tarotNextDraw');
            if (!el) return;
            const now = new Date();
            const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
            const diff = next - now;
            if (diff <= 0) { location.reload(); return; }
            const h = Math.floor(diff / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            el.innerHTML = '今日のカードは、すでに引き終えています。<br>次の一枚は日付が変わってから。<b>あと' + h + '時間' + m + '分</b>';
        }

        function lockTarot() {
            const btn = document.getElementById('tarotDrawBtn');
            if (btn) {
                btn.disabled = true;
                btn.textContent = '本日は引き終えています';
            }
            const cardEl = document.getElementById('tarotCard');
            if (cardEl) {
                cardEl.onclick = null;
                cardEl.style.cursor = 'default';
            }
            updateNextDrawNote();
            clearInterval(window.__tarotTimer);
            window.__tarotTimer = setInterval(updateNextDrawNote, 60000);
        }

        function renderTarot(card, reversed) {
            const posLabel = reversed ? '逆位置' : '正位置';
            document.getElementById('tarotCardName').textContent = card.name;
            document.getElementById('tarotKeyword').textContent = card.keyword;

            const posEl = document.getElementById('tarotPosition');
            posEl.textContent = posLabel;
            posEl.style.color = reversed ? '#c77dff' : '#00d4ff';
            posEl.style.borderColor = reversed ? '#9d4edd' : '#00d4ff';
            posEl.style.background = reversed ? 'rgba(157, 78, 221, 0.18)' : 'rgba(0, 212, 255, 0.12)';

            document.getElementById('tarotCardMeaning').textContent = reversed ? card.rev : card.up;
            document.getElementById('tarotPositive').textContent = card.up;
            document.getElementById('tarotNegative').textContent = card.rev;
            document.getElementById('tarotAdvice').textContent = reversed ? card.revA : card.upA;
            document.getElementById('tarotAiAnalysis').textContent = buildTarotAnalysis(card, reversed);
            document.getElementById('tarotResult').classList.add('show');

            const img = document.getElementById('tarotImage');
            img.src = card.image;
            img.classList.toggle('reversed', reversed);
            document.getElementById('tarotRevealName').textContent = card.name + '（' + posLabel + '）';
        }

        function showTarot() {
            if (typeof tarotCards === 'undefined') {
                alert('カードデータの読み込みに失敗しました。ページを再読み込みしてください。');
                return;
            }
            if (loadTodaysDraw()) {
                lockTarot();
                return;
            }

            const index = Math.floor(Math.random() * tarotCards.length);
            const card = tarotCards[index];
            const reversed = Math.random() < 0.5;
            const cardEl = document.getElementById('tarotCard');

            saveTodaysDraw(index, reversed);

            // フリップが見えるように、まずカードまでスクロール
            cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

            const revealCard = () => {
                renderTarot(card, reversed);
                cardEl.classList.add('flipped');
            };

            // 2回目以降は一度裏に戻してからめくり直す
            if (cardEl.classList.contains('flipped')) {
                cardEl.classList.remove('flipped');
                setTimeout(revealCard, 600);
            } else {
                setTimeout(revealCard, 400);
            }

            lockTarot();
            // フリップアニメーションを見せてから結果へスクロール
            setTimeout(() => document.getElementById('tarotResult').scrollIntoView({ behavior: 'smooth', block: 'start' }), 2000);
        }

        function restoreTarot() {
            const saved = loadTodaysDraw();
            if (!saved) return;
            renderTarot(tarotCards[saved.index], saved.reversed);
            document.getElementById('tarotCard').classList.add('flipped');
            lockTarot();
        }

        // 運命タイプデータ（オリジナル診断ロジック）
        const personalityTypes = [
            {
                name: '太陽座',
                catch: '〜情熱のリーダー〜',
                personality: '明るく前向きで、周囲を自然と引っ張っていくリーダー気質の持ち主です。目標に向かって突き進む行動力があり、困難があるほど燃えるタイプ。その明るさで周囲を照らし、気づけばあなたの周りには人が集まってきます。裏表のない性格で、一度信頼した相手にはとことん尽くす義理堅さも魅力です。',
                year2026: '2026年は「飛躍の年」。これまで積み重ねてきた努力が一気に開花し、仕事でもプライベートでも大きなチャンスが訪れます。特に9月〜11月は運気が最高潮に達するため、転職・独立・告白など人生の大勝負はこの時期に仕掛けるのが吉。周囲への感謝を忘れなければ、応援してくれる人がさらに増えていくでしょう。'
            },
            {
                name: '満月座',
                catch: '〜癒しの共感者〜',
                personality: '相手の気持ちを察する力に長けた、聞き上手で癒しの存在です。感受性が豊かで、芸術的なセンスも持ち合わせています。人間関係をなにより大切にし、信頼で結ばれた深い絆を築くタイプ。あなたに相談すると心が軽くなると言われることも多いはず。その優しさは、あなた自身の運気を支える最大の武器です。',
                year2026: '2026年は「人脈の年」。新しい出会いがあなたの人生を大きく変えるきっかけになります。特に春（3月〜5月）に出会う人物がキーパーソン。人の紹介やご縁を大切にすることで、思わぬチャンスが舞い込みます。感謝の気持ちを言葉にして伝えることが、運気アップの鍵になるでしょう。'
            },
            {
                name: '流星座',
                catch: '〜自由な発想家〜',
                personality: '独創的なアイデアと自由な発想力が武器のクリエイタータイプです。常識にとらわれず、新しいことに挑戦するのが大好き。飽きっぽい一面もありますが、好きなことへの集中力と没頭力は誰にも負けません。人と同じことをするより、自分だけの道を切り拓くことに喜びを感じる、生まれながらの開拓者です。',
                year2026: '2026年は「創造の年」。あなたのアイデアが形になり、周囲から高く評価される流れが来ています。副業や新しいプロジェクト、発信活動を始めるにも最適な年です。6月と12月に幸運の波が訪れるので、それまでにアイデアを温めて準備しておきましょう。直感を信じて動くことが成功への近道です。'
            },
            {
                name: '彗星座',
                catch: '〜疾走する挑戦者〜',
                personality: 'スピード感と決断力が持ち味の挑戦者タイプです。思い立ったら即行動、その瞬発力で誰よりも早くチャンスを掴みます。負けず嫌いな性格で、ライバルの存在が成長の原動力に。多少の失敗ではへこたれないタフな精神力があり、転んでもすぐに立ち上がって前に進む姿が、周囲に勇気を与えています。',
                year2026: '2026年は「勝負の年」。長年の目標に決着をつけるタイミングが来ています。夏（7月〜8月）までに勝負をかけると流れに乗れるでしょう。迷ったときは「攻め」を選ぶことで道が開けます。ただしスピードの出しすぎには注意。大事な契約や決断の前には、一呼吸おいて確認する習慣が幸運を確実なものにします。'
            },
            {
                name: '大樹座',
                catch: '〜堅実な努力家〜',
                personality: 'コツコツと努力を積み重ね、確実に成果を出す堅実派です。責任感が強く、周囲からの信頼は絶大。一度決めたことを最後までやり遂げる粘り強さは、全タイプの中でも随一です。派手さはなくても、あなたの積み重ねてきたものは決して裏切りません。「継続は力なり」を体現する存在です。',
                year2026: '2026年は「収穫の年」。数年前に蒔いた種がいよいよ実を結び、安定と成果を手にできる一年です。特に10月に大きな決断の機会が訪れますが、これまでの経験があなたに正しい答えを教えてくれるでしょう。貯蓄や投資、資格取得など、将来の基盤づくりにも最良の年です。焦らず自分のペースを守ってください。'
            },
            {
                name: '深海座',
                catch: '〜神秘的な思索家〜',
                personality: '物事の本質を見抜く、深い洞察力の持ち主です。静かながら芯が強く、独自の世界観を持っています。表面的な流行に流されず、本当に価値のあるものを見極める目を持つあなたは、ミステリアスな魅力があり、気づけば周囲に大きな影響を与えている存在です。一人の時間から生まれる深い思考が、あなたの最大の財産です。',
                year2026: '2026年は「変革の年」。内面の成長が、外の世界の変化となって現れる一年です。読書や学びへの投資が、数年後の大きな財産になります。11月に人生の方向性が定まる重要な出来事が起こりそうです。変化を恐れず受け入れることで、あなたはひとつ上のステージへ進むことができるでしょう。'
            },
        ];

        const metalTraits = {
            '金': 'あなたは「金」のタイプ。エネルギーが外に向かう傾向があり、行動力と発信力に優れています。考えるより先にまず動くことで運気が回り始めるタイプです。人前に出ること、自分から声をかけることを意識すると、持ち前の輝きがさらに増していきます。',
            '銀': 'あなたは「銀」のタイプ。エネルギーが内に向かう傾向があり、思慮深さと分析力に優れています。じっくり考えてから動くことで、確実に成果を掴むタイプです。焦って周りに合わせる必要はありません。あなたのペースで深く考え抜いた選択が、最良の結果を連れてきます。',
        };

        function hashSeed(str) {
            let h = 0;
            for (let i = 0; i < str.length; i++) {
                h = ((h << 5) - h + str.charCodeAt(i)) | 0;
            }
            return Math.abs(h);
        }

        function showFortune() {
            const birth = document.getElementById('fortuneBirthDate').value;
            if (!birth) {
                alert('生年月日を入力してください');
                return;
            }

            // 生年月日から運命タイプを判定（誕生日ごとに一意）
            const [y, m, d] = birth.split('-').map(Number);
            const digitSum = ('' + y + m + d).split('').reduce((a, c) => a + Number(c), 0);
            const type = personalityTypes[digitSum % personalityTypes.length];
            const metal = y % 2 === 1 ? '金' : '銀';

            document.getElementById('typeName').textContent = metal + 'の' + type.name;
            document.getElementById('typeCatch').textContent = type.catch;
            document.getElementById('typePersonality').textContent = type.personality;
            document.getElementById('typeStyle').textContent = metalTraits[metal];
            document.getElementById('typeYear').textContent = type.year2026;

            // 今日の運勢は「誕生日×今日の日付」で決まる（同じ日は何度引いても同じ結果）
            const now = new Date();
            const todayStr = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
            const fortune = fortunes[hashSeed(birth + '|' + todayStr) % fortunes.length];
            document.getElementById('fortuneTitle').textContent = fortune.title;
            document.getElementById('fortuneMessage').textContent = fortune.message;
            document.getElementById('fortuneScore').textContent = fortune.score + '/100';
            document.getElementById('fortuneLuckFill').style.setProperty('--luck', fortune.score + '%');
            document.getElementById('workLuck').textContent = '⭐'.repeat(fortune.work);
            document.getElementById('loveLuck').textContent = '⭐'.repeat(fortune.love);
            document.getElementById('moneyLuck').textContent = '⭐'.repeat(fortune.money);
            document.getElementById('healthLuck').textContent = '⭐'.repeat(fortune.health);
            document.getElementById('workComment').textContent = fortune.workComment;
            document.getElementById('loveComment').textContent = fortune.loveComment;
            document.getElementById('moneyComment').textContent = fortune.moneyComment;
            document.getElementById('healthComment').textContent = fortune.healthComment;
            document.getElementById('luckyColor').textContent = fortune.luckyColor;
            document.getElementById('luckyItem').textContent = fortune.luckyItem;
            document.getElementById('luckyNumber').textContent = fortune.luckyNumber;
            document.getElementById('fortuneAdvice').textContent = fortune.advice;
            document.getElementById('fortuneCaution').textContent = fortune.caution;
            document.getElementById('fortuneAiAnalysis').textContent = fortune.analysis;
            document.getElementById('fortuneResult').classList.add('show');
            setTimeout(() => document.getElementById('fortuneResult').scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
        }

        function showCompatibility() {
            const date1 = document.getElementById('birthDate1').value;
            const date2 = document.getElementById('birthDate2').value;

            if (!date1 || !date2) {
                alert('両方の生年月日を入力してください');
                return;
            }

            const compatibility = Math.floor(Math.random() * 40) + 60;
            const analyses = [
                '二人の関係は非常に相性が良いです。互いに補い合える素晴らしいパートナーシップが期待できます。',
                'あなたたちの関係は深い信頼で成り立っています。長期的な関係が期待できます。',
                '新鮮な刺激が互いをもたらします。一緒に成長していく関係になるでしょう。',
                '相手はあなたの人生に大きな変化をもたらすでしょう。その変化を受け入れてください。',
            ];

            document.getElementById('compatibilityTitle').textContent = '相性度: ' + compatibility + '%';
            document.getElementById('compatibilityFill').style.setProperty('--luck', compatibility + '%');
            document.getElementById('compatibilityAiAnalysis').textContent = analyses[Math.floor(Math.random() * analyses.length)];
            document.getElementById('compatibilityResult').classList.add('show');
            setTimeout(() => document.getElementById('compatibilityResult').scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
        }

/* ===== 初期表示：本日すでに引いていれば復元 ===== */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', restoreTarot);
} else {
    restoreTarot();
}
