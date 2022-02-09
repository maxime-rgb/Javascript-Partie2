let image = document.getElementById("image1");

image.addEventListener("mouseenter", function() {
    image.src = "images/image1_2.jpg";
});

image.addEventListener("mouseleave", function() {
    image.src = "images/image1.jpg";
});