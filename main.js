function MouseEvent(){
  window.addEventListener("mousemove",function(dets){
      this.document.querySelector(".minicircle").style.transform= `translate(${dets.clientX}px, ${dets.clientY}px )`;
  })

}
MouseEvent();
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      if(navToggle){
        navToggle.addEventListener('click', ()=>{
            navMenu.classList.add('show-menu')
        })
      }

      if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu')
        })
      }





      const navLink = document.querySelectorAll('.nav-link')

      const linkAction =()=>{
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')

      }

      navLink.forEach(n => n.addEventListener('click',linkAction))




      const shadowHeader =()=>{
        const header = document.getElementById('header')

        this.scrollY >= 50 ? header.classList.add('shadow-header')
                        :  header.classList.remove('shadow-header')
      }
      window.addEventListener('scroll',shadowHeader)


      const contactForm = document.getElementById('contact-form'),
            contactMessage = document.getElementById('contact-message')

            const sendEmail = (e) =>{
                e.preventDefault()

                emailjs.sendForm('service_w0a440n','template_4uyu4gt','#contact-form','le81V6ZFdFFLGcpec')
                .then(() =>{
                    
                    contactMessage.textContent ='Message sent Successfully'


                    setTimeout(() =>{
                        contactMessage.textContent =''

                    },5000)

                    contactForm.reset()

                },()=>{
                    contactMessage.textContent ='Message not sent (Service Error)'
                })

            }
            contactForm.addEventListener('submit', sendEmail)



            const scrollUp =() =>{
                const scrollUp =document.getElementById('scroll-up')

                this.scrollY>= 350? scrollUp.classList.add('show-scroll')
                                :   scrollUp.classList.remove('show-scroll')


            }
            window.addEventListener('scroll',scrollUp)



            const scetions = document.querySelectorAll('section[id]')





const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


var typed = new Typed('.text', {
  strings: ["Front-End Developer", "UI UX Designer", "Web-Page Designer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true
});

function firstpage(){
  var tl = gsap.timeline();

  tl.from(".home-container .home-name ",{
        x:`-150`, 
        duration:1.5,
        opacity:0,
        Delay:1
  } )

  tl.from(".home-container h3",{
    x:`-100`,
    duration:1,
    opacity:0,
  })
  

}
firstpage();


var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".about",
    scroller:"body",
  
    start:" top 50%",
    end: "top 0",
  }
})
tl2.from(".about-container h2",{
  y:-100,
  opacity:0,
  duration:1,
  delay:0.5
},"anim")
tl2.from(".about-image",{
  x:-150,
  opacity:0,
  duration:1,
  delay:0.5
},"anim")

tl2.from(".about-description",{
  x:100,
  opacity:0,
  duration:1,
},"anim")


tl2.from(".about-item",{
  x:100,
  opacity:0,
  duration:1
},"page")
tl2.from(".about-buttons",{
  y:100,
  opacity:0,
  duration:1,
  delay:0.5
},"page")

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".services",
    scroller:"body",
 
    start:" top 50%",
    end: "top 0",
  }
})
tl2.from(".services-card",{
  x:200,
  duration:1,
  delay:0.5,
  opacity:0
})

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".projects",
    scroller:"body",
   
    start:" top 50%",
    end: "top 0",
  }
})

tl2.from(".first",{
  x:100,
  duration:1,
  opacity:0,
})

let elt= document.querySelectorAll('.slide-text > *')

anime({
  targets: elt,
  translateX:'-100%',
  duration:12000,
  easing:'linear',
  loop:true
});


const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});

MouseEvent();


function circlemove(){
  window.addEventListener("mousemove",function(dets){
    this.document.querySelector("#minicircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
  })
  }
  circlemove();