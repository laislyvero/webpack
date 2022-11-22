function chunk(array, size) {
    const chunked = [];
    for (let i = 0; i < array.length; i++) {
      const data = chunked[chunked.length - 1];
      if (!data || data.length === size) {
        chunked.push([array[i]]);
      } else {
        data.push(array[i]);
      }
    }
    return chunked;
}
console.log(chunk([1,2,3,4,5,6],3))

//different approach
function chunk(array, size) {
    const chunked = []
    let index = 0
    while(index < array.length) {
        chunked.push(array.slice(index, index +size))
        index+=size
    }
    return chunked
}
console.log(chunk([1,2,3,4],2))