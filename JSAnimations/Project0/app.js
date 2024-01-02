const moonpath =
  "M57 69C57 107.108 117.974 138 76 138C34.0264 138 0 107.108 0 69C0 30.8924 34.0264 0 76 0C117.974 0 57 30.8924 57 69Z";

const sunPath =
  "M152 69C152 107.108 117.974 138 76 138C34.0264 138 0 107.108 0 69C0 30.8924 34.0264 0 76 0C117.974 0 152 30.8924 152 69Z";
const darkMode = document.querySelector("#darkMode");

let toggle = false;

//toggle function

darkMode.addEventListener("click", () => {
  console.log("Working");
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });
  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonpath }],
    })
    .add(
      {
        targets: "#darkMode",
        rotate: 320,
      },
      "-=350"
    )
    .add({
      targets: "section",
      backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
    })
    .add(
      {
        targets: "h1",
        color: toggle ? "#000000" : "#ffffff",
      },
      "-=700"
    );

  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
