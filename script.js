document.addEventListener("DOMContentLoaded", () => {
  const words = ["Web Developer", "Coder", "Computer Science Student", "Tech Enthusiast"];
  const typingSpan = document.querySelector(".typing");
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typingSpan.textContent = currentWord.slice(0, charIndex);

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 1000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
});
