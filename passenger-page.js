// passengers' review slides

let slideIndex91 = 1;
showSlides91(slideIndex91);

function plusSlides91(n) {
    showSlides91(slideIndex91 += n);
}

function currentSlide91(n) {
    showSlides91(slideIndex91 = n);
}

function showSlides91(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides91");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex91 = 1 }
    if (n < 1) { slideIndex91 = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex91 - 1].style.display = "block";
    dots[slideIndex91 - 1].className += " active";
}