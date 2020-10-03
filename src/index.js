exports.min = function min(array) {

    if (!array || array.length == 0) {
        array = 0;
        return array;
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

    if (!array || array.length == 0) {
        array = 0;
        return array;
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
    if (!array || array.length == 0) {
        array = 0;
        return array;
    } else {
        var onlyNumberArr = array.reduce((el, currEl) => (el + currEl))
        return onlyNumberArr / array.length;
    }

}
