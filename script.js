const el = window;
let prevX = 0;
let prevY = 0;

const textDx = document.getElementById("dx");
const textDy = document.getElementById("dy");

// タッチ開始
el.addEventListener("touchstart", (e) => {
  const touches = e.touches[0];
  prevX = touches.screenX;
  prevY = touches.screenY;
})

// 移動
el.addEventListener("touchmove", (e) => {
  const touches = e.touches[0];
  
  const x = touches.screenX;
  const y = touches.screenY;

  const dx = x - prevX;
  const dy = y - prevY;

  prevX = x;
  prevY = y;

  textDx.innerText = dx;
  textDy.innerText = dy;
})