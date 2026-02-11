// Show the surprise + Valentine question
function showLove() {
  const container = document.getElementById("surprise-container");
  container.classList.add("show");
}

// Show the response for Yes / No
function valentineAnswer(answer) {
  const response = document.getElementById("valentine-response");
  if (answer === "yes") {
    response.textContent = "Yay! I'm so happy ❤️ Can't wait to spend today with you!";
  } else if (answer === "no") {
    response.textContent = "Yeah, Nice Try theres no way you can say no to me. I know you love me too";
  }
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

// Generate hearts continuously
setInterval(createHeart, 300);