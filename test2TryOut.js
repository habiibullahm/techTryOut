// - create a function that accept single parameter. the parameter will be an array of integer
// - your function should be able to count the unique value inside the array
// - examples:
//   - `countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))` => 7
//   - `countUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6]))` => 4
//   - `countUniqueValues([]))` => 0

// function countUniqueValues(arr) {
//     let uniqueValue = []
//     for(let i=0; i<arr.length; i++) {        
//         let element = arr[i]
//         if (!uniqueValue.includes(element)){
//             uniqueValue.push(element)
//         }
//     }
//     return uniqueValue.length
// }
// console.log(countUniqueValues([1, 2, 3, 4, 4, 5, 4, 7, 7, 12, 12, 13]));



function countUniqueValues(arr) {
    let uniqueValue = []
    for(let i=0; i<arr.length; i++) {        
        let element2 = arr[i]
        let status = false
    
        for (let index = 0; index < uniqueValue.length; index++) {
            const element = uniqueValue[index];
            if(element == element2){
                status = true
                break
            }
        }
        if (!status){
            uniqueValue.push(element2)
        }
    }
    return uniqueValue.length
}
console.log(countUniqueValues([1, 2, 3, 4, 4, 5, 4, 7, 7, 12, 12, 13]));
