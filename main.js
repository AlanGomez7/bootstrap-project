const addItems = () => {
    console.log("running")
    const items = ["Vada.avif", "Upma.avif", "Tea.avif", "Shake.avif", "Juice.avif", "Idli.avif",
        "Dosa.avif", "Dhokla.avif", "Chole-Bhature.avif", "Cake.avif"
    ]
    const parent = document.getElementById('option-box');
    parent.innerHTML = "";
    items.forEach(element => {
        console.log(element)
        parent.innerHTML +=
            `<div class="option-img" style="background-image:url(images/${element})">
            </div>`
    });
}

document.addEventListener("DOMContentLoaded", () => {
    addItems();
});