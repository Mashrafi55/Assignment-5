const heartCount = document.getElementById("heart-count");

const heartBtns = document.getElementsByClassName("heart-btn");

for (const btn of heartBtns) {
  let liked = false;

  btn.addEventListener("click", function () {
    const currentCount = Number(heartCount.innerText);
    const icon = btn.querySelector("i");

    if (liked === false) {
      heartCount.innerText = currentCount + 1;
      icon.classList.replace("fa-regular", "fa-solid");
      icon.classList.add("text-red-500");
      liked = true;
    } else {
      heartCount.innerText = currentCount - 1;
      icon.classList.replace("fa-solid", "fa-regular");
      icon.classList.remove("text-red-500");
      liked = false;
    }
  });
}

const callBtns = document.getElementsByClassName("call-btn");

const coinCount = document.getElementById("coin-count");

const callHistoryContainer = document.getElementById("call-history-container");


for (const btn of callBtns) {
  btn.addEventListener("click", function () {

    const card = btn.closest(".rounded-xl");
    const serviceName = card.querySelector("h1").innerText
    const serviceNumber = card.querySelector(".text-3xl").innerText;

    const coins = Number(coinCount.innerText);
    if(coins < 20){
      alert("Not enough coins! Minimum 20 coins needed to call.")
      return;
    }

     alert(`Calling ${serviceName} — ${serviceNumber}`);

    coinCount.innerText = coins -20;
     
     const historyItem = document.createElement("div");
    historyItem.innerHTML = `
      <div class="flex bg-[#FAFAFA] justify-between items-center py-3  border-red-100 rounded-lg px-4 mx-[24px] mb-[8px]">
        <div>
          <p class="font-semibold text-[18px]">${serviceName}</p>
          <p class="text-gray-500 text-[18px]">${serviceNumber}</p>
        </div>
        <p>${new Date().toLocaleTimeString()}</p>
      </div>
    `;
    callHistoryContainer.appendChild(historyItem);


    
   
    

    
  });
}