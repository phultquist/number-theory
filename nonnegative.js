let a = 34
let b = 76

// for (i = 0; i < 10*b; i += b) {
//     let str = ''
//     for (j = 0; j < b; j++) {
//         str += ` ${i*b+j} `
//     }
//     // console.log(str)
// }

for (var i=1; i <= 20; i++)
{
    if (i % (a*b) == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}