let calculate = document.querySelector("#calculate");

calculate.addEventListener("click", () => {
  let totalBill = document.querySelector("#totalBill").value;
  let tipPercent = document.querySelector("#tipPercent").value;
  let split = document.querySelector("#split").value;

  //vaue
  if (totalBill === "" || tipPercent == 0 || split == 0) {
    alert("You better leave a damn tip...");
    return;
  }

  //calulate
  let total = (totalBill * tipPercent) / split;
  total = total.toFixed(2);

  document.getElementById("tip").innerHTML = total;
});
