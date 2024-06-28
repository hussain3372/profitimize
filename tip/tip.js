function calculateTip() {
  const totalBill = parseFloat(document.getElementById("total-bill").value);
  const tipPercentage = parseFloat(
    document.getElementById("tip-percentage").value
  );
  const numPersons = parseInt(document.getElementById("num-persons").value);

  if (
    isNaN(totalBill) ||
    isNaN(tipPercentage) ||
    isNaN(numPersons) ||
    totalBill <= 0 ||
    tipPercentage < 0 ||
    numPersons <= 0
  ) {
    alert("Please enter valid values");
    return;
  }

  const tipAmount = tipPercentage;
  const totalBillWithTip = totalBill + tipAmount;
  const tipPerPerson = tipAmount / numPersons;

  document.getElementById(
    "result-bill"
  ).innerText = `Total Bill: ${totalBill.toFixed(2)}`;
  document.getElementById(
    "result-tip"
  ).innerText = `Total Tip: ${tipAmount.toFixed(2)}`;
  document.getElementById(
    "result-total-bill"
  ).innerText = `Total Bill with Tip: ${totalBillWithTip.toFixed(2)}`;
  document.getElementById(
    "result-tip-per-person"
  ).innerText = `Tip Per Person: ${tipPerPerson.toFixed(2)}`;
}
