module.exports = function check(str, bracketsConfig) {
  let arr = str;
  let f = 0;
  if (!Array.isArray(str)) {
    arr = arr.split('');
  }

  for (let i = 0; i < bracketsConfig.length; i++ ) {
    arr.forEach((el, index) => {
      if (bracketsConfig[i][0] === el && bracketsConfig[i][1] === arr[index + 1]) {
        arr.splice(index, 2);
        f = 1;
      }
    });
  }

  console.log(arr.length);
  if (arr.length > 1 && f === 1) {
    check(arr, bracketsConfig);
  }
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
  
}
