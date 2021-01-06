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
for (i = 0; i < 100; i++) {
    for (j = 0; j < 100; j++) {
        console.log(gcd(i,j), gcd(pow(i,2), pow(j,2)));
    }
}