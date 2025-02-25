document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate');

    function onScroll() {
        animateElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger animation on page load
});
//Text typing animation
document.addEventListener("DOMContentLoaded", function() {
    const text = "I am Seth Chenge, a front-end developer.";
    const typingTextElement = document.getElementById("typing-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 50); // Adjust typing speed here
        } else {
            setTimeout(erase, 200); // Adjust pause before erasing here
        }
    }
    function erase() {
        if (index > 0) {
            typingTextElement.innerHTML = text.substring(0, index - 1);
            index--;
            setTimeout(erase, 50); // Adjust erasing speed here
        } else {
            setTimeout(type, 200); // Adjust pause before typing starts again
        }
    }
    type();
});
//Tooltip in footer
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
