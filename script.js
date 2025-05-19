// for header

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
let navbarLinks = document.querySelectorAll('.navbar a');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

navbarLinks[0].classList.add('active');
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove the 'active' class from all links
        navbarLinks.forEach(nav => nav.classList.remove('active'));
        // Add the 'active' class to the clicked link
        link.classList.add('active');
    });
});

// for window scroll

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}
window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}


// for home section
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
});

// for feature section
var swiper = new Swiper(".feature-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
    },
});

// for trainer section
var swiper = new Swiper(".trainer-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },

      breakpoints: {
        0: {
            slidesPerView:1
        },
        768: {
            slidesPerView:2
        },
        991: {
            slidesPerView:3
        },
      },
  });

// for blog section
var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
      },

      breakpoints: {
        0: {
            slidesPerView:1
        },
        768: {
            slidesPerView:2
        },
        991: {
            slidesPerView:3
        },
      },
  });

// Set initial mode from localStorage
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    themeToggle.classList.remove('fa-moon');
    themeToggle.classList.add('fa-sun');
} else {
    body.classList.remove('light-mode');
    themeToggle.classList.remove('fa-sun');
    themeToggle.classList.add('fa-moon');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    if (isLight) {
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    } else {
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
    }
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});