export default function isBalance(input) {

    let result = input;
    let arr = [];

    for (let i = 0; i < result.length; i++) {
        arr.push(result[i]);

    }
    if (arr.length % 2 == 0)
        console.log('isbalance');

    else
        console.log('not balance');
};