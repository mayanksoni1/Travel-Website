document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.header .navbar');
    const searchForm = document.querySelector('.search-form');
    const menuBtn = document.querySelector('#menu-btn');
    const navCloseBtn = document.querySelector('#nav-close');
    const searchBtn = document.querySelector('#search-btn');
    const closeSearchBtn = document.querySelector('#close-search');
    const header = document.querySelector('.header');
    const whatsappButton = document.querySelector('#whatsappButton');

    if (whatsappButton) {
        whatsappButton.addEventListener('click', () => {
            // Get input field values
            const name = document.querySelector('input[name="name"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const phone = document.querySelector('input[name="phone"]').value;
            const subject = document.querySelector('input[name="subject"]').value;
            const message = document.querySelector('textarea[name="message"]').value;

            // WhatsApp number (replace with yours)
            const phoneNumber = "918889400248"; // no + or spaces

            // Build message text
            const text = `Hello! 👋 I'm ${name}.
Email: ${email}
Phone: ${phone}
Subject: ${subject}
Message: ${message}`;

            // Encode message for URL
            const encodedText = encodeURIComponent(text);

            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

            // Redirect to WhatsApp
            window.open(whatsappURL, '_blank');
        });
    }



    // Menu button click handler
    if (menuBtn && navbar) {
        menuBtn.addEventListener('click', () => {
            navbar.classList.add('active');
        });
    }

    // Close navigation button click handler
    if (navCloseBtn && navbar) {
        navCloseBtn.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    }

    // Search button click handler
    if (searchBtn && searchForm) {
        searchBtn.addEventListener('click', () => {
            searchForm.classList.add('active');
        });
    }

    // Close search button click handler
    if (closeSearchBtn && searchForm) {
        closeSearchBtn.addEventListener('click', () => {
            searchForm.classList.remove('active');
        });
    }

    // Scroll event handler
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        // Debounce scroll event
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            navbar.classList.remove('active');
            if (window.scrollY > 0) {
                header.classList.add('active');
            } else {
                header.classList.remove('active');
            }
        }, 50); // Adjust debounce delay as needed
    });

    // Initial scroll position check
    if (window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});
