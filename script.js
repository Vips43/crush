let count = 0;
const noBtn = document.getElementById("noBtn");
noBtn.style.left = "60%";

function moveNoButton() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  const padding = 30;

  const maxX = windowWidth - btnWidth - padding;
  const maxY = windowHeight - btnHeight - padding;

  const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
  const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

function nextQuestion() {
  // Hide current card, show coffee splash text screen
  document.getElementById("phase1").classList.add("hidden");
  document.getElementById("coffeTime").classList.remove("hidden");

  // Keep splash message up for 3 seconds, then naturally proceed to Phase 2
  setTimeout(() => {
    document.getElementById("coffeTime").classList.add("hidden");
    document.getElementById("phase2").classList.remove("hidden");
  }, 3000);
}

function nextmerrQuestion() {
  // Hide proposal card, reveal the kindhearted reward text screen
  document.getElementById("phase2").classList.add("hidden");
  document.getElementById("merryText").classList.remove("hidden");

  // Keep reward card visible for 4 seconds, then transition to food planning
  setTimeout(() => {
    document.getElementById("merryText").classList.add("hidden");
    document.getElementById("phase3").classList.remove("hidden");
  }, 4000);
}

function shakeNoButton() {
  const text = document.getElementById("text");
  const yesBtn = document.getElementById("marryYesBtn");
  const marryNoBtn = document.getElementById("marryNoBtn");
  
  // Instantly force an animation cycle reset via layout reflow
  marryNoBtn.classList.remove("animate");
  void marryNoBtn.offsetWidth;
  marryNoBtn.classList.add("animate");
  
  count++;
  text.style.fontSize = "2rem";

  if (count === 1) {
    text.innerText = "🤦‍♀️";
  } else if (count === 2) {
    yesBtn.style.transform = "scale(1.2)";
    marryNoBtn.style.transform = "scale(0.9)";
    text.innerText = "😣";
  } else if (count === 3) {
    yesBtn.style.transform = "scale(1.4)";
    marryNoBtn.style.transform = "scale(0.7)";
    marryNoBtn.style.backgroundColor = "#d18787";
    text.innerText = "😠";
  } else if (count === 4) {
    yesBtn.style.transform = "scale(1.6)";
    marryNoBtn.style.transform = "scale(0.5)";
    marryNoBtn.style.backgroundColor = "red";
    text.innerText = "😡";
  } else if (count >= 5) {
    marryNoBtn.classList.remove("animate");
    marryNoBtn.style.cursor = "none";
    marryNoBtn.disabled = true;
    marryNoBtn.style.transform = "scale(0)"; // Completely shrink it out of existence
    marryNoBtn.style.display = "none";
    
    text.style.fontSize = "1.2rem";
    text.innerText = "Why can't you choose Yes 👉👈? 😣 😡 Go for it and press Yes!";
  }
}

function selectFood(choice) {
  document.getElementById("phase3").classList.add("hidden");
  document.getElementById("phase4").classList.remove("hidden");
  document.getElementById("finalMessage").innerHTML =
    `Locking in <b>${choice}</b>!<br>Can't wait! ❤️`;
}
