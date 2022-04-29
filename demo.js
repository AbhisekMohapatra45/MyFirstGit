var arr = [2, 4, 6, 8].every((elements) => {
    return elements % 2 == 0;
    var newFunction = ((Number) => {
        if (Number % 2 === 0) {
            console.log('IsEven')
            return
        }
        else {
            console.log('IsOdd')
        }
    })

    newFunction(20)
});

console.log(arr)

