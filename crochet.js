let image1 = document.getElementById("img1");
let image2 = document.getElementById("img2");
let image3 = document.getElementById("img3");

let heroSection = document.getElementsByClassName("herosection")[0];
let line3 = document.getElementsByClassName("line3")[0];

let imageSlider = document.getElementsByClassName("image-slider")[0];
let imgDot = document.getElementsByClassName("img-dot")[0];



function toggleBackground(image) {
    // Toggle background image
    if (heroSection.style.backgroundImage === `url("${image.src}")`) {
        heroSection.style.backgroundImage = ""; // Reset to original
        heroSection.classList.remove("background-active");
        line3.classList.remove("background-active");
        imageSlider.classList.remove("background-active");
        imgDot.classList.remove("background-active");
    } else {
        heroSection.style.backgroundImage = `url(${image.src})`;
        heroSection.style.backgroundRepeat = "no-repeat";
        heroSection.classList.add("background-active");
        line3.classList.add("background-active");
        imageSlider.classList.add("background-active");
        imgDot.classList.add("background-active");
        
    }
}

image1.addEventListener("click", function() {
    toggleBackground(image1);
});

image2.addEventListener("click", function() {
    toggleBackground(image2);
});

image3.addEventListener("click", function() {
    toggleBackground(image3);
});
