const filepath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(filepath).toString().split('\n');

function main() {

    let numInput = input[0].split(' ').map(Number);
    let [n, s] = numInput;
    let numArray = input[1].trim().split(' ').map(Number);

    let psum = new Array(numArray.length);
    let [left, right, sum] = [0, 1, 0];
    let res = Infinity;

    while (left < n) {
        while (sum < s && right < n) {
            sum += numArray[right];
            right++;
        }
        if (sum >= s)
            res = Math.min(res, right - left);
        sum -= numArray[left];
        left++;
    }
    if (res === Infinity)
        res = 0;
    console.log(res);
}
main()