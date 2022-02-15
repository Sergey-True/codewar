function findUniq(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        let counter = 0;
        for (let j = 0; j <= arr.length - 1; j++) {
            if (arr[i] === arr[j]) {
                counter++;
            }
        }
        if (counter === 1) {
            return arr[i];
        }
    }
}