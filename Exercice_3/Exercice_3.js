let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nom = document.querySelector("#lastname").value;
    console.log(nom);
    alert(nom);
})