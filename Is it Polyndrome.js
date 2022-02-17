function isPalindrome(x) {

    x = x.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');

    for (let i = 0; i < x.length / 2; i++) {
        if (x[i] !== x[x.length - i - 1]) {
            return false;
        }
    }
    return true;
}

/*
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}*/
