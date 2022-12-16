function onePlusAvg(x, y) {
    return 1 + (x + y)/2;
}

const hello = () => {
    console.log("Hello World!!!!");
}

let a = 1, b = 2, c = 3;

hello();
console.log('One plus average of a and b is ', onePlusAvg(a, b));
console.log('One plus average of c and b is ', onePlusAvg(c, b));
console.log('One plus average of a and c is ', onePlusAvg(a, c));
