

// ********** Show Menu ********** 

const btn = document.querySelector('.hamb-menu');
const menu = document.querySelector('.links-container');

btn.addEventListener('click', () => {
    menu.classList.toggle('show-menu')
})

// ********** Fixed NavBar ********** 

const nav = document.querySelector('.nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = nav.getBoundingClientRect().height;

    if(scrollHeight > navHeight) {
        nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav')
    }

    if(scrollHeight > 500) {
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    }
})