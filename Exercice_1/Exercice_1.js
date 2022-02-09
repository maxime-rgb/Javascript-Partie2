let img1 = document.querySelector("#image1");

img1.addEventListener("mouseenter", () => {
    img1.src = "images/image1_2.jpg";
});

img1.addEventListener("mouseleave", () => {
    img1.src = "images/image1.jpg";
});