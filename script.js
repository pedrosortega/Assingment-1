function myEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}
let ar = [1, 2, 3, 4, 5];
myEach(ar, (element) => {
    console.log(element);
});

console.log('----------------------------------------------');

function myMap(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}
let myMapAr = [1, 2, 3, 4, 5];
myMap(myMapAr, (element) => {
    console.log(element * 2);
});

console.log('----------------------------------------------');

function myFilter(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}
let filterArr = [1, 2, 3, 4, 5];
let result = [];
myFilter(filterArr, (element) => {
    if (element % 2 === 0) {
        result.push(element);
    }
});

console.log(result);


console.log('----------------------------------------------');

function mySome(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            return true;
        }
    }
    return false;
}

let mySomeArr = [1, 2, 3, 4, 5];



mySome(mySomeArr, (element) => {
    if (element % 2 === 0) {
        console.log(true);
        return true;
    }
    return false;
});
