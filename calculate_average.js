/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/
//MY S:
function findAverage(array) {
  return array.length == 0 ? 0 : array.reduce((acc, el) => acc + el, 0) / array.length;
}
