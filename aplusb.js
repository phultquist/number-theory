for (i = 0 ; i < 50; i++) {
    for (j = 0; j < 50; j++) {
        let apb = i + j;
        if ((2*i*j) % apb == 0) console.log(i, j, 2*i*j, apb);
        // console.log(Math.floor(abb));
    }
}