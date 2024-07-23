console.log('Hello');
//var updated, redeclared

//var, let, const
// var a = 'Hi';
// var a = 'Hello';
// var b = 9;
// console.log(a);
// console.log(a);
// console.log(b);



// var ab = 'scope';
// console.log(ab);
// console.log(window.ab);

     

// //let
// //cant be reclared, can be updated
  
// let c = 'Hello World';
// c = 'init';
// console.log(c);
// console.log(window.c);  //undefined


// //const
// //cant redeclare, cant update


// const k = 'variable';
// const l = 'declare';
// console.log(k);
// console.log(window.k); //undefined





// //arrays
// var arr = ['a','b','c'];
// console.log(arr);

// console.log(arr[0]);
// console.log(arr[1]);

// arr.push('3');
// console.log(arr);



// //objects
// var obj ={
//     name : 'Sai',
//     age : '20',
//     'full name' : 'Kumar'
// }

// console.log(obj);
// console.log(obj.name);

// console.log(obj['name']);
// // console.log(obj.full name);

// console.log(obj['full name']);




// //spread Operator   ...
// //1.expand the string
// let abc = 'Hello world'
// console.log(abc);

// let d = [...abc]
// console.log(d);



// //2. combine the array
// let array1 = ['a','b']
// let array2 = ['c','d']
// let array3 = [...array1,...array2]
// console.log(array3)



// //3. added values to the array
// let originalArray = ['y','h'];
// originalArray.push('u');
// console.log(originalArray);

// let finalArray = [...originalArray, 'o'];
// console.log(finalArray);


// //4. combine the objects
// let object1 = {
//     name:'Hema',
//     age:'25',
//     rollNumber : '2'
// }
// let object2 ={
//     name:'Hema',
//     age:'14',
//     height : '50'
// }

// let object3 ={...object1,...object2};
// console.log(object3)


// //5.Shallow Copy
// var arr11 = ['x','y','z']
// arr11.push(20)
// console.log(arr11)

// var arr12 = arr11
// arr12.push(13)
// console.log(arr12); //[x,y,z,20,13]
// console.log(arr11); //[x,y,z,20,13]



// //how to prevent this
// var finalArr = ['a','b','c']
// var finalArr2 = [...finalArr]
// finalArr2.push(1);
// console.log(finalArr);
// console.log(finalArr2);




// //Array destructuring
// var finArr = ['a','b']
// // var f1 = finArr[0];
// // var f2 = finArr[1];

// var [f1,f2] = finArr
// console.log(f1);
// console.log(f2);


// //object destructuring
// let obj2 ={
//     name:'Hema',
//     age:'14',
//     height : '50'
// }

// // let obv = obj2.name;
// // let obv2 = obj2.age

// let {name,age} = obj2
// // console.log(name);
// console.log(age);




// let object ={
//     name:'Hema',
//     age:'14',
//     height : '50'
// }
// console.log(Object.keys(object));
// console.log(Object.values(object));


// let ans = JSON.stringify(object)
// console.log(ans);

// console.log(JSON.parse(ans));




// let element = document.querySelector('div')
// console.log(element)
// element.style.color =  "red"

// let ele = document.querySelectorAll('div')
// console.log(ele)

// Array.from(ele).map( item=> {
//     item.style.color =  "green"
        
// });

// // Array.from(element).map(functon(item){
// //     return item.style.color =  "green"
// // })


// Array.from(ele).forEach(element => {
//     element.style.color =  "green"
    
// });


// function getName(){
//     return 'name'
// }
// //normal function


// getName = () =>{
//     return 'name'
// }
// //Arrow function with return


// getName = () => 'name'
// //Arrow function without return




// let a  = window.setTimeout(() => {
//     console.log('hello')
// }, 100);
// clearTimeout(a)




// let b = window.setInterval(() => {
//     console.log('hello')
// }, 100);

// clearInterval(b)





//  var name1 = 'Sales'
//  var name2 = 'force'
//  console.log(name1 +name2)


// var str = 'my name' +  name1 + '  and  ' + name2
// console.log(str)


// //string interpolation
// var str1= `my name is ${name1} and my hometown is ${name2}`
// console.log(str1);




//string method
//includes() method---determines whether a string contains the characters of the specified string
let str = 'HEllo everyone, hope you are doing good'
let check =str.includes('hello');
console.log(check);



//str.includes('you') //boolean output


//indexOf --return the position of the first occurence of a specified value in a string
let index = str.indexOf('doing')
console.log(index);


//startsWith() --determines whether a string begins with the characters of a specified string
console.log(str.startsWith('Hello'))



//slice() --method extracts part of string and returns the extracted parts in a new string
let newStr = str.slice(0,10)
console.log(newStr)

//toLowerCase
console.log(str.toLowerCase())


//toLowerCase
console.log(str.toUpperCase())


//trim()--remove whitespaces from the both sides of string
let ex = '                   salesforce                l                  '
console.log(ex.trim()) 