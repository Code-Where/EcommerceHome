const slides = document.querySelectorAll(".slides")
var counter = 0

slides.forEach(
    (slide, index) =>{
        slide.style.left = `${index * 100}%`
    }
)

const goNext = () =>{
    (counter < 3) ? counter++ : counter = 0;
    slideImg()
}
const goPrev = () =>{
    (counter > 0) ? counter-- : counter +=3 ;
    slideImg()
}

const slideImg = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translate(-${counter * 100}%)`
        }
    )
}

var menu = document.getElementById("nav_menu");
var menuOpen = false;
const openMenu = () =>{
    if(!menuOpen){
        menu.style.right = '0';
        menuOpen = true;
    }
    else{
        menu.style.right = '-20%';
        menuOpen = false;
    }
}