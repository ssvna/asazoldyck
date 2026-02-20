document.addEventListener('DOMContentLoaded', () => {
    const textItems = document.querySelectorAll('.text-item');

    textItems.forEach(item => {
        // Mouse Enter
        item.addEventListener('mouseenter', () => {
            // Add hover class to current item
            item.classList.add('is-hovered');

            // Dim other items
            textItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.add('is-dimmed');
                }
            });
        });

        // Mouse Leave
        item.addEventListener('mouseleave', () => {
            // Remove hover class
            item.classList.remove('is-hovered');

            // Remove dim from all items
            textItems.forEach(otherItem => {
                otherItem.classList.remove('is-dimmed');
            });
        });

        // Click Effect
        item.addEventListener('click', () => {
            // Quick pulse animation
            item.style.transform = 'scale(1.05)';
            setTimeout(() => {
                item.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // Carousel controls (mobile)
    const carousel = document.querySelector('.links-carousel');
    const btnPrev = document.querySelector('.carousel-btn.prev');
    const btnNext = document.querySelector('.carousel-btn.next');

    if (carousel && btnPrev && btnNext) {
        const scrollAmount = () => {
            const item = carousel.querySelector('.text-item');
            return item ? item.getBoundingClientRect().width + 12 : carousel.clientWidth * 0.8;
        };

        btnPrev.addEventListener('click', () => {
            carousel.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
        });

        btnNext.addEventListener('click', () => {
            carousel.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
        });
    }
});