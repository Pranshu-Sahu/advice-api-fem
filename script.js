const btn = document.querySelector(".btn");
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
let p = "https://api.adviceslip.com/advice";
async function getAdvice() {
  const response = await axios.get(
    `https://api.adviceslip.com/advice?${Math.random()}`
  );
  const dataSlip = response.data.slip;
  adviceText.innerHTML = dataSlip.advice;
  adviceId.innerHTML = `Advice # ${dataSlip.id}`;
}
function disableBtn() {
  btn.setAttribute("disabled", "");
  setTimeout(() => {
    btn.removeAttribute("disabled");
  }, 5000);
}

btn.addEventListener("click", getAdvice);
btn.addEventListener("click", disableBtn);
