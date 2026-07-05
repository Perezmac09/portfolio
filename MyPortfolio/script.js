if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true,
    });
}

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header nav a');
const aosElements = document.querySelectorAll('[data-aos]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

function handleAOS() {
    aosElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top <= windowHeight * 0.85 && rect.bottom >= 0) {
            el.classList.add('aos-animate');
        }
    });
}

window.addEventListener('scroll', () => {
    activateNavLink();
    handleAOS();
});
window.addEventListener('load', () => {
    activateNavLink();
    handleAOS();
});
