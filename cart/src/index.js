import faker from "faker";

const cart = faker.random.number();
const cartText = `<div>You have ${cart} items in your cart </div>`;

document.querySelector("#cart-dev").innerHTML = cartText;
