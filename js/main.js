const openNav = document.querySelector(".ri-menu-line");
const closeNav = document.querySelector(".ri-close-fill");
const navLinks = document.querySelector(".navList ul");

openNav.addEventListener("click", function() {
    navLinks.style.top = "35%"
    openNav.style.display = "none";
    closeNav.style.display = "block";
})
closeNav.addEventListener("click", function() {
    navLinks.style.top = "-35%"
    openNav.style.display = "block";
    closeNav.style.display = "none";
})
document.querySelectorAll(".navList ul a").forEach(navSite => {
    navSite.addEventListener("click", function() {
        navLinks.style.top = "-35%"
        openNav.style.display = "block";
        closeNav.style.display = "none";
    })
})
// code to switch between tabs at the section

const tab1 = document.querySelector('.active_tab');
const tab2 = document.querySelector('.active_tab2');
const tab3 = document.querySelector('.active_tab3');
const text1 = document.querySelector('#section_body');
const text2 = document.querySelector('#section_body2');
const text3 = document.querySelector('#section_body3');


tab1.addEventListener('click', function() {
    text1.style.display = 'flex'
    text2.style.display = 'none'
    text3.style.display = 'none'
    tab1.classList.add('active_tab')
    tab2.classList.remove('active_tab')
    tab3.classList.remove('active_tab')

})
tab2.addEventListener('click', function() {
    text2.style.display = 'flex'
    text1.style.display = 'none'
    text3.style.display = 'none'
    tab2.classList.add('active_tab')
    tab1.classList.remove('active_tab')
    tab3.classList.remove('active_tab')
})
tab3.addEventListener('click', function() {
    text3.style.display = 'flex'
    text1.style.display = 'none'
    text2.style.display = 'none'
    tab3.classList.add('active_tab')
    tab1.classList.remove('active_tab')
    tab2.classList.remove('active_tab')
})

// code to make the FAQ section functional

const FAQs = document.querySelectorAll('.FAQ1')
FAQs.forEach(FAQ => {
    FAQ.addEventListener('click', ()=>{
        FAQ.classList.toggle('show')
        FAQ.classList.toggle('imageRotate')
        console.log(FAQ.classList);
    })
})