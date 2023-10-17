function convert() {
  let celval = Number(document.getElementById("input").value);
  let farenval = (celval * 9) / 5 + 32;
  let convert = document.getElementById("result");
  convert.innerHTML = farenval.toFixed(0) + " Farenheit";
}
