<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <link rel="stylesheet" href="{{ asset('css/home_styles.css') }}">
    <!-- Font Awesome CDN for Icons -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
</head>
<body>
    
    <div class="container">
        <!-- Header Section -->
        <header class="header">
            <h1>Welcome to Student Registration</h1>
            <p>Your portal for easy and quick student registrations.</p>
        </header>
        
        <!-- Institution Photo Section -->
        <section class="institution-photo-section">
            <img src="{{ asset('images/11.jpg') }}" alt="Institution Photo" class="institution-photo">
        </section>

        <!-- Call to Action -->
        <section class="cta">
            <div class="cta-buttons">
                <a href="{{ route('etudiants.create') }}" class="cta-button">Register Now</a>
                <a href="{{ url('/about') }}" class="cta-link">Learn More About Our Institute</a>
                <a href="{{ url('/contact') }}" class="cta-link">Contact Us</a>
                <a href="{{ url('/programs') }}" class="cta-link">Programs</a>
            </div>
        </section>

        <!-- Social Media Links Section -->
        <section class="social-media">
            <a href="https://www.facebook.com/isim.sfax.rnu.tn/" class="social-icon" target="_blank" title="Facebook">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.youtube.com/c/ISIMSfax_USF" class="social-icon" target="_blank" title="YouTube">
                <i class="fab fa-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/company/isim-sfax/" class="social-icon" target="_blank" title="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://isimsf.rnu.tn" class="social-icon" target="_blank" title="Google">
                <i class="fab fa-google"></i>
            </a>
        </section>
    </div>

    <!-- Footer Section -->
    <footer>
        <p>&copy; {{ date('Y') }} Student Registration. All rights reserved.</p>
    </footer>
</body>
</html>
