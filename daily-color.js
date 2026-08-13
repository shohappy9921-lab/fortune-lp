// 本日のラッキーカラー（全ページ共通）
// 「訪問者ごとの固有ID × 日付」で決まるため、色は人それぞれ違います。
// 同じ人が同じ日に何度見ても色は変わらず、日付が変わると新しい色になります。
(function () {
  const LUCKY_COLORS = [
    { name: 'ゴールド',       hex: '#d4af37', msg: '自信と豊かさを呼び込む色。ここぞという場面で身につけると、あなたの存在感が際立ちます。' },
    { name: 'スカイブルー',   hex: '#5fb8e8', msg: '心を静め、視界をひらく色。迷いがあるときほど、冷静な判断を後押ししてくれます。' },
    { name: 'コーラルピンク', hex: '#ff8b94', msg: '人との距離を縮める色。笑顔が自然にこぼれ、あたたかい縁が舞い込みやすい一日に。' },
    { name: 'エメラルドグリーン', hex: '#2ea87e', msg: '疲れを癒やし、バランスを取り戻す色。無理をせず、自分のペースを守る日に最適です。' },
    { name: 'ラベンダー',     hex: '#b39ddb', msg: '直感を研ぎ澄ます色。ふと浮かんだひらめきが、思わぬ幸運の入口になりそうです。' },
    { name: 'サンオレンジ',   hex: '#ff9f43', msg: '行動力に火を灯す色。迷っていたことに、今日こそ一歩を踏み出してみましょう。' },
    { name: 'パールホワイト', hex: '#f2f0e6', msg: '心と場を清める色。区切りをつけたいとき、新しく始めたいときに味方になります。' },
    { name: 'ロイヤルパープル', hex: '#7b5ea7', msg: '品格と洞察を高める色。人を見る目が冴え、大切な判断を誤りにくい一日です。' },
    { name: 'ルビーレッド',   hex: '#d64550', msg: '情熱と勝負運を高める色。勇気がほしい場面で、背中を押してくれます。' },
    { name: 'ミントグリーン', hex: '#7fd4b8', msg: '新鮮な風を運ぶ色。凝り固まった考えがほぐれ、良い変化が起こりやすくなります。' },
    { name: 'ネイビー',       hex: '#2c3e6b', msg: '信頼と落ち着きの色。大事な話し合いや、真剣な場面であなたを支えてくれます。' },
    { name: 'シャンパンベージュ', hex: '#e3d5b8', msg: '緊張をゆるめる色。肩の力が抜け、まわりとの関係がなめらかに回り始めます。' },
    { name: 'ターコイズ',     hex: '#3ec1c9', msg: '言葉に力を宿す色。伝えたいことがあるなら、今日は素直に口にしてみて。' },
    { name: 'チェリーピンク', hex: '#e8628f', msg: '恋愛運を後押しする色。自分を可愛がる気持ちが、そのまま魅力になります。' },
    { name: 'サンドイエロー', hex: '#f5d76e', msg: '明るさと金運を招く色。小さな幸運に気づけるほど、流れが良くなっていきます。' },
  ];

  function hashSeed(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = ((h << 5) - h + str.charCodeAt(i)) | 0;
    return Math.abs(h);
  }

  // 訪問者ごとの固有ID（初回訪問時に作成し、以後ずっと同じものを使う）
  function visitorId() {
    const KEY = 'lucky_visitor_id';
    try {
      let id = localStorage.getItem(KEY);
      if (!id) {
        id = Math.random().toString(36).slice(2) + '-' + Date.now().toString(36);
        localStorage.setItem(KEY, id);
      }
      return id;
    } catch (e) {
      // 保存できない環境では、その場限りのIDで動かす
      if (!window.__luckyTempId) {
        window.__luckyTempId = Math.random().toString(36).slice(2);
      }
      return window.__luckyTempId;
    }
  }

  function render() {
    const box = document.getElementById('dailyColor');
    if (!box) return;

    const now = new Date();
    const key = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
    // 「人」×「日付」で色を決める
    const c = LUCKY_COLORS[hashSeed(visitorId() + '|' + key) % LUCKY_COLORS.length];
    const week = ['日', '月', '火', '水', '木', '金', '土'][now.getDay()];
    const dateText = now.getFullYear() + '年' + (now.getMonth() + 1) + '月' + now.getDate() + '日（' + week + '）';

    box.innerHTML =
      '<div class="dc-date">' + dateText + '</div>' +
      '<div class="dc-main">' +
        '<span class="dc-swatch" style="background:' + c.hex + '"></span>' +
        '<div class="dc-info">' +
          '<div class="dc-label">本日のラッキーカラー</div>' +
          '<div class="dc-name">' + c.name + '</div>' +
        '</div>' +
      '</div>' +
      '<p class="dc-msg">' + c.msg + '</p>';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
