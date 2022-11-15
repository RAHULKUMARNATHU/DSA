// export{}
// Q>>1,4,5,7:- Access an Array's Contents Using Bracket Notation
// let arr: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);
//pushing and accessing an element(push is used to insert an element after last index)
// arr.push(10);
// console.log("pushing and accessing",arr);
// console.log(arr[5]);
// //pop() is used to remove the last element only
// arr.pop();
// console.log("remove the last element",arr);
// //shift() is used to remove the first element only
// arr.shift();
// console.log("After Shift ",arr);
// //unshift() is used to insert an element from the starting index
// arr.unshift(1);
// console.log("After UnShift ",arr);
// //delete is used to delete an element index wise
// // Using delete leaves undefined holes in the array.
// // Use pop() or shift() instead
// delete arr[0];
// console.log("Delete",arr);
// //slice() gives us some specified portion of the array(it doesn't affect the original array)
// console.log("Slicing" + arr.slice(0, 4)); //it excludes the 4 index
// console.log("After slice the original array remains same " + arr);
// console.log("And we can access any index " + arr[1]);
// //splice() is used to delete elements of array from the given range and is also used to insert an element at any specified index(it affects the original array)
// //a:-Inserting an element
// arr.splice(0, 0, 2); //Syntax arr.splice(index , delete items , new element)
// console.log(arr);
// //b:-Deleting a range of elements
// arr.splice(0, 3); //syntax:- splice(start index , delete 3 items);
// console.log("Delete using splice", arr);
// console.log("modified Index:",arr[1]); //now if we try to access index 1 , it is modified
// // inserting an element after deleting
// arr.splice(1 ,2,11);  //syntax:-splice(start index , delete 1 item , insert new element at the deleted index)
// console.log("Deleting a range " + arr);
//Q>>2:- Use an Array to Store a Collection of Data
// let arr2 : (Number[] | string | boolean | object) = [
//     1,2,3,4,
//     [1,2,3,4,5],
//     "Vivek",
//     true,
//     {
//        name:"vivek",
//        roll:61,
//        gender:"male",
//        isLoggedIn:true
//     }
//  ]
//  console.log("Use an Array to Store a Collection of Data")
//  console.log(arr2);
//  //Q>>:-4 Multi-Dimensional Array
//  // Here, salary array works like a multidimensional array. This notations are known as array literals.
//  console.log("!!!!!!!!!!!!! multi-dimensional array !!!!!!!!!!!!!");
//  var salary = [
//      ["ABC", 24, 18000],
//      ["EFG", 30, 30000],
//      ["IJK", 28, 41000],
//      ["EFG", 31, 28000],
//   ];
//   console.log(salary);
//   console.log("Accessing the 1st index");
//   console.log(salary[1]);
//   console.log("accessing the 0th index of the 1st index :");
//   console.log(salary[1][0]);
//   //iteration over multi-dimensional array
//   console.log("!!!!!!!!!!!!!!!!!iteration over multi-dimensional array!!!!!!!!!!!!!!!!")
//   console.log("Length of outer array :" + salary.length)
//   for(let i=0;i<salary.length;i++){
//     console.log("Length of inner array :"+ salary[i].length);
//     for(let j=0;j<salary[i].length;j++){
//         console.log(salary[i][j]);
//     }
//   }
//6. remove any number of consecutive elements from anywhere in an array
var sampleArr = [10, 10, 20, 20, 30, 40, 50, 60, 60];
function removeConsecutive(newArray) {
    var resultArray = [];
    resultArray.push(newArray[0]);
    for (var i = 0; i < newArray.length - 1; i++) {
        if (newArray[i] != newArray[i + 1]) {
            resultArray.push(newArray[i + 1]);
        }
    }
    console.log(resultArray);
}
removeConsecutive(sampleArr);
// const arr :number [] = [1,2,1,2,2,3,5,3,3]
// const removeConsecutive = (): number[] =>{
//     for(let i =0 ; i<arr.length ; i++){
//         for(let j= i+1 ; j < arr.length ; j++ ){
//             if(arr[i] == arr[j]){
//               arr.pop()  
//             }
//         }
//     }
//     return arr;
// }
// //Q>>6:- remove any number of consecutive elements from anywhere in an array
//   console.log("!!!!!!!!!!!removing consecutive elements!!!!!!!!!!")
//   let arr3=[1,2,3,4,5,6,7,8];
//   arr3.splice(0,4);
//   console.log(arr3);
//   console.log("!!!!!!!!!!!removing consecutive duplicate elements!!!!!!!!!!");
//   let Arr = [1,1,1,3,2,2,4,4,5,6,6,6,7,7,8];
//   // let remove = [...new Set(Arr)];
//   // console.log(remove);
//   //Q>>8:- Copy Array Items Using slice()
//   console.log("Copy Array Items Using slice()");
//   let name : string[] = ["vivek" , "rahul" , "deepak", "ranjeet" , "pratap"];
//   let person = name.slice(0,3);
//   console.log(name);
//   console.log(person);
//   //Q>>9:-Copy an Array with the Spread Operator
//   console.log("Copy an Array with the Spread Operator");
//   let name1: string[] = ["vivek" , "rahul" , "deepak", "ranjeet" , "pratap"];
//   name1.push("abhishek");
//   let copy = [...name1];
//   console.log(name1);
//   console.log(copy);
//   //Q>>10:- Combine Arrays with the Spread Operator
// console.log(" Combine Arrays with the Spread Operator")
// const my = ['my', 'name'];
// const intro = ['is', 'vivek'];
// // Method a: Concat
// const combined1 = my.concat(intro);
// console.log(combined1)
// // Method b: Spread
// const combined2 = [...my, ...intro];
// console.log(combined2);
// console.log(...combined2);
// //Q>>11:- Check For The Presence of an Element With indexOf()
// console.log("Check For The Presence of an Element With indexOf()");
// function check(arr:(Number | string)[] , elem:string):boolean{
//     if(arr.indexOf(elem)!== -1){
//         return true;
//     }
//     return false;
// }
// let arr5 : string[] = ["apple" , "mango" , "papaya" , "banana" ,"lichi"];
// let result = check(arr5 , "flower");
// console.log(result);
// let cal = arr5;
// //another method
// // console.log(cal.includes("apple"));
// //checking for the presence of a character in a normal string
//  let arr6= 'vivek raj';
//  let char = 'e';
// //  console.log(arr6.includes(char))
//   console.log("*****************+++++++++END OF ARRAY+++++++++++*******************");
//   console.log("+++++++++++++++++****** OBJECT *******+++++++++++++++++");
// // Q>>13:-  Add Key-Value Pairs to JavaScript Objects using object.assign
// console.log("Add Key-Value Pairs to JavaScript Objects using object.assign");
// let obj = {
//     "key1":"value1",
//     "key2":"value2",
//     "key3":"value3",
//     "key4":"value4"
// }
// // Object.assign(obj , {"key5":"value5"});
// console.log(obj);
// //Q>>14:- Access Property Names with Bracket Notation
// console.log(obj["key1"]) ;
// // implementing using function
// function access(key){
// return key;
// }
// type schema ={
//   "name":string | undefined
//   "age":number
//   "isLoggedIn":boolean
// }
// let obj1 :schema ={
// "name":"vivek",
// "age":23,
// "isLoggedIn":true
// }
// let data = console.log(access(obj1["name"]));
// let data2 = console.log(access(obj1.name));
// //Q>>15:-Use the delete Keyword to Remove Object Properties
// console.log(delete (obj1.name));  // OR console.log(delete obj["name"]);
// console.log(obj1.name); // showing undefined because only value is deleted but it's key is still there which is now undefined
// // Q>>16:-Check if an Object has a Property
// console.log(obj1.hasOwnProperty("age"));
// console.log(obj1.hasOwnProperty("date"));
// // Q>>17:-Iterate Through the Keys of an Object with a for...in Statement
// let obj2 = {
//   "name":"rahul",
//   "roll":21,
//   "age":22,
//   "isLoggedIn":true
// }
// console.log("!!!!!!!!!!! User Details !!!!!!!!!!!!1")
// for(let user in obj2){
// console.log(obj2[user])
// }
// //iteration over nested object
// console.log("nested iteration")
// let obj3 = {
//   "user1":{"name":"vivek" , "age":23 , "mobile":{"no1":111111 , "no2":22222222}},
//   "user2":{"name":"Ranjeet" , "age":23},
//   "user3":{"name":"pratap" , "age":20}
// }
// console.log(obj3);
// console.log("--------------------------------------------")
// for(let person in obj3){
//  console.log(obj3[person]);
// }
// console.log("__________________________________________");
// console.log(obj3["user1"]["mobile"])  //OR  console.log(obj3.user1.mobile);
// //Q>>18:- Generate an Array of All Object Keys with Object.keys()
// console.log("-----------!!!Printing Keys!!!------------")
// let keys = Object.keys(obj3);
// console.log(keys);
// //Q>>19:- Modify an Array Stored in an Object
// function modify(obj){
//   obj.client1.push("raj");
//   obj.client2.unshift("kumar");
//   obj.client3.splice(1 , 0 ,"raj")
// }
// let arrObj = {
//   "client1":["vivek" , 11111],
//   "client2":["rahul" , 33456],
//   "client3":["pratap" , 53456]
// }
// let send = modify(arrObj);
// console.log(arrObj);
// //Q>>20:- Use typeof to Check the Type of a Variable
// typeof 0;  //'number'
// typeof +0;  //'number'
// typeof -0;  //'number'
// typeof Math.sqrt(2);  //'number'
// typeof Infinity;  //'number'
// typeof NaN;  //'number', even if it is Not a Number
// typeof Number('100');  //'number', After successfully coerced to number
// typeof Number('freeCodeCamp');  //'number', despite it can not be coerced to a number
// typeof true;  //'boolean'
// typeof false;  //'boolean'
// typeof Boolean(0);  //'boolean'
// typeof 12n;  //'bigint'
// typeof '';  //'string'
// typeof 'freeCodeCamp';  //'string'
// typeof `freeCodeCamp is awesome`;  //'string'
// typeof '100';  //'string'
// typeof String(100); //'string'
// typeof Symbol();  //'symbol'
// typeof Symbol('freeCodeCamp');  //'symbol'
// typeof {blog: 'freeCodeCamp', author: 'Tapas A'};  //'object';
// typeof ['This', 'is', 101]; //'object'
// typeof new Date();  //'object'
// typeof Array(4);  //'object'
// typeof new Boolean(true);  //'object';
// typeof new Number(101);  //'object';
// typeof new String('freeCodeCamp');  //'object';
// typeof new Object;  //'object'
// typeof alert;  //'function'
// typeof function () {}; //'function'
// typeof (() => {});  //'function' - an arrow function so, parenthesis is required
// typeof Math.sqrt;  //'function'
// let a ,b;
// typeof a;  //'undefined'
// typeof b;  //'undefined'
// typeof undefined;  //'undefined'
// typeof null;  //'object'
// // 21. Catch Mixed Usage of Single and Double Quotes - escape
// console.log('My Name Is "Vivek Raj" And I Am From "Xyz" ');
// console.log("My Name Is 'Vivek Raj' And I Am From 'Xyz' ");
// let newArr = [1,2,3,4,5,6];
// console.log(newArr.map(x=> x*2))
