const elemContainer = document.getElementById("elem-container"),
    fixedImage = document.getElementById("fixed-image"),
    page4 = document.getElementById("page4"),
    imageContainer = document.querySelector('#page4-right')



const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



// fixed image func
elemContainer.addEventListener("mouseenter", () => {
    fixedImage.style.display = "block"
})

elemContainer.addEventListener("mouseleave", () => {
    fixedImage.style.display = "none"
})

let allElam = document.querySelectorAll(".elem")
allElam.forEach((e) => {
    e.addEventListener("mouseenter", () => {
        let image = e.getAttribute("data-image")
        fixedImage.style.backgroundImage = `url(${image})`
    })
})


// page4

// Get the parent container
const headerContainer = document.querySelector('.header');

headerContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'H1') {
        headerContainer.querySelectorAll('h1').forEach(h1Element => {
            h1Element.classList.remove('active')
        });

        event.target.classList.add('active');
        const className = event.target.classList[0]; 

        if (className === "design-h") {
            document.querySelector(".design-p").style.display = "block";
            document.querySelector(".project-p").style.display = "none";
            document.querySelector(".execution-p").style.display = "none";


            document.querySelector('.design-i').style.display = 'block';
            document.querySelector('.project-i').style.display = 'none';
            document.querySelector('.execution-i').style.display = 'none';
        } else if (className === "project-h") {
            document.querySelector(".design-p").style.display = "none";
            document.querySelector(".project-p").style.display = "block";
            document.querySelector(".execution-p").style.display = "none";

            document.querySelector('.design-i').style.display = 'none';
            document.querySelector('.project-i').style.display = 'block';
            document.querySelector('.execution-i').style.display = 'none';
        } else if (className === "execution-h") {
            document.querySelector(".design-p").style.display = "none";
            document.querySelector(".project-p").style.display = "none";
            document.querySelector(".execution-p").style.display = "block";

            document.querySelector('.design-i').style.display = 'none';
            document.querySelector('.project-i').style.display = 'none';
            document.querySelector('.execution-i').style.display = 'block';
        }
    }
});




// Swiper js 

const swiperAnimation = () => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
    });
}


swiperAnimation()