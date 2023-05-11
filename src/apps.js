const links = document.querySelectorAll('.link-item');
const scrollGuy = document.querySelector('.exp-group');
const thisYear = document.querySelector('.footer-item span');
const testGroup = document.querySelector('.test-group');
const popUpOpen = document.querySelector('.popup-wrapper');
const popUpClose = document.querySelector('.popup-close');


const now = new Date()

thisYear.textContent = now.getFullYear();

// counter
window.addEventListener('scroll', (event)=>{
    const counters = document.querySelectorAll('.value');
    const speed = 500;
        
    counters.forEach( counter => {
    const animate = () => {
        const value = +counter.getAttribute('num');
        const data = +counter.textContent;
                
        const time = value / speed;
        if(data < value) {
            counter.textContent = Math.ceil(data + time);
            setTimeout(animate, 1);
            }else{
                counter.textContent = `${value}+`;
            }
            }
            animate();
    });
});



const testimonials = [

    {
    user: 'Joy Daniel',
    comment: 'He helped my team and I stay on the same page. Previously, we were all over the board. Using Henry has definitely saved us time and money.',
    rating: 5
    },
    

    {
    user: 'Dolapo Odunsi',
    comment: 'Amazing Henry has really helped our business. Definitely worth the investment. Thank you!',
    rating: 5
    },

    {
    user: 'OMG Empire',
    comment: 'I would recommend Henry for anyone trying to get the word out about their business. It has saved me so much time!',
    rating: 5
    },

    {
    user: 'Abu John',
    comment: 'If you want to take your business to the next level, use Amazing Henry Visuals and you will get best value for your money.',
    rating: 5
    },

];


testimonials.forEach((testimony)=>{
    html = `
    <div class="item">
        <div class="stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
        </div>
        <p>${testimony.comment}
        </p>
        <h6>${testimony.user}</h6>
    </div>
    `
    testGroup.innerHTML += html

});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


// menu code
const menuButton = document.querySelector('.menu');
const menuClose = document.querySelector('.menucancel');
const navMobile = document.querySelector('.nav-mobile');

// function to open menu
const openMenu = () => {
    navMobile.style.display = 'block';
    navMobile.style.width = '100%';
    navMobile.style.left = 0;
    menuClose.style.display = 'block';
    menuButton.style.display = 'none';
};


// function to close menu
const closeMenu = () => {
    navMobile.style.display = 'none';
    menuClose.style.display = 'none';
    menuButton.style.display = 'block';

}

// condition to check if menu is closed so you can open
if (closeMenu) {
    menuButton.addEventListener('click', ()=> {
        openMenu();
    })
}

if (openMenu) {
    menuClose.addEventListener('click', ()=>{
        closeMenu();
    })
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzcdgDCkGpUR5w9TOgm5nwSUrD6kZz1nS3EY2og7_I9SvNPF6xsNhOu21sC8nsrM-gflw/exec'
  const form = document.forms['submit-to-google-sheet']
  const formFeedback = document.querySelector('#form-feedback');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        formFeedback.textContent += 'Message sent successfully';
        formFeedback.classList.add('success-message');
        setTimeout( ()=>{
            formFeedback.textContent = "";
            formFeedback.classList.remove('success-message');
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
});

setTimeout(()=>{
    popUpOpen.style.display = 'block'
}, 10000)

popUpClose.addEventListener('click', ()=>{
    popUpOpen.style.display = 'none'
})
