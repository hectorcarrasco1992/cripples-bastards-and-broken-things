function changeLast(arr, value) {
  
    
    arr.pop(value);
  }
  


function addMeToEnd(arr) {
  arr.push('Colin')
}

function addMeToStart(arr) {
  arr.unshift('Colin')
}

function changeAllValuesTo(arr, value) {
  const i = 0;

  while (i < arr.length) {
    arr[i] = value;

    i++;
  }
}

function oddOrEven(arr) {
  
  for(let i = 0; i < arr.length ; i++){
  
    if (arr[i] % 2 === 1) {
      return 'odd'
    } else {
      return 'even'
    }
  }
  
}

function changeNextThreeToValue(start, arr, value) {
  let i = start;

  while (i <= start + 3) {
    arr[i] = value;

    i++;
  }
}

module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}