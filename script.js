document.addEventListener("DOMContentLoaded", () => {
  const messages = [
    document.getElementById("message1"),
    document.getElementById("message2"),
    document.getElementById("message3"),
  ];

  messages.forEach((message, index) => {
    setTimeout(() => {
      message.style.display = "block";
      message.style.animationDelay = `${index * 2}s`;
    }, index * 2000);
  });

  const gallery = document.getElementById("gallery");
  setTimeout(() => {
    gallery.style.display = "flex";
  }, messages.length * 2000 + 1000);
});
function createBalloons() {
  const balloonContainer = document.getElementById("balloons");
  const balloonCount = 20; // Số lượng bóng bay

  for (let i = 0; i < balloonCount; i++) {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = `${Math.random() * 100}vw`; // Vị trí ngang ngẫu nhiên
    balloon.style.animationDuration = `${5 + Math.random() * 5}s`; // Thời gian bay ngẫu nhiên
    balloon.style.background = `radial-gradient(circle, ${getRandomColor()}, ${getRandomColor()})`; // Màu sắc ngẫu nhiên

    balloonContainer.appendChild(balloon);
  }
}

// Hàm tạo màu ngẫu nhiên
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener("DOMContentLoaded", createBalloons);
function createGifts() {
  const giftContainer = document.getElementById("gifts");
  const giftCount = 10; // Số lượng hộp quà

  for (let i = 0; i < giftCount; i++) {
    const gift = document.createElement("div");
    gift.classList.add("gift");
    gift.style.left = `${Math.random() * 100}vw`; // Vị trí ngang ngẫu nhiên
    gift.style.top = `${Math.random() * 100}vh`; // Vị trí dọc ngẫu nhiên
    gift.style.animationDuration = `${6 + Math.random() * 4}s`; // Thời gian di chuyển ngẫu nhiên

    giftContainer.appendChild(gift);
  }
}

document.addEventListener("DOMContentLoaded", createGifts);
