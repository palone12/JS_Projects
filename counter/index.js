let intial = 0;
const count = document.getElementById("count");

function Increase() {
  intial++;
  count.textContent = intial;
}

function Decrease() {
  if (intial <= 0) {
    return;
  } else {
    intial--;
    count.textContent = intial;
  }
}

function Reset() {
  intial = 0;
  count.textContent = intial;
  alert("Counter will  be reset to 0");
}
