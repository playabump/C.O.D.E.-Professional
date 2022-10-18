new Swiper('.swiper', {
    get slidesPerView() {
        let slidesCount = 0;
        const screenWidth = document.documentElement.clientWidth;

        const $slider = document.querySelector('.slider');
        const $sliderButtons = document.querySelector('.slider__nav');
        $sliderButtons.style.cssText = `
            left: 50%;  
            transform: translateX(-50%);
        `;


        if (screenWidth >= 927) slidesCount = 3;

        if (screenWidth <= 1120) {
            $sliderButtons.style.width = `98%`;
        }

        if (screenWidth <= 1050) {
            $sliderButtons.style.display = 'none';
        }

        if (screenWidth <= 937) {
            this.spaceBetween = 55;
            slidesCount = 2;
            $slider.style.maxWidth = '565px';

            $sliderButtons.style.display = '';
            $sliderButtons.style.width = '85%';
        };

        if (screenWidth <= 815) {
            $sliderButtons.style.width = '95%';
        }

        if (screenWidth <= 715) {
            $sliderButtons.style.width = '100%';
        }

        if (screenWidth <= 685) {
            $sliderButtons.style.display = 'none';
        }

        if (screenWidth <= 587) {
            $sliderButtons.style.display = '';
            $sliderButtons.style.width = '85%';

            this.spaceBetween = 500;
            slidesCount = 1;
            $slider.style.maxWidth = '255px';
        };

        if (screenWidth <= 460) {
            $sliderButtons.style.width = '95%';
        }

        if (screenWidth <= 400) {
            $sliderButtons.style.display = 'none';
        }

        return slidesCount;
    },
    spaceBetween: 75,
    // loop: true,
    navigation: {
        prevEl: '#slider-prev',
        nextEl: '#slider-next',
    },

    autoplay: {
        delay: 4000,
    }
})