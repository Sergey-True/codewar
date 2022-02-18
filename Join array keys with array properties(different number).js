let getData = function (names, properties) {
    let array = [];
    for (let i = 0; i < properties.length; i++) {
        let result = {};
        for (let j = 0; j < names.length && properties[i][j]; j++) {
            result[names[j]] = properties[i][j];
        }
            array.push(result);
    }
    return array;
}