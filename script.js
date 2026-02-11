// Show the surprise + Valentine question
function showLove() {
  const container = document.getElementById("surprise-container");
  container.classList.add("show"); // adds the fade-in and display block
}

// Show the response for Yes / No
function valentineAnswer() {
  document.getElementById("valentine-response").style.display = "block";
}

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.getElementById("hearts-container").appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}

// Create hearts continuously
setInterval(createHeart, 300);