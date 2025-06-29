const input = `8
acciojob
4 5 6 7 0 2 1 3`;

function ShufflingString(input) {
    const lines = input.trim().split('\n');
    const n = parseInt(lines[0]);
    const str = lines[1];
    const indices = lines[2].split(' ').map(Number);
    let result = Array(n);

    for (let i = 0; i < n; i++){
        result[indices[i]] = str[i];
    }
    console.log(result.join(''));
}
ShufflingString(input);