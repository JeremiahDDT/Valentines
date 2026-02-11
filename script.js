// Surprise button shows the container with the message + question
function showLove() {
  document.getElementById("surprise-container").style.display = "block";
}

// Valentine answer button (Yes / No) shows response
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

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);


