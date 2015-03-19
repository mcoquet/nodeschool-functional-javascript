/*
WARNING: not my solution really. After stumbling a lot on this, decided to go look for solutions and found this one:
https://github.com/timoxley/functional-javascript-workshop/issues/84
*/

function reduce(arr, fn, initial) {
    if(!arr.length) return initial; //exit

    reduce(arr.slice(0, arr.length-1), fn, initial);

    return fn(initial, arr[arr.length-1], arr.length-1, arr);
}

module.exports = reduce;
