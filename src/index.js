
// You should implement your task here.

module.exports = function towelSort (matrix) {
    const resMap = [];
    if (matrix != undefined)  {
          matrix.forEach((arr, index) => {
        if (index % 2 == 0) {
            resMap.push(...arr)
        } else {
            resMap.push(...arr.reverse())
        }
    });
}
  return resMap;
}
