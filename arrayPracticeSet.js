// Question No. 1

// let num = [1, 2, 3, 4, 5, 6, 7, 83]

// let a = prompt("Enter a number")

// a = Number.parseInt(a)

// num.push(a)

// console.log(num)

// Question No. 2

let num = [1, 2, 10, 100, 3, 4, 5, 6, 7, 83]

// while (true) {
//     let a = prompt("Enter a number")
//     a = Number.parseInt(a)
//     if(a == 0) {
//         break
//     }
//     num.push(a)
// }

// console.log(num)

// Question No. 3

// let arr = num.filter((value) => {
//     return value%10 == 0
// })

// console.log(arr)

// Question No. 4

// let arr3 = num.map((value) => {
//     return value*value
// })

// console.log(arr3)

// Question No. 5

let arr4 = [1,2,3,4,5,6,7,8]

let arr5 = arr4.reduce((a, b) => {
    return a * b
})

console.log(arr5)