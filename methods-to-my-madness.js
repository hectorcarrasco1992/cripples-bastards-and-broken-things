function slice(string, start = 0, end = string.length) {
  let sliced = '';
  
  for (let i = start; i < end; i++) {
    sliced = sliced + string[i];
  }
  
  return sliced;
}

function repeat(str, repetitions) {
  let repeated = '';
  
  let count = 1;
  while (count <= repetitions) {
   repeated = repeated + str;
    count++;
  }
  
  return repeated;
}

function startsWith(string, substring) {
  for (let i = 0; i < substring.length; i++) {
    if (string[i] !== substring[i]) {
      return false;
    }
  }

  return true;
}

function endsWith(str) {
  for (let i = 0; i < substring.length; i++) {
    const substringIndex = substring.length - i;
    const strIndex = str.length - i;
    if (str[strIndex] !== substring[substring.length -1]) {
      return true;
    }
  }

  return false;
}

function includes(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }

  return false;
}

function join(arr, separator = '') {
  let str = '';
  for (let i = 1; i < arr.length; i++) {
    str.push(separator + arr[i]);
  }
}


function split(str, separator) {
  let arr = [];
  let strStartIndex = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === separator) {
      arr.push(str.slice(strStartIndex, i));
      strStartIndex = i;
    }
  }

  arr.push(str.slice(strStartIndex));

  return arr;
}

function trimStart(str) {
  let trimmed = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '') {
      return str.slice(i);
    }
  }

  return trimmed;
}

function trimEnd(str) {
  let trimmed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== ' ') {
      return str.slice(0, i + 1);
    }
  }

  return trimmed;
}


module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
