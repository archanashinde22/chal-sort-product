const sortProuct = (numArr) => {
  let newArr = [];
  let arrToReturn = [];
  // new array holds prodcut * index
  for (i = 0; i < numArr.length; i++) {
    newArr[i] = numArr[i] * (i + 1);
  }
  //sorting new array 
  newArr.sort((a, b) => a - b);
  
  newArr.forEach((n) => {
    for (let i = 0; i < numArr.length; i++) {
      if (n === numArr[i] * (i + 1)) {
        arrToReturn.push(numArr[i]);
      }
    }
  });

  return console.log(arrToReturn);
};
sortProuct([23, 2, 3, 4, 5]);
