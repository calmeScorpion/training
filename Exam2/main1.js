function difference(n) {
  let dif = n - 13;
  console.log('difference= ' + dif);
  if (dif > 13) {
    console.log('Twice the entered number= ' + n * 2);
  } else {
    console.log('Nearest division by 3=' + Math.round(n / 3));
  }
}
