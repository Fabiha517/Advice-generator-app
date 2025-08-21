async function getAdvice() {
  try {
    const adviceNo = document.querySelector(".adviceNo");
    const advice = document.querySelector(".advice");
    const adviceContent = document.querySelector(".adviceContent");

    const skeletons = document.querySelectorAll(".skeleton");

    // show skeleton while fetching
    skeletons.forEach((s) => (s.style.display = "block"));
    advice.style.display = "none";
    adviceNo.style.display = "none";

    adviceContent.classList.remove("pop-in");

    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    skeletons.forEach((s) => (s.style.display = "none"));

    adviceNo.textContent = `ADVICE # ${data.slip.id}`;
    advice.textContent = `“${data.slip.advice}”`;
    advice.style.display = "block";
    adviceNo.style.display = "block";

    adviceContent.classList.add("pop-in");
  } catch (error) {
    console.log(
      "Could not fetch advice from [https://api.adviceslip.com/advice]!"
    );
  }
}
getAdvice();

function nextAdvice() {
  const nextAdvice = document.querySelector(".nextAdvice");
  nextAdvice.addEventListener("click", () => {
    getAdvice();
  });
}
nextAdvice();
