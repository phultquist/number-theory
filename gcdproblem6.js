function gcd(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
        return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}
let pow = Math.pow
let examples = []
let onlyOdds = true
let n = 20
for (i = 0; i < n; i ++) {
    if (onlyOdds && i % 2 == 0) continue;
    for (j = 0; j < n; j++) {
        if (onlyOdds && j % 2 == 0) continue;

        let g = gcd(i, j);
        let i2 = pow(i, 2),
            j2 = pow(j, 2)
        
        // console.log(g);
        if (g){
        // if (g == 1) {
            examples.push({
                i, j,
                'i+j': i+j,
                'i^2+j^2':i2+j2,
                'gcd(i+j, i^2+j^2)': gcd(i + j, i2 + j2),
            })
        }
    }
}
// console.log(examples);
console.table(examples)