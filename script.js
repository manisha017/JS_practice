console.log('Hello');
//var updated, redeclared

//var, let, const
// var a = 'Hi';
// var a = 'Hello';
// var b = 9;
// console.log(a);
// console.log(a);
// console.log(b);



var ab = 'scope';
console.log(ab);
console.log(window.ab);

     

//let
//cant be reclared, can be updated
  
let c = 'Hello World';
c = 'init';
console.log(c);
console.log(window.c);  //undefined


//const
//cant redeclare, cant update


const k = 'variable';
const l = 'declare';
console.log(k);
console.log(window.k); //undefined





//arrays
var arr = ['a','b','c'];
console.log(arr);

console.log(arr[0]);
console.log(arr[1]);

arr.push('3');
console.log(arr);



//objects
var obj ={
    name : 'Sai',
    age : '20',
    'full name' : 'Kumar'
}

console.log(obj);
console.log(obj.name);

console.log(obj['name']);
// console.log(obj.full name);

console.log(obj['full name']);




//spread Operator   ...
//1.expand the string
let abc = 'Hello world'
console.log(abc);

let d = [...abc]
console.log(d);



//2. combine the array
let array1 = ['a','b']
let array2 = ['c','d']
let array3 = [...array1,...array2]
console.log(array3)



//3. added values to the array
let originalArray = ['y','h'];
originalArray.push('u');
console.log(originalArray);

let finalArray = [...originalArray, 'o'];
console.log(finalArray);


//4. combine the objects
let object1 = {
    name:'Hema',
    age:'25',
    rollNumber : '2'
}
let object2 ={
    name:'Hema',
    age:'14',
    height : '50'
}

let object3 ={...object1,...object2};
console.log(object3)


//5.Shallow Copy
var arr11 = ['x','y','z']
arr11.push(20)
console.log(arr11)

var arr12 = arr11
arr12.push(13)
console.log(arr12); //[x,y,z,20,13]
console.log(arr11); //[x,y,z,20,13]



//how to prevent this
var finalArr = ['a','b','c']
var finalArr2 = [...finalArr]
finalArr2.push(1);
console.log(finalArr);
console.log(finalArr2);




//Array destructuring
var finArr = ['a','b']
// var f1 = finArr[0];
// var f2 = finArr[1];

var [f1,f2] = finArr
console.log(f1);
console.log(f2);


//object destructuring
let obj2 ={
    name:'Hema',
    age:'14',
    height : '50'
}

// let obv = obj2.name;
// let obv2 = obj2.age

let {name,age} = obj2
// console.log(name);
console.log(age);
