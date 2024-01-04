const tl = gsap.timeline();

tl.from("#box1", {
  x: 400,
  duration: 2,
  rotation: 360,
});
tl.from("#box2", {
  x: 500,
  duration: 2,
  rotation: 180,
});
tl.from("#box3", {
  x: 600,
  duration: 2,
  rotation: 90,
});
