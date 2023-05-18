/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/
//MY S:
function nameShuffler(str){
  const arr = str.split(' ');
  return [arr[1], arr[0]].join(' ')
}
//2nd
function nameSuffle(str){
  return str.split(' ').reverse().join(' ')
}
