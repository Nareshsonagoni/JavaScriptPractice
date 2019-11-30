

heartPattern(6, 7);

function heartPattern(rowRange, columnRange){
    for (let r = 0; r < rowRange; r++){
        for (let c = 0; c < columnRange; c++){
            if (( r == 0 && c % 3 != 0) || (r == 1 && c % 3 ==0) || (r - c == 2) || (r + c == 8))
                console.log('*', end = '');
            else
                console.log(end = ' ');
        }
        console.log();
    }
}