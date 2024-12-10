document.addEventListener("DOMContentLoaded", function () {
  const timerElement = document.getElementById("timer");

  // Set the target date (Birthday Date)
  const targetDate = new Date("2024-12-20T00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      timerElement.innerHTML = "🎉 It's Your Birthday! 🎂";
      clearInterval(timerInterval);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60)) / 1000 / 60);
    const seconds = Math.floor((distance % 60) / 1);

    timerElement.innerHTML = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
  }

  updateCountdown();
  const timerInterval = setInterval(updateCountdown, 1000);
});

// Validate password logic
function checkPassword() {
  const correctPassword = "12345"; // Change this to a password of your choice
  const userPassword = document.getElementById("password").value;

  if (userPassword === correctPassword) {
    alert("✅ Password Correct! Redirecting...");
    window.location.href = "index2.html";
  } else {
    alert("❌ Incorrect Password. Please try again.");
  }
}
