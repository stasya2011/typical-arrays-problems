exports.min = function min(array) {

    if (array === 0) {
        return 0;
    } else {
        var onlyNumberArr = array.filter((item) => typeof item === "number");
        // console.log(onlyNumberArr);
        for (let i = 0; i < onlyNumberArr.length; i++) {
            if (onlyNumberArr[i] != 0) {
                return Math.min(...onlyNumberArr);
            }
        }

    }


}

exports.max = function max(array) {

    if (array === 0) {
        return 0;
    } else {

        var onlyNumberArr = array.filter((item) => typeof item === "number");
        // console.log(onlyNumberArr);
        for (let i = 0; i < onlyNumberArr.length; i++) {
            if (onlyNumberArr[i] != 0) {
                return Math.max(...onlyNumberArr);
            }
        }
    }    
    
}

exports.avg = function avg(array) {
     var onlyNumberArr = array.reduce((el, currEl) => (el+currEl))
            return onlyNumberArr/array.length
  
}




