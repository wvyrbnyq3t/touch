const el = window;
el.addEventListener("touchstart", (e) => {
  console.log(e.targetTouches[0], e.targetTouches[1]);
})