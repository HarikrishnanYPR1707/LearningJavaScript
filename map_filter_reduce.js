let arr = [45, 23, 21]

// Array map method

// arr.map((value)=>{
//     console.log(value)
// })

// let a = arr.map((value, index, array) => {
//     console.log(value, index, array)
//     return value + index
// })

// console.log(a)

// Array filter method

let arr2 = [45, 23, 21, 0, 3, 5]

// let b = arr2.filter((value) => {
//     return value<10
// })

// console.log(b)

// console.log(arr.filter((a) => {
//     return a>=3
// }))

// Array Reduce method

let arr3 = [1, 2, 3, 5, 2, 1]

const reduce_func = (h1, h2) => {
    return h1 + h2
}

let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)