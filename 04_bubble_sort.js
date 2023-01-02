const arr = [2, 5, 10, 23, 1, 0, 43, 42, 12, 6, 7, 4]
let count = 0

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
            count++
        }
    }
    return array
}

console.log('length: ', arr.length);
console.log(bubbleSort(arr)); // O(n*n)
console.log('count: ', count);
