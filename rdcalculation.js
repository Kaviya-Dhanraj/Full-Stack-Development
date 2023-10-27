function calculate() {
  var principle = parseFloat(document.getElementById("principle").value);
  var rate = parseFloat(document.getElementById("rate").value);
  var time = parseFloat(document.getElementById("time").value);
  if (isNaN(principle) || isNaN(rate) || isNaN(time)) {
    alert("Please Enter Valid Number For All Fields");
    return;
  }
  rate = rate / 100;
  var monthlyRate = rate / 12;
  var totalAmount = 0;

  for (var i = 1; i <= time; i++) {
    totalAmount += principle * monthlyRate;
  }

  document.getElementById("result").innerHTML =
    "Total Amount after " + time + " months: ₹" + totalAmount.toFixed(2);
}
