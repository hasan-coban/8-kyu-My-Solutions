/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

FUNDAMENTALS
Suggest kata description edits
*/
//My S:
const reverseSeq = n => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.reverse();
};
//2nd
const reverseSeq = n => {
let arr = [];
  for (let i=n; i>0; i--) {
    arr.push(i);
    } return arr;
};
