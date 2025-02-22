window.onload = function () {
    const textElement = document.querySelector(".animated-text");
    if (!textElement) {
        console.error("Elemen .animated-text tidak ditemukan!");
        return;
    }

    const text = textElement.getAttribute("data-text");
    let index = 0;
    let isDeleting = false;

    function typeText() {
        if (!isDeleting) {
            textElement.innerText = text.substring(0, index);
            index++;

            if (index > text.length) {
                isDeleting = true;
                setTimeout(typeText, 2000); // Tunggu 2 detik sebelum menghapus
                return;
            }
        } else {
            index--;
            textElement.innerText = text.substring(0, index);

            if (index === 0) {
                isDeleting = false;
                setTimeout(typeText, 1000); // Tunggu 1 detik sebelum mengetik ulang
                return;
            }
        }

        let speed = isDeleting ? 100 : 150; // Kecepatan mengetik & menghapus
        setTimeout(typeText, speed);
    }

    typeText();
};

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Sesuaikan agar tidak tertutup navbar
                    behavior: 'smooth'
                });
            }
        });
    });
});
