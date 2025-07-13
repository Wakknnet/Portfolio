document.addEventListener("DOMContentLoaded", function () {
    let text = "Front-end Developer ";
    let span = document.getElementById("changing-text");
    let index = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    let deletingSpeed = 100;
    let delayAftertyping = 1500;
    let delayAfterDeleting = 500;

    function typeEffect() {
        if (!isDeleting) {
            span.textContent = text.substring(0, index);
            index++;
            if (index > text.length) {
                isDeleting = true;
                setTimeout(typeEffect, delayAftertyping); // Pause before deleting
                return;
            }
        } else {
            span.textContent = text.substring(0, index);
              index--;
              if (index === 0) {
                  isDeleting = false;
                  setTimeout(typeEffect, delayAfterDeleting); // Pause before retyping
                  return;
              }
        }
        setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed); // Speed of typing & deleting
    }

    typeEffect();
});