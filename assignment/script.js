var arrays = [[1, 2, 3], [2, 3, 4], [3, 4, 5]]



function union(arrays) {
    return arrays.reduce((acc, arr) => {

        console.log(acc);
        return acc.concat(arr.filter(item => !acc.includes(item)))

        
    }, [])
}

console.log(union(arrays))