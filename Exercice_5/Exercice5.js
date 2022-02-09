let images = document.querySelectorAll("#image");
console.log(images);

images.forEach((image) =>{
    image.addEventListener("mouseenter", () => {
        //let source = image.src.split(".jpg");
        let source2 = image.src.replace(/.jpg/, "_2.jpg")
        image.src = source2
        console.log(source2);
    });

    image.addEventListener("mouseleave", () => {
        let source1 = image.src.replace(/_2.jpg/, ".jpg");
        image.src = source1
        console.log(source1);
    });
});
