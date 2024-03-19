function selection_sort(numArray) {
    let minIdx;
    let tmp;

    for (let i = 0; i < numArray.length - 1; i++) {
        minIdx = i;
        for (let j = i + 1; j < numArray.length; j++) {
            if (numArray[minIdx] > numArray[j]) {
                minIdx = j;
            }
        }
        tmp = numArray[i];
        numArray[i] = numArray[minIdx];
        numArray[minIdx] = tmp;
    }
    console.log(numArray)
    return (numArray)
}

let n = 100;
let res = Array.from({ length: n }, () => Math.floor(Math.random()* 100) + 1);

console.log(res);
selection_sort(res)