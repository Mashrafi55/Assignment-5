// call  & coin
const calls = document.getElementsByClassName("Call-btn");
const coin_id = document.getElementById("Coin");

let value = parseInt(coin_id.textContent);
let save_data = [];

for (let card of calls) {
  card.addEventListener("click", function (e) {
    e.preventDefault();

    if (value < 20) {
      alert(
        "❌ You don’t have enough coins; making a call requires at least 20 coins."
      );
      return;
    }

    let parentCard = card.closest(".parent");
    let message_value = parentCard.querySelector(".message-value").textContent;
    let message_title = parentCard.querySelector(".message-title").textContent;
    let message_number =
      parentCard.querySelector(".message-number").textContent;

    value -= 20;
    coin_id.textContent = value;

    alert("📞 " + message_value + " " + message_number);

    const data = {
      name: message_title,
      amount: message_number,
      date: new Date().toLocaleTimeString(),
    };

    save_data.push(data);

    const transactionPart = document.getElementById("history-add");
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="bg-[#f4f5f7] rounded-xl p-3 flex justify-between items-center mb-3">
        <div>
          <h1>${data.name}</h1>
          <div class="flex justify-between items-center">
            <span>${data.amount}</span>
            <span style="margin-left: 50px;">${data.date}</span>
          </div>
        </div>
      </div>
    `;
    transactionPart.prepend(div);
  });
}

// remove history
const clear_button = document.getElementById("clear-button");
clear_button.addEventListener("click", function () {
  save_data = [];
  document.getElementById("history-add").innerHTML = "";
});

// heart
const buttons = document.getElementsByClassName("heart-btn");
for (let btn of buttons) {
  btn.addEventListener("click", function () {
    const hearts = parseInt(document.getElementById("heart").innerText);
    document.getElementById("heart").innerText = hearts + 1;
  });
}

// copy section
const copyNumbers = document.getElementsByClassName("copyNumber");
const numbers = document.getElementsByClassName("number");

for (let i = 0; i < copyNumbers.length; i++) {
  copyNumbers[i].addEventListener("click", function () {
    let text = numbers[i].innerText;
    navigator.clipboard.writeText(text);
    alert("Number has been copied: " + text);

    const copyCount = parseInt(document.getElementById("copy-count").innerText);
    document.getElementById("copy-count").innerText = copyCount + 1;
  });
}
