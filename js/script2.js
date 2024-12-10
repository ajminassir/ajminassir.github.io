// Array of image URLs
const images = [
  "images/memory1.jpg.jpg",
  "images/memory2.jpg.jpg" ,
  "images/memory3.jpg.jpg" ,
  "images/memory4.jpg.jpg" ,
  "images/memory4.jpg (2).jpg", 
  "images/memory6.jpg.jpg" ,
  "images/memory7.jpg.jpg",
  "images/memory8.jpg.jpg",
  "images/memory9.jpg.jpg" ,
  "images/memory10.jpg.jpg",
  "images/memory11.jpg.jpg" ,
  "images/memory12.jpg.jpg",
  "images/memory13.jpg.jpg" ,
  "images/memory14.jpg.jpg" ,
"images/memory15.jpg.jpg" ,
];

let currentIndex = 0;

// Show the image at the given index
function showImage(index) {
  const imageElement = document.getElementById('slideshow');
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  imageElement.src = images[currentIndex];
}

// Navigate to the next image
function nextImage() {
  showImage(currentIndex + 1);
}

// Navigate to the previous image
function prevImage() {
  showImage(currentIndex - 1);
}

// Initialize the first image
showImage(currentIndex);
