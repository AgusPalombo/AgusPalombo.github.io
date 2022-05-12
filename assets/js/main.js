/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav__toggle'),
      navClose = document.getElementById('nav__close')

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add('show-sidebar')
    })
}

/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove('show-sidebar')
    })
}

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click",()=>{
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents => {
                tabContents.classList.remove("skills__active")
                
            })

            target.classList.add('skills__active') 
         

            tabs.forEach(tab =>{
                tab.classList.remove("skills__active")
         
            })

            tab.classList.add('skills__active') 
         
        })
    })




/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container',{
    selectors:{
        target: '.work__card'
    },
    animation:{
        duration:300
    }
})

/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active__work'))
    this.classList.add('active__work')
}

linkWork.forEach(l=> l.addEventListener("click",activeWork))

/*===== Work Popup =====*/
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("work__button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement)
    }
})

function togglePortfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click",togglePortfolioPopup);

function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

/*=============== SERVICES MODAL ===============*/


/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")

// add an event listener listening for scroll
window.addEventListener("scroll", navHighLighter)

function navHighLighter(){
    // get current scroll position
    let scrollY = window.pageYOffset;

    // now we loop through sections to get height, top and ID values for each
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");


    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add("active-link")
    }
    else{
        document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove("active-link")
    }


    })
}
/*=============== EMAIL JS ===============*/

let mail = document.querySelector("#email");



function sendMail(params){
    if(mail.value != ""){
       
            var termParams = {
                from_name: document.querySelector("#email").value,
                to_name: document.querySelector("#name").value,
                message: document.querySelector("#message").value,
                tel: document.querySelector("#tel").value
            }
            emailjs.send('gmail','template_feb6yys',termParams)
        
            .then(function(res){
                swal("Thanks!", "I will get in touch with you as soon as possible");
                
                setTimeout (()=>{
                  document.location.replace("#home")
                },2000)
               
            })
        }
    else swal("Complete the contact form pleas!", "Thank you", "error");
    }

