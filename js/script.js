function checkPassword() {
  const passwordInput = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');
  const memoriesSection = document.getElementById('memories-section');
  const imageGallery = document.getElementById('image-gallery');

  const secretPassword = 'love123'; // Change this to your own password

  if (passwordInput === secretPassword) {
    memoriesSection.style.display = 'block';
    errorMessage.innerText = '';
    loadImages(); // Dynamically load images
  } else {
    errorMessage.innerText = '❌ Incorrect password. Please try again.';
  }
}

function loadImages() {
  const imageGallery = document.getElementById('image-gallery');
  imageGallery.innerHTML = ''; // Clear previous images if the user tries to unlock multiple times

  for (let i = 1; i <= 16; i++) {
    const img = document.createElement('img');
    img.src = `images/memory${i}.jpg`;
    img.alt = `Memory ${i}`;
    img.classList.add('memory-img');
    imageGallery.appendChild(img);
  }
}
