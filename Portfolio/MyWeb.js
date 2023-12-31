//Navigation bar effects on scroll
window .addEventListener("scroll",function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


//Website dark/light theme
const themeBtn = document.querySelector(".theme-btn")

themeBtn.addEventListener("click",() => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active",window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// typing animation script
var typed = new Typed(".typing",{
    strings: ["YouTuber", "Active Learner", "Programmer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});


//Navigation menu items active on page scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});

//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () =>{
    navigation.classList.remove("active");
});
closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});
// service section - modal

const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});
 
modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//Portfolio section - Modal

const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function(modelClick){
    portfolioModals[modelClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
});



//Scroll reveal animations
//Common reveal options to create reveal animations
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { delay: 200, origin: 'left'});

ScrollReveal().reveal('.home .text-1, .home .info p, .about-info ,btn',  { delay: 200, origin: 'left'});

ScrollReveal().reveal('.home .info .btn', { delay: 200, origin: 'bottom'});

ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 200, origin: 'left', interval: 100});

ScrollReveal().reveal('.home-img, .about-img', { delay: 200, origin: 'bottom'});

ScrollReveal().reveal('.about .description, .contact-right, .skills-description, .certificate', { delay: 200, origin: 'left'});

ScrollReveal().reveal('.education, img-card', { delay: 200, origin: 'bottom', interval: 100});

ScrollReveal().reveal('.footer .group', { delay: 100, origin: 'top', interval: 100});

ScrollReveal().reveal('.contact-card, .contact-left ', { delay: 200, origin: 'left'});



