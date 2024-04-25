const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

setTimeout(() => {
  let iteration = 0;
  let interval;

  clearInterval(interval);

  interval = setInterval(() => {
    const target = document.querySelector("h1");
    target.innerText = target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}, 5000); // 5000 milliseconds = 5 seconds
/*
document.querySelector("h1").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
};
*/
