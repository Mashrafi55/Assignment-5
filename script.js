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
