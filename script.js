
let slideIndex = 0;
const slides = document.querySelector('.carousel-slide');
const totalSlides = slides.children.length;

// Function to move the carousel by 1 slide
function moveSlide(step) {
    // Update the slide index
    slideIndex += step;

    // Loop back to the first slide if at the end
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    
    // Loop to the last slide if going backward beyond the first slide
    else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }

    // Calculate offset in percentage to show the next slide
    const offset = slideIndex * -100;
    
    // Apply the transform to move the slides
    slides.style.transform = `translateX(${offset}%)`;
}

// Auto-slide every 3 seconds (optional)
setInterval(() => {
    moveSlide(1); // Move to the next slide
}, 5000);


function validateForm() {
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("number").value;
    const confirmPassword = document.getElementById("address").value;
    
    // Simple validation for empty fields
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("All fields must be filled out!");
        return false;
    }

    // Password confirmation check
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    }
    
    // If all validations pass, allow form submission
    alert("Form successfully submitted!");
    return true;
}



const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Toggle the 'show' class

});


