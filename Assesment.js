const cards = document.querySelectorAll(".card");
const totalPrice = document.getElementById("total-price");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => {
      c.classList.remove("selected");
      const variant = c.querySelector(".variants");
      if (variant) variant.classList.add("hidden");
    });


    card.classList.add("selected");
    card.querySelector("input[type='radio']").checked = true;


    const variant = card.querySelector(".variants");
    if (variant) variant.classList.remove("hidden");


    const value = card.getAttribute("data-value");
    switch (value) {
      case "1":
        totalPrice.textContent = "$10.00 USD";
        break;
      case "2":
        totalPrice.textContent = "$18.00 USD";
        break;
      case "3":
        totalPrice.textContent = "$24.00 USD";
        break;
    }
  });
});
