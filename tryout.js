//create a function that accept single parameter. 
//the parameter will be an array of integer
//your function should be able to count the unique value inside the array
// examples:
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) => 7
// countUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6])) => 4
// countUniqueValues([])) => 0


function countUnique(arr) {

    //Mengecheck apa aja isi dari array
    //Menyimpan arra uniq di satu wadah (bkin wadah)
    //Menghitung jumlah dalam wadah tersebut
    let UniqueValue = []
    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== arr[i+1]) {
            UniqueValue.push(arr[i])
        }
    }
    return UniqueValue.length
}

console.log(countUnique([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));