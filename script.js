const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let step = 1;

function main() {
  // Update circles with "active" class based on the current step
  circles.forEach((circle, index) => {
    if (index < step) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // Recalculate active elements AFTER updating the circles
  let actives = document.querySelectorAll(".active");

  // Update progress bar width based on active circles
  progress.style.width = `${
    ((step - 1) / (circles.length - 1)) * 100
  }%`;

  console.log(progress.style.width);
  console.log(actives.length);
  console.log(circles.length);

  // Enable/disable buttons based on the current step
  if (step === 1) {
    prev.disabled = true;
  } else if (step === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

// Next Button
next.addEventListener("click", () => {
  step++;

  if (step > circles.length) {
    step = circles.length;
  }

  main();
});

// Previous Button
prev.addEventListener("click", () => {
  step--;

  if (step < 1) {
    step = 1;
  }

  main();
});

// Initialize progress tracker
main();
