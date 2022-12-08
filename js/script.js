function create(input) {
  let perentDivElement = document.getElementById("container");

  for (let word of input) {
    let productDiv = document.createElement("div");
    let boxDiv = document.createElement("div");
    let titleDiv = document.createElement("div");
    let hOne = document.createElement("h1");

    productDiv.className = "product";
    productDiv.dataset.name = `p${word[8]}`;
    boxDiv.className = "box";
    titleDiv.className = "title";

    hOne.textContent = word;

    productDiv.appendChild(boxDiv);
    productDiv.appendChild(titleDiv);
    titleDiv.appendChild(hOne);

    productDiv.addEventListener("click", showPopUp);

    perentDivElement.appendChild(productDiv);
  }
}

function showPopUp() {
  const preveiwContainer = document.querySelector(".product-preview");
  const previewDiv = document.querySelectorAll(".preview");

  Array.from(document.querySelectorAll(".container .product")).forEach(
    (product) =>
      (product.onclick = () => {
        preveiwContainer.style.display = "flex";
        const name = product.getAttribute("data-name");

        previewDiv.forEach((preview) => {
          const target = preview.getAttribute("data-target");
          if (name == target) {
            preview.classList.add("active");
          }
        });
      })
  );

  previewDiv.forEach((close) => {
    close.querySelector(".fa-xmark").onclick = () => {
      close.classList.remove("active");
      preveiwContainer.style.display = "none";
    };
  });
}

const ratings = {
  productOne: 14,
  productTwo: 5,
  productThree: 14,
  productFour: 14,
  productFive: 20,
  productSix: 10,
};

// Run getRatings when DOM loads
document.addEventListener("DOMContentLoaded", getRatings);

function getRatings() {
  for (let rating in ratings) {
    const starPercentageRounded = ratings[rating] + "%";
    console.log(starPercentageRounded);

    // Set width of stars-inner to percentage
    document.querySelector(`.${rating} .stars-inner`).style.width =
      starPercentageRounded;
  }
}
