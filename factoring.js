function factors(n) {
    var num_factors = [], i;

    for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
        if (n % i === 0) {
            num_factors.push(i);
            if (n / i !== i)
                num_factors.push(n / i);
        }
    num_factors.sort(function (x, y) {
        return x - y;
    });  // numeric sort
    return num_factors;
}

function primeFactorsTo(max)
{
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}

// let primes = primeFactorsTo(1000);
// for (n of primes) {
//     let i = n * n
// // for (i = 0; i < 100; i++){
//     if (factors(i).length == 3){
//         console.log(factors(i))
//     }
// }

for (i = 1; i< 45; i++) {
    let j = Math.pow(2,i)
    let f = factors(j);
    let sum = f.reduce((a,b) => (a+b), 0)
    console.log(sum, f);
}