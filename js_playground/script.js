let num1;
let num2;
function addition() {
  num1 = parseInt(document.getElementById('num1').value);
  num2 = parseInt(document.getElementById('num2').value);
  let sum = num1 + num2;
  alert('Sum = ' + sum);
}
function subtraction() {
  num1 = parseInt(document.getElementById('num1').value);
  num2 = parseInt(document.getElementById('num2').value);
  let dif = num1 - num2;
  alert('Difference = ' + dif);
}
function multiplication() {
  num1 = parseInt(document.getElementById('num1').value);
  num2 = parseInt(document.getElementById('num2').value);
  let mul = num1 * num2;
  alert('Product = ' + mul);
}
function division() {
  num1 = parseInt(document.getElementById('num1').value);
  num2 = parseInt(document.getElementById('num2').value);
  let div = num1 / num2;
  alert('division = ' + div);
}