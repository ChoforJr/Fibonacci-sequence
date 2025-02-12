function fibs(num) {
  let array = [0, 1];
  if (num < 1) return console.log("Invalid");
  if (num === 1) return console.log(0);
  if (num === 2) return console.log(array);
  for (i = 2; i < num; i++) {
    array.push(array[i - 2] + array[i - 1]);
  }
  return console.log(array);
}
fibs(8);
function fibsRec(num) {
  if (num < 2) {
    return num;
  } else {
    return fibsRec(num - 1) + fibsRec(num - 2);
  }
}
function fibsRecArray(num) {
  let array = [0, 1];
  if (num < 1) return console.log("Invalid");
  if (num === 1) return console.log(0);
  if (num === 2) return console.log(array);
  for (i = 2; i < num; i++) {
    array.push(fibsRec(i));
  }
  return console.log(array);
}

fibsRecArray(8);
