const addItems = () => {
  const items = [
    "Vada.avif",
    "Upma.avif",
    "Tea.avif",
    "Shake.avif",
    "Juice.avif",
    "Idli.avif",
    "Dosa.avif",
    "Dhokla.avif",
    "Chole-Bhature.avif",
    "Cake.avif",
  ];

  const parent = document.getElementById("option-box");
  parent.innerHTML = "";

  items.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("option-img");
    div.style.backgroundImage = `url(images/${item})`;
    parent.appendChild(div);
  });
};

const addRestaurants = () => {
  const parent = document.getElementById("resto-list");

  [{image:"Cake.avif", title:"Cake", description: "Hello"}].forEach((item) => {
    const card = document.createElement("div");
    card.className = "card shadow-sm";
    card.style.width = "18rem";

    card.innerHTML = `
      <img src="/images/${item.image}" class="card-img-top" alt="${item.title}" />
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">${item.description}</p>
        <a href="#" class="btn btn-primary">View Menu</a>
      </div>
    `;

    parent.appendChild(card);
  });
};

window.onload = addItems;
