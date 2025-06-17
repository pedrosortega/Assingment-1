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
myEach(myMapAr, (element) => {
    console.log(element * 2);
});