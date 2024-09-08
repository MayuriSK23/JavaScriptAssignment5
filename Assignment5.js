/* Q.1 Write a program that takes an array as input 
from the user and find out the product of the elements */

function ArrProduct() {
    let arr = [1, 4, 6, 77, 12]
    let product = 1
    for (elements in arr) {
        product *= arr[elements];
    }
    return product;
}
console.log(ArrProduct())

/* Q.2 Write a program which takes an array as input from 
the user and find out the sum of the array elements. */

function arrAdd() {
    let arr = [1, 4, 6, 77, 12]
    let addition = 0
    for (elements in arr) {
        addition += arr[elements];
    }
    return addition;
}
console.log(arrAdd())

/* Q.3 You are given an array A containing N integer elements and an integer K, 
and your task is to return the count of occurrences of K in array A. */

function findCount() {
    let K = 4
    let count = 0
    let A = [2, 3, 4, 5, 4]
    for (num in A) {
        let iterate = A[num]
        if (iterate == K) {
            count++;
        }
    }
    return count;
}
console.log(findCount());

/* Q.4 You are given an array A containing N integer elements, and your task 
is to return an array B ((having a size equal to 22)), where B[0] contains 
the sum of all even elements of array A and B[1] has the sum of all odd elements 
of the array A. */

function EvenOddSum() {
    let arr = [1, 2, 4, 6, 3, 5, 8]
    let sum = 0
    let sum2 = 0
    for (nums in arr) {
        let store = arr[nums]
        if (store % 2 == 0) {
            sum = sum + arr[nums]
        }
        else if (store % 2 !== 0) {
            sum2 = sum2 + arr[nums]
        }
    }
    return [sum, sum2]
}
console.log(EvenOddSum());

/* Q.5 Write a program which takes an array as input from the user and a number. 
Check whether the number is present or not. */

function findNum() {
    let arr = [22, 3, 15, 4, 5, 6, 31];
    let num = 31;
    let found = false;
    for (let item of arr) {
        if (item === num) {
            console.log("YES");
            found = true;
            break;
        }
    }
    if (!found) {
        console.log("NO");
    }
}

findNum();

/* Q.6 You are given an array A containing the age of persons in your locality, 
and your task is to find and return an array containing the age of persons that
are over 1818 (18(18 included)). */

function higherAge() {

    let arr = [23, 13, 45, 7, 55, 65, 9, 22, 18, 16]
    let dataFilter = arr.filter((item) => item >= 18)
    return dataFilter
}
console.log(higherAge());

/* Q.7 You are provided an array of integers and you have to increment all 
array elements by 1 and then print whole array. */

function incrementByOne(arr) {
    let mapping = arr.map((element) => (element + 1))
    return mapping;
}
console.log(incrementByOne([3, 88, 43, 12, 4, 99]));

/* Q.8 You are given an array A containing the maths marks of students in 
your class, and your task is to determine if all the students pass in your 
class or not. A student is declared pass if his maths marks are greater than 
or equal to 3232. If all the students pass in your class, return "YES" 
(without quotes); otherwise, return "NO" (without quotes). */

function passOrFail(arr) {
    let allPass = arr.filter((marks) => marks < 32)
    if (allPass.length >= 1) {
        console.log("NO")

    }
    else {
        console.log("YES")
    }
    return
}
passOrFail([33, 56, 88, 10, 21, 32]);

/* Q.9 Prepbuddy is very tasteful of clothes. He has N numbers of 
shirts hanging in the hanger in his wardrobe. Prepbuddy likes to 
wear different colored clothes. So, whenever he see there are two 
or more shirts with the same color, he removes all the shirt 
of that color from his wardrobe. Now, he wants to know how many M 
unique color shirts are left in the wardrobe. Prepbuddy wants you to find M. */

function uniqueColor() {
    let arr = [2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 3];
    let uniqueCount = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentCount = arr[i];
        let isFound = false;

        for (let j = 0; j < i; j++) {
            if (arr[j] === currentCount) {
                isFound = true;
                break;
            }
        }
        if (!isFound) {
            let count = 0;
            for (let k = 0; k < arr.length; k++) {
                if (arr[k] === currentCount) {
                    count++;
                }
            }
            if (count === 1) {
                uniqueCount++;
            }
        }
    }
    return uniqueCount;
}
console.log(uniqueColor());

/* Q.10 The problem statement is simple- given N elements, find the 
minimum and maximum numbers among those elements. */

function minMax(arr) {
    let max = arr[0]
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    console.log('Max:', max);
    console.log('Min:', min);
}
minMax([100, 2, 5, 77, 9, 75])
