// gsap.from(".box", {
//   x: 200,
//   y: 300,
//   duration: 2,
//   scale: 2,
//   backgroundColor: "red",
//   rotate: 360,
//   yoyo: true, // For both to and from stimulataneoulsy
//   repeat: 3, // -1 for infinite times of repeatations
// });

// gsap.to(".box", {
//   x: 200,
//   y: 300,
//   duration: 5,
//   scale: 2,
//   backgroundColor: "red",
//   rotate: 360,
// });

gsap.to(".box", {
  x: 500,
  y: 100,
  duration: 1,
  //   ease: "bounce.inOut",
  //   repeat: 2,
});

gsap.to(".optimus", {
  x: 600,
  y: 400,
  yoyo: true,
  repeat: -1,
  delay: 0.7,
  duration: 2,
});

gsap.to(".megatron", {
  x: -600,
  y: 400,
  yoyo: true,
  repeat: -1,
  delay: 1,
  duration: 2,
});
