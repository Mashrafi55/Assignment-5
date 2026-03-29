const heartCount = document.getElementById("heart-count");

const heartBtns = document.getElementsByClassName("heart-btn");


// heart button fuctionality
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

// call button fucitonality
const callBtns = document.getElementsByClassName("call-btn");

const coinCount = document.getElementById("coin-count");

const callHistoryContainer = document.getElementById("call-history-container");


for (const btn of callBtns) {
  btn.addEventListener("click", function () {

      const card = btn.closest(".card");
    const serviceName = card.querySelector(".service-name").innerText;
    const serviceNumber = card.querySelector(".service-number").innerText;

    const coins = Number(coinCount.innerText);
    if(coins < 20){
      alert("❌ Not enough coins! Minimum 20 coins needed to call.")
      return;
    }

     alert(`📞 Calling ${serviceName} — ${serviceNumber}`);

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

// copy button functionality
const copyBtns = document.getElementsByClassName("copy-btn");
const copyCount = document.getElementById("copy-count");

for(const btn of copyBtns){
  btn.addEventListener('click', function(){


    const card = btn.closest(".card");
    const serviceNumber = card.querySelector(".service-number").innerText;
    const serviceName = card.querySelector(".service-name").innerText;

   
    navigator.clipboard.writeText(serviceNumber);


    const currentCount = Number(copyCount.innerText);
    copyCount.innerText = currentCount + 1;

    alert(`${serviceName} — ${serviceNumber} copied to clipboard!`); 
  })
}

// clear button fuctionality

const clearBtn = document.getElementById("clear-btn")

clearBtn.addEventListener("click", function(){
  callHistoryContainer.innerHTML = "";
});