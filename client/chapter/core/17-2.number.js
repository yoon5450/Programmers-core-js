function toRadians(degree) {
  return degree * (Math.PI / 180);
}

function toDegree(radian) {
  return radian * (180 / Math.PI);
}

const circle = document.querySelector(".circle");
let deg = 45;
let radius = 10;
let lastInsertTime = 0;

function animation() {
  deg += 0.3;

  const x = Math.cos(toRadians(deg)) * 100;
  const y = Math.sin(toRadians(deg)) * 100;

  const currentTime = Date.now();

  if (currentTime - lastInsertTime >= 300) {
    const tag = `
    <div style="transform:translate(${x}px, ${-y}px")>war</div>
  `;

    document.querySelector('.space').insertAdjacentHTML("beforeend", tag);

    lastInsertTime = currentTime;
  }

  circle.style.transform = `translate(${x}px, ${y}px)`;
}

setInterval(animation, 0);
