// body 要素にアニメーションを加えるよ
document.body.animate(
    {
        //  背景色を #fcc から #f66 に変化させる
        background: ["#fcc", "#f66"],
    },
    {
        // 終了時の状態で止める
        fill: "forwards",
        // 3000ミリ秒(=3秒)かけてアニメーション
        duration: 3000
    }
);