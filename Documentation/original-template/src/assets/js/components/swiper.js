/**
* Swiper Slider
* Enables carousels and sliders
* Requires swiper-bundle.min.js
*/

import Swiper from 'swiper/bundle';


const swiper = new Swiper(".workspaceSwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".locationSwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 600,
        grabCursor: true,

        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
        },

        breakpoints: {
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1280: { slidesPerView: 2 },
        },
    });
});

new Swiper(".storySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 15,
    loop: true,
    speed: 700,

    navigation: {
      nextEl: ".story-next",
      prevEl: ".story-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
      },

      1024: {
        slidesPerView: 3,
      },
    },
  });

// Service Slider
new Swiper(".serviceSwiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    speed: 600,

    navigation: {
        nextEl: ".service-next",
        prevEl: ".service-prev",
    },

    breakpoints: {
        768: {
            slidesPerView: 1.2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Blog Slider
new Swiper(".blogSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 600,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".blog-next",
        prevEl: ".blog-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
    },
});

// Sticky horizontal scroll section for Case Studies
const initCaseStudyScroll = () => {
    const container = document.getElementById("case-study-sticky-container");
    const track = document.getElementById("case-study-track");
    if (!container || !track) return;

    const handleScroll = () => {
        if (window.innerWidth < 1024) {
            track.style.transform = '';
            return;
        }

        const rect = container.getBoundingClientRect();
        const containerTop = rect.top + window.scrollY;
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;

        const scrolled = window.scrollY - containerTop;
        const maxScroll = containerHeight - windowHeight;

        // Total translate width = track width - window width
        const maxTranslate = track.scrollWidth - window.innerWidth;

        if (scrolled < 0) {
            track.style.transform = 'translate3d(0px, 0px, 0px)';
        } else if (scrolled > maxScroll) {
            track.style.transform = `translate3d(-${maxTranslate}px, 0px, 0px)`;
        } else {
            const progress = scrolled / maxScroll;
            const translate = progress * maxTranslate;
            track.style.transform = `translate3d(-${translate}px, 0px, 0px)`;
        }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    // Initial call
    handleScroll();
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCaseStudyScroll);
} else {
    initCaseStudyScroll();
}

// Industries Slider
new Swiper(".industriesSwiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    speed: 600,
    navigation: {
        nextEl: ".industries-next",
        prevEl: ".industries-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1.9,
            spaceBetween: 24,
        },
        640: {
            slidesPerView: 1.9,
            spaceBetween: 24,
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 10,
        },
    },
});

// Case Study Slider
new Swiper(".caseStudySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 700,
    navigation: {
        nextEl: ".case-study-next",
        prevEl: ".case-study-prev",
    }
});

// Testimonial Slider
const testimonialSwiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 600,
    navigation: {
        nextEl: ".testimonial-next",
        prevEl: ".testimonial-prev",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        375: {
            slidesPerView: 1.2,
            spaceBetween: 16,
        },
        576: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 1.2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});

// Support multiple navigation buttons
document.querySelectorAll(".testimonial-next").forEach(button => {
    button.addEventListener("click", () => {
        testimonialSwiper.slideNext();
    });
});
document.querySelectorAll(".testimonial-prev").forEach(button => {
    button.addEventListener("click", () => {
        testimonialSwiper.slidePrev();
    });
});