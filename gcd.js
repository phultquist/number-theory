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

function go() {
    let n = 50;
    let errors = []
    for (i = 1; i < n; i++) {
        for (j = 1; j < n; j++) {
            let d = gcd(i, j);
            let e = i / d;
            let gcdej = gcd(e, j);
            if (gcdej != 1) {
                // console.log('a='+i, 'b='+j, 'd='+d, 'gcd(e,b)='+gcdej);
                errors.push({
                    a: i,
                    b: j,
                    d: d,
                    'gcd(e,b)': gcdej
                })
            }
        }
    }
    console.table(errors)
}

console.log(gcd(21,1836));