const pizza = {
    pizzaSize: {},
    get price() {
        return pizza.pizzaSize.price;
    },
};
document.querySelector("#pizza").addEventListener("click", (e) => {});
const [...lebAr] = document.querySelectorAll("label > input");
lebAr.forEach((item) => {
    item.addEventListener("click", (e) => {
        console.dir(item);
        if (item.checked) {
            const input = item;
            if (input.id == "mid") {
                pizza.pizzaSize = {
                    size: "mid",
                    price: 50,
                };
            } else if (input.id == "small") {
                pizza.pizzaSize = {
                    size: "small",
                    price: 30,
                };
            } else if (input.id == "big") {
                pizza.pizzaSize = {
                    size: "big",
                    price: 80,
                };
            }
            showInfo();
        }
    });
});
function showInfo() {
    document.querySelector(".price > p").innerHTML = "Ціна: " + pizza.price;
}
