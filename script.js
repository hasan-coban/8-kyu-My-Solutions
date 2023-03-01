Description:https://www.codewars.com/kata/54edbc7200b811e956000556/solutions/javascript
//CW1
  function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let num=0;
  for (let el of arrayOfSheep){
    if(el===true) num++;
  } 
  return num;
}
countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  true,  true,  true ,
])
//S2:
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}
