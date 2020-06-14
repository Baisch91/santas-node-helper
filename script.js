const fs = require('fs');

fs.readFile('./snh_1.txt', (err, data) => {
    console.time('funchallenge');
    if (err) {
        console.log('ERROR!!!');
    }
    const results = data.toString();

    let counter = 0;
    let index = 0;
    let answerTwo = false;

    for (let i = 0; i < results.length; i++) {
        if (results[i] === '(') {
            counter = counter + 1;
        }
        else if (results[i] === ')') {
            counter = counter - 1;
        }

        if (counter === -1 && answerTwo === false) {
            index = i;
            answerTwo = true;
        }
    }

    console.log(counter);
    console.log(index);
    console.timeEnd('funchallenge');
});

