
for (i = 1; i <90; i++) {
    console.log(i, factorial(i-1) % i)
} 


function factorial(n) {
    if (n <= 1) return 1;
    return n*factorial(n-1)
}

function factorial2(n) {
    let f = 1;
    for (i = n; i > 1; i--) {
        f *= i
    }
    return f
}