function toggleMenu() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.display = 'flex';
    
    setTimeout(() => {
        dropdown.style.opacity = '1';
    }, 10);
}

function cancel() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.style.opacity = '0';
    setTimeout(() => {
        dropdown.style.display = 'none';
    }, 300); 
}

document.querySelector('.hamburg').onclick = toggleMenu;
document.querySelector('.cancel').onclick = cancel;

const animatedTextElement = document.querySelector('.animated-text');
const titles = ["Data Scientist.", "Machine Learning Engineer.", "B.Tech Student.", "Full Stack Developer."];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
       
        charIndex--;
        animatedTextElement.textContent = currentTitle.substring(0, charIndex);
    } else {
       
        charIndex++;
        animatedTextElement.textContent = currentTitle.substring(0, charIndex);
    }

    let typeSpeed = 150; 

    if (isDeleting) {
        typeSpeed /= 2; 
    }

    if (!isDeleting && charIndex === currentTitle.length) {
       
        typeSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
       
        isDeleting = false;
        titleIndex++;
        if (titleIndex === titles.length) {
            titleIndex = 0;
        }
        typeSpeed = 250; 
    }

    setTimeout(typeWriter, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    if (animatedTextElement) {
        typeWriter();
    }
});