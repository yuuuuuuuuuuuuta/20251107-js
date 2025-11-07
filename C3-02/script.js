const btn = document.querySelector('#fade-button-js');

btn.addEventListener('click', () => {
    btn.style.backgroundColor = '#05b'; // クリック時の背景色
    setTimeout(() => {
        btn.style.backgroundColor = '#07f'; // 元の背景色に戻す
    }, 500); // 0.5秒後
});