function checkPassword() {
  const password = document.getElementById('password').value;
  const correctPassword = 'love123';

  if (password === correctPassword) {
    window.location.href = 'index2.html';
  } else {
    alert('❌ Incorrect password');
  }
}
