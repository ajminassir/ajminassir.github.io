document.addEventListener("DOMContentLoaded", function () {
  const timerElement = document.getElementById("timer");

  // Set the target date
  const targetDate = new Date("2024-12-20T00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      timerElement.innerHTML = "🎉 It's your Birthday! 🎂";
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
  }

  updateCountdown();
  const timerInterval = setInterval(updateCountdown, 1000);
});
