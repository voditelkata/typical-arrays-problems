
exports.min = function min(array) {
    if (!Array.isArray(array) || !array.length) {
        return 0;
    }
    let minValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minValue)
            minValue = array[i];
    }
    return minValue;
}

exports.max = function max(array) {
    if (!Array.isArray(array) || !array.length) {
        return 0;
    }
    let maxValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue)
            maxValue = array[i];
    }
    return maxValue;
}

exports.avg = function avg(array) {
    if (!Array.isArray(array) || !array.length) {
        return 0;
    }
    let  average = array.reduce((sum, current) => sum + current, 0)/array.length;
    return average;
}
