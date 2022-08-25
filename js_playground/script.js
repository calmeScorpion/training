let str1;
let str2;
function concatinate() {
  str1 = document.getElementById('str1').value;
  str2 = document.getElementById('str2').value;
  alert(str1 + ' ' + str2);
}
function reverse() {
  str1 = document.getElementById('str1').value;
  str2 = ' ';
  for (let i = str1.length - 1; i >= 0; i--) {
    str2 += str1[i];
  }
  alert(str2);
}
function search() {
  str1 = document.getElementById('str1').value;
  str2 = document.getElementById('str2').value;
  let search = str1.indexOf(str2) + 1;
  if (search >= 1) {
    alert('Yes, at position ' + search);
  } else {
    alert('Not present');
  }
}
function split() {
  str1 = document.getElementById('str1').value;
  str2 = document.getElementById('str2').value;
  let search = str1.indexOf(str2);
  let len = str1.length;
  let str3 = ' ';
  if (search == 0) {
    alert('NO SPLIT ELEMENT');
  } else {
    for (let i = 0; i < len; i++) {
      str3 += str1[i];
      if (i == search) str3 += ' ';
    }
    alert(str3);
  }
}
