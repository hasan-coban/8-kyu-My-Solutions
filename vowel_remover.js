/*Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO" */

//My S:
function shortcut(string){
  const vowels = ['a', 'e','i','o','u',]
  return string.split('').filter(el => !vowels.includes(el)).join('')
}
//S2:
function shortcut(string){
  return string.replace(/[aeiou]/g,'')
}
