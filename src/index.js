import data from "./data.js";

const buildBoothCard = booth => {
    // Create elements needed to build a card
    const div = document.createElement("div");
    // const h4 = document.createElement("h4");
    const button = document.createElement("button");
    // const a = document.createElement("a");
    // Append newly created elements into the DOM
    const body = document.querySelector("body");
    body.append(div);
    // h4.append(a);
    div.append(button);
    // Set content and attributes
    button.innerHTML = booth.boothName;
    button.onclick = () => {
        console.log(booth.id);
        window.location.href = 'booth.html?id=' + booth.id;
    };
    div.setAttribute("class", "card");
};

data.forEach(booth => buildBoothCard(booth));