
exports.min = function min (array) {

  if (array.length == 0) {
    return 0
} else {
    var onlyNumberArr = array.filter((item) => typeof item === "number");
    // console.log(onlyNumberArr);
    for (let i = 0; i < onlyNumberArr.length; i++) {
        if (onlyNumberArr[i] != 0) {
            return Math.min(...onlyNumberArr);

        }
    }

}
  
  return 0;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}



// function max(...theArgs) {
//   if (theArgs == 0 || theArgs == null) {
//       return 0
//   } else {
//       var onlyNumberArr = theArgs.filter((item) => typeof item === "number");
//       // console.log(onlyNumberArr);
//       for (let i = 0; i < onlyNumberArr.length; i++) {
//           if (onlyNumberArr[i] != 0) {
//               return Math.max(...onlyNumberArr);

//           }
//       }

//   }
// }

