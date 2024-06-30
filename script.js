function updateClock() {
  const now = new Date();

  // Actualizar reloj digital
  const digitalTime = formatTime(now.getHours()) + ':' + formatTime(now.getMinutes()) + ':' + formatTime(now.getSeconds());
  document.getElementById('digital-time').textContent = digitalTime;

  // Actualizar reloj analógico
  const hourHand = document.getElementById('hour-hand');
  const minuteHand = document.getElementById('minute-hand');
  const secondHand = document.getElementById('second-hand');

  const hourDeg = (now.getHours() % 12) * 30 + now.getMinutes() * 0.5; // 30 degrees per hour, 0.5 degrees per minute
  const minuteDeg = now.getMinutes() * 6 + now.getSeconds() * 0.1; // 6 degrees per minute, 0.1 degrees per second
  const secondDeg = now.getSeconds() * 6; // 6 degrees per second

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

setInterval(updateClock, 1000); // Update every second
