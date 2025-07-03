// forEach2
Array.prototype.forEach2 = function (callback, thisValue) {
    const length = this.length; // tránh treo trình duyệt khi push random phần tử vào mảng

    for (let i = 0; i < length; i++) {
        if (i in this) {
            callback.call(thisValue, this[i], i, this);
        }
    }
}


const colors= ['red', 'green', 'blue']

colors.forEach2(function (color, index) {
    console.log(color, index); // red 0, green 1, blue 2;
    
})


// find2
Array.prototype.find2 = function(callback, thisArg) {
    let length = this.length;

    for (let i = 0; i < length; i++) {
        if (callback.call(thisArg, this[i], i, this)) {
            return this[i]
        }
    }
};

// vd
const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.find2((num) => num % 3 === 0 ));// 3


//findLast2
Array.prototype.findLast2 = function(callback, thisArg) {
    let length = this.length;

    for (let i = length - 1; i >= 0; i--) {
        if (callback.call(thisArg, this[i], i, this)) {
            return this[i];
        }
    }
};

console.log(numbers.findLast2((num) => num % 3 === 0 ));// 6

// findIndex2
Array.prototype.findIndex2 = function(callback, thisArg) {
    let length = this.length;

    for (let i = 0; i < length; i++) {
        if (callback.call(thisArg, this[i], i, this)) {
            return i;
        }
    }
    return -1;
}

console.log(numbers.findIndex2((num) => num % 3 === 0 ));// 2

// findLastIndex2
Array.prototype.findLastIndex2 = function(callback, thisArg) {
    let length = this.length;

    for (let i = length -1; i >= 0; i--) {
        if (callback.call(thisArg, this[i], i, this)) {
            return i;
        }
    }
    return -1;
}

console.log(numbers.findLastIndex2((num) => num % 3 === 0 ));// 5


// filter2
Array.prototype.filter2 = function(callback, thisArg) {
    let length = this.length;
    let result = [];

    for (let i = 0; i < length; i++) {
        if (i in this && callback.call(thisArg, this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result;
}

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(numbers2.filter2(num => num % 2 === 0));// [2, 4, 6, 8]
console.log(numbers2.filter2(num => num % 2 === 0 && num > 10));// []

// map2
Array.prototype.map2 = function(callback, thisArg) {
    let length = this.length;
    let result = new Array(length);

    for (let i = 0; i < length; i++) {
        if (i in this ) {
            result[i] = callback.call(thisArg, this[i], i, this);
        }
    }
    return result;
}

console.log(numbers2.map2(num => num * 2));// [2, 4, 6, 8, 10, 12, 14, 16]
console.log(numbers2.map2(num => num + 2));// [3, 4, 5, 6, 7, 8, 9, 10]


// some2
Array.prototype.some2 = function(callback, thisArg) {
    let length = this.length;

    if (typeof callback !== 'function') {
        console.log(`${callback} không phải một hàm`);
    }

    for (let i = 0; i < length; i++) {
        if (i in this && callback.call(thisArg, this[i], i, this)) {
            return true;
        }
    }
    return false;
}

// vd
const ages = [18, 20, 43, 34]

console.log(ages.some2(age => age >= 34));// true
console.log(ages.some2(age => age < 18));// false



// every2
Array.prototype.every2 = function(callback, thisArg) {
    let length = this.length;

    for (let i = 0; i < length; i++) {
        if (i in this && !callback.call(thisArg, this[i], i, this)) {
            return false;
        }
    }
    return true;
}

const empties = []

console.log(ages.every2(age => age >= 34));// false
console.log(ages.every2(age => age <= 43));// true
console.log(ages.every2(age => {age <= 43}));// auto false vì quên return
console.log(!!empties.length && empties.every2(empty => empty > 0));// false (vd có kiểm tra đảm bảo mang k bị rỗng)


// reduce2
// sort2
