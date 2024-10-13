// let value1 = ["Apple"];
// let value2 = ["Mango"];
// let value3 = ["Banana"];
// let value4 = ["Orange"];

// let arr1 = value1.concat(value2);
// console.log(arr1);

// let arr2 = value1.concat("Grapes", value4);
// console.log(arr2);


// var numbers = [10, 20, 30, 40, 50, 60];

// var index1 = numbers.indexOf(30);
// console.log(index1);

// var index2 = numbers.indexOf(40);
// console.log(index2);


// let numbers2 = [1, 7, 3, 4, 5, 6, 7, 8]
// function IsEven(element)
// {
//     return element % 2 == 0;
// }

// let evennumber = numbers2.find(IsEven);
// console.log(evennumber);


function IsEven(element)
{
    return element % 2 == 0;
}

let numbers3 = [1, 5, 6, 7];

let findindex = numbers3.findIndex(IsEven);
console.log(findindex);