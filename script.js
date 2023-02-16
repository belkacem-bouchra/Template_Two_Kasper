// Come back to top while refresh

window.onload = function () {
    window.scrollTo(0, 0);
}

// Show and hide search input

let searchInput = document.querySelector('.search-input'),
    searchBtn = document.querySelector('.form'),
    xSearch = document.querySelector('.x-search'),
    searchIcon = document.querySelector('.fa-magnifying-glass'),
    circle = document.querySelector('.circle'),
    // Get the ::before and ::after of circle
    beforeProp = window.getComputedStyle(circle, "::before"),
    afterProp = window.getComputedStyle(circle, "::after");

searchBtn.addEventListener('click', function () {
    circle.classList.toggle('full-width');
    searchIcon.classList.toggle('new-search-btn');
    xSearch.classList.toggle('close-search');
    menu.classList.toggle('close');
    if (beforeProp.opacity == 0) {
        circle.style.setProperty('--changeOpacity', '1');
    } else {
        circle.style.setProperty('--changeOpacity', '0');
    }
    searchInput.classList.toggle('show-input');
    if (menu.classList.contains('show-menu') == true) {
        menu.classList.remove('show-menu');
        openIt.classList.remove('close');
        closeIt.classList.add('close');
        mainHeader.classList.remove('full-header');
    }
});

// Toggle class for burger

let mainHeader = document.querySelector('header'),
    burger = document.querySelector('.toggle-btn'),
    openIt = document.querySelector('.toggle-menu'),
    closeIt = document.querySelector('.close-menu'),
    menu = document.querySelector('.menu');

burger.addEventListener('click', function () {
    mainHeader.classList.toggle('full-header');
    menu.classList.toggle('show-menu');
    closeIt.classList.toggle('close');
    openIt.classList.toggle('close');
    if (searchInput.classList.contains('show-input') == true) {
        searchInput.classList.remove('show-input');
        circle.classList.remove('full-width');
        circle.style.setProperty('--changeOpacity', '0');
        searchIcon.classList.remove('new-search-btn');
        xSearch.classList.add('close-search');
    }
});

// Get variables to let the header fixed after scrolling

let fullBody = document.querySelector('body'),
    cont = document.querySelector('header .container'),
    borderHeight = window.getComputedStyle(cont, "::after");

// Get All Sections

var sections = Array.from(document.querySelectorAll('.section'));

// Change style of navigation links after clicking

let navItem = Array.from(document.querySelectorAll('.menu li a')),
    navLength = navItem.length,
    currentNav = 1;
for (i = 0; i < navLength; i++) {
    navItem[i].setAttribute('nav-index', i + 1);
}
for (i = 0; i < navLength; i++) {
    navItem[i].onclick = function () {
        currentNav = parseInt(this.getAttribute('nav-index'));
        navCheck();
    }
}
function navCheck() {
    removeActiveNav();
    // Hide Nav Menu oncklick on Nav Link -- Mobile Version
    mainHeader.classList.remove('full-header');
    openIt.classList.remove('close');
    closeIt.classList.add('close');
    menu.classList.remove('show-menu');
    navItem[currentNav - 1].classList.add('active-nav');
}
navCheck();
function removeActiveNav() {
    navItem.forEach(function (nav) {
        nav.classList.remove('active-nav');
    })
}

// Landing Slider

let slides = Array.from(document.querySelectorAll('.slide-content .slide')),
    nbrSlides = slides.length,
    currentSlide = 1,
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    pagination = document.querySelector('.indicators');
prev.onclick = prevSlide;
next.onclick = nextSlide;
var paginationUL = document.createElement('ul');
paginationUL.setAttribute('id', 'bullets');
for (i = 1; i <= nbrSlides; i++) {
    var paginationLi = document.createElement('li');
    paginationLi.setAttribute('data-index', i);
    paginationUL.appendChild(paginationLi);
}
pagination.appendChild(paginationUL);
var createdUL = document.querySelector('#bullets'),
    paginationItem = Array.from(document.querySelectorAll('#bullets li'));
for (i = 0; i < paginationItem.length; i++) {
    paginationItem[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        checker();
    }
}
function checker() {
    removeAllActive();
    removeAllCurrent();
    slides[currentSlide - 1].classList.add('active');
    createdUL.children[currentSlide - 1].classList.add('current');
}
checker();
function removeAllActive() {
    slides.forEach(function (img) {
        img.classList.remove('active');
    })
}
function removeAllCurrent() {
    paginationItem.forEach(function (pag) {
        pag.classList.remove('current');
    })
}
function nextSlide() {
    currentSlide++;
    if (currentSlide > nbrSlides) {
        currentSlide = 1;
    }
    checker();
}
function prevSlide() {
    currentSlide--;
    if (currentSlide < 1) {
        currentSlide = nbrSlides;
    }
    checker();
}
setInterval(function () {
    currentSlide++;
    if (currentSlide > nbrSlides) {
        currentSlide = 1;
    }
    checker();
}, 5000);

// Change portfolio content after clicking on Portfolio list
let portList = Array.from(document.querySelectorAll('.portfolio-list li')),
    portContainer = document.querySelector('.portfolio-container'),
    portBox = Array.from(document.querySelectorAll('.portfolio-box')),
    portListNbr = portList.length,
    portBoxNbr = portBox.length,
    currentPort = 1;

for (i = 0; i < portListNbr; i++) {
    portList[i].setAttribute('data-port', i + 1)
}
for (i = 0; i < portListNbr; i++) {
    portList[i].addEventListener('click', function () {
        currentPort = parseInt(this.getAttribute('data-port'));
        portCheck();
    })
}
function portCheck() {
    removePortLi();
    remmoveVisibleBox();
    portList[currentPort - 1].classList.add('active-li');
    portBox[currentPort - 1].classList.add('visible-box');
}
portCheck();
function removePortLi() {
    portList.forEach(function (li) {
        li.classList.remove('active-li');
    })
}
function remmoveVisibleBox() {
    portBox.forEach(function (box) {
        box.classList.remove('visible-box');
    })
}

// Change testimonials content

let testi = Array.from(document.querySelectorAll('.testi-container .testimonial-content')),
    nbrTesti = testi.length,
    currentTesti = 1,
    testiIndicators = document.querySelector('.testi-indic');
var indicatorsUl = document.createElement('ul');
indicatorsUl.setAttribute('class', 'buttons');
for (i = 1; i <= nbrTesti; i++) {
    var indicatorsLi = document.createElement('li');
    indicatorsLi.setAttribute('list-index', i);
    indicatorsUl.appendChild(indicatorsLi);
}
testiIndicators.appendChild(indicatorsUl);
var newUl = document.querySelector('.buttons'),
    indicatorItem = Array.from(document.querySelectorAll('.buttons li'));
for (i = 0; i < indicatorItem.length; i++) {
    indicatorItem[i].onclick = function () {
        currentTesti = parseInt(this.getAttribute('list-index'));
        theChecker();
    }
}
function theChecker() {
    removeTestiVisible();
    removeTestiCurrent();
    testi[currentTesti - 1].classList.add('visible-box');
    newUl.children[currentTesti - 1].classList.add('current-li');
}
theChecker();
function removeTestiVisible() {
    testi.forEach(function (test) {
        test.classList.remove('visible-box')
    })
}
function removeTestiCurrent() {
    indicatorItem.forEach(function (ind) {
        ind.classList.remove('current-li');
    })
}
setInterval(function () {
    currentTesti++;
    if (currentTesti > nbrTesti) {
        currentTesti = 1;
    }
    theChecker();
}, 5000);

// Get variables to start counting after scrolling to stats section

let statsSection = document.querySelector('.stats'),
    stats = document.querySelectorAll('.stats .box .number'),
    numb = document.querySelector('.number'),
    statsNumb = document.querySelectorAll('.stats .number'),
    afterNumber = window.getComputedStyle(numb, "::after");
let started = false; // function started ? No
function startCount(el) {
    let goal = el.dataset.stats,
        count = setInterval(function () {
            el.textContent++;
            if (el.textContent == goal) {
                clearInterval(count);
            }
        }, 10);
}
/* First methode to excute function
statsNumb.forEach(function (stat) {
    startCount(stat);
})
/*Second methode
for (i = 0; i < statsNumb.length; i++) {
    startCount(document.querySelectorAll('.stats .number')[i]);
}
*/

// Get variables to change skills % after scrolling to skills section

let skillSection = document.querySelector('.skills'),
    skill = document.querySelectorAll('.our-skills .skill .prog span'),
    progSpan = document.querySelectorAll('.prog span');

// Execute functions : fixed header, count statistics, change skills %

fullBody.onscroll = function () {
    // Fixed Header Function
    if (window.scrollY == 0) {
        mainHeader.classList.remove('fixed-header');
        cont.style.setProperty('--changeHeight', '1px');
    }
    if (window.scrollY > 0) {
        mainHeader.classList.add('fixed-header');
        cont.style.setProperty('--changeHeight', '0px');
    }
    // Change Nav Links Style On Scroll
    var scrollPosition = document.documentElement.scrollTop;
    sections.forEach(function (sect) {
        if (scrollPosition >= sect.offsetTop - 70 && scrollPosition < sect.offsetTop + sect.offsetHeight) {
            var currentSect = sect.attributes.id.value;
            removeActiveNav();
            addActiveClasse(currentSect);
        }
    })
    // Count Statistics Function
    if (window.scrollY >= statsSection.offsetTop - 100) {
        if (!started) {
            for (i = 0; i < statsNumb.length; i++) {
                startCount(document.querySelectorAll('.stats .number')[i]);
            }
        }
        started = true;
    }
    // Change Skills %
    if (window.scrollY >= skillSection.offsetTop - 100) {
        for (i = 0; i < progSpan.length; i++) {
            progSpan[i].style.width = `${parseInt(progSpan[i].getAttribute('data-progress'))}%`;
        }
    }
}
var addActiveClasse = function (id) {
    var selector = `ul a[href="#${id}"]`;
    document.querySelector(selector).classList.add('active-nav');
}
// Come back to top after clicking on button

let backUpBtn = document.querySelector('.scroll-btn');
backUpBtn.onclick = function () {
    window.scrollTo(0, 0);
}