function analizeArray(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    const length = array.length;

    var sum = 0;

    for(var num of array) {
        sum += num;
    }

    const average = sum / length;

    return {
        'Average': Math.floor(average),
        'Max': max,
        'Min': min,
        'Length': length,
        }
}


export default analizeArray;