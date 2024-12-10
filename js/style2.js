/* General Reset */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
  }
  
  /* Slideshow Section */
  .slideshow-container {
    position: relative;
    width: 80%;
    height: 60%;
    margin: 20px auto;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  /* Animation for sliding images */
  .slides img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: slideshow 10s ease-in-out infinite;
  }
  
  @keyframes slideshow {
    0% { transform: translateX(0); }
    20% { transform: translateX(-100%); }
    40% { transform: translateX(-200%); }
    60% { transform: translateX(-300%); }
    100% { transform: translateX(0); }
  }
  