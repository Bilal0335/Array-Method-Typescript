//! Array method
//* array mean collect of diff value
// let arr = ['bilal',55,true]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr);
//* array from different method
/*
? by normal method
? by contructor method
? by array method
*/
//* by normal method
// let arr = ['bilal','junaid','david']
// console.log(arr);
//* by contsructor method
// let arr = new Array('Bilal', 'David', 'Animal', 'Plant')
// log(arr)
//* by array method
// let arr:number []= Array.from([1,2,3,4,5,6])
// log(arr)
// let c: string[] = Array.from('Akmal')
// log(c)
// let n = Array.from([1, 2, 3, 4], x => x + 1)
// log(n)
//? 1.1 Array from a Set
// let names = new Set(['foo', 'baz', 'bar', 'foo', 'bar'])
// log(Array.from(names))
//? 1.2 Array from a map
// const map = new Map([
//   [1, 2],
//   [2, 4],
//   [4, 8]
// ])
// log(Array.from(map))
// log(Array.from(map.values()))
// log(Array.from(map.keys()))
//? push() //add end
// let a = []
// a.push('bilal', 'muzammil', 663, 99, true)
// a.push('akmal')
// a[4] = 'nabeel'
// log(a)
// log(a[3])
//? pop() //remove end
// log(a)
// a.pop()
// log(a)
//? shift() remove first
// let a = ['cat','dog','elephant','camel','cow']
// a.shift()
// a.shift()
// log(a)
//? unshift() add first
// let a = []
// a.unshift("banana",'orange','watermelon','apple')
// a.unshift('onion')
// a.unshift('tomatoe')
// log(a)
//? toString
// let colorName = ['red','yellow','green','black','brown']
// log(colorName)
// log(colorName.toString())
//? delete
// delete colorName[4]
// log(colorName)
//? slice
// let colorName = ['red','yellow','green','black','brown']
// log(colorName.slice(3,5))
// log(colorName.slice(3))
//?splice()
// let b = colorName.splice(2,3,'white')
// log(b)
// log(colorName)
//? length
// let len = [1,2,3,4,5,6,7,8,9]
// log(len.length)
//? reverse
// log(len.reverse())
//? sort()
// let compare = (a: number, b: number) => {
//     return a - b
// }
// let num = [3, 5, 62, 2, 0, 2, 4]
// num.sort(compare)
// log(num)
//? fill(value,start,end)
// let a = [1, 2, 3, 4, 5]
// log(a.fill(3, 2, 5))
// log(a.fill(5, 2, 5))
//? join()
// let a1 = ["bilal"]
// let a2 = ['hussain']
// let a3= ['brother']
// log(a1.concat(a2,a3))
//? Indexof(search,start) he indexOf() method searches the array for searchElement and returns the index of the first match.
// let indexRe = [1,2,3,2,23,5,6,5,6]
// log(indexRe.indexOf(2))
//? lastIndexof()  back
// let lIndexOf = [1,2,3,4,5,6,7,8,910,11,22,33,44,55,66,7,78]
// log(lIndexOf.lastIndexOf(33,15)) //15 move backward
// log(lIndexOf.lastIndexOf(93))
//? Array of() convert into array
// let a = Array.of(1,2,3,4,5)
// let b = Array.of('cat','dog','camel')
// log(a)
// log(b)
//? findIndex(0)
// let lIndexOf:number [] = [1, 2, 3, 4, 5, 6, 7, 8, 910, 11, 22, 33, 44, 55, 66, 7, 78]
// let b = lIndexOf.find(ele => ele == 55)
// log(b)
//? findIndex
// let c = lIndexOf.findIndex((ele, index) => index >= 6 && ele == 55)
// log(c)
//?include
// log(lIndexOf.includes(55))
// log(lIndexOf.includes(155))
//? max()
// let max = Math.max(...lIndexOf)
// log(max)
//? min()
// let min = Math.min(...lIndexOf)
// log(min)
//? Reduceright()
//* The reduceRight() method reduces the array to a single value by executing a callback function on two values of the array (from right to left).
// let a = [1, 2, 3, 4]
// let b = a.reduceRight((acc, curr) => acc + curr)
// log(b)
//? reduce
//* The reduce() method executes a reducer function on each element of the array and returns a single output value.
//? example 1
// let nameArr = ['bilal ', 'hussain ', 'brother ']
// function joinStr (acc: any, curr: any) {
//   return acc + curr
// }
// let joinString = nameArr.reduce(joinStr)
// log(joinString)
//? example 2
// let sum = [1,2,3,4,5,6,7]
// function sumAll(acc:number,cur:number):number{
//     return acc + cur
// }
// let sumArr = sum.reduce(sumAll)
// log(sumArr)
//? example 3
// let sub:number [] = [1,2,3,4,5,6,7]
// function sumAll(acc:number,cur:number):number{
//     return acc - cur
// }
// let subArr:number = sub.reduce(sumAll)
// log(subArr)
//? example 3
// const expense: number[] = [1800, 2000, 500, 500, 5500]
// let salaray: number = 4400
// let remaining = expense.reduce(
//   (acc: number, curr: number): number => acc - curr,
//   salaray
// )
// log('remaing', remaining)
//? example 4
// let ageGroup:number [] = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
// let uniqueAgeGroup = ageGroup.reduce(function (accumulator:number[], currentValue:number) {
//   if (accumulator.indexOf(currentValue) === -1) {
//     accumulator.push(currentValue);
//   }
//   return accumulator;
// }, []);
// console.log(uniqueAgeGroup); // [ 18, 21, 1, 51, 5, 7, 10 ]
//? join()
// let joinNumber = [1,2,3,4,5,6,7]
// log(joinNumber.join("-"))
//? foreach()
// let forEach = [1, 2, 3, 4, 5, 6]
// log(forEach)
// forEach.forEach(ele => log(ele ** 2))
//? array.from => "bilal" string convert into array split ['b','i','l','a','l']
// let a = 'bilal'
// let b = Array.from(a)
// log(b)
//? for of
// for (const item of forEach) {
//   log(item * 3)
// }
//? for in => key value datha hy let forEach = [0:1, 1:2, 2:3, 3:4, 4:5, 5:6]
// for (const key in forEach) {
//   log(key)
// }
// for (const i in forEach) {
//   log(forEach[i])
// }
//? map,filter and reduce high order
//? Map(value,index,array) => new array return
// let a = [1, 23, 4, 5, 77]
// let b = a.map((value, index, array) => {
//   log(value, index, array)
//   return value + 1
//   return index
// })
// log(b)
//? filter()=> return array
// let a1 = [2, 4, 5, 6, 6, 5, 4, 554, 43, 2, 4, 223, 4, 2, 44, 33, 22]
// let b1 = a1.filter(ele => ele < 66)
// log(b1)
//? isArray() => the isArray() method checks whether the passed argument is an array or not.
// let fruits = ["Apple", "Grapes", "Banana"];
//* checking whether fruits is an array or not
// console.log(Array.isArray(fruits)); //true
// let text = "Apple";
//* checking whether text is an array or not
// console.log(Array.isArray(text)); //false
//? tolocalstring() => array convert string
// let array1 = ["Nepal", 1];
// returns string representation of array
// let stringFromArray = array1.toLocaleString();
// console.log(stringFromArray);
// Output:
// Nepal,1
// let fruits = ["Apple", "Grapes", "Banana"];
// log(fruits.toLocaleString())
//? toString() => same work tolocalstring
//? flat =>  [,[,[,[]]]]
// let a1 = [1,2,[3,4,5,[6,7,8,[66.77,8,9],66,7,[3,5,4,[3,4,5]]]]]
// log(a1.flat(1))
// log(a1.flat(2))
// log(a1.flat(3))
// log(a1.flat(Infinity))
//? flatemap(0) => calll back func demand
// let names = [['java'], ['python'], ['js'], ['vuejs']]
// log(names.flatMap(x => x))
//? some() => check if any of the element in an array pass test
// let age = [12, 34, 18, 66, 19, 20]
// let b = age.some(checkAge)
// function checkAge (age:number) {
//   return age >= 18
// }
// log(b)
// log(age.some(ele => ele >= 18))
// log(
//   age.some(ele => {
//     if (ele % 2 == 0) {
//       console.log(ele)
//       return true
//     } else {
//       return false
//     }
//   })
// )
//? every() => The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// let age = [12, 34, 18, 66, 19, 20] //false
// let age = [66, 34, 18, 66, 39, 24] //true
// function checkAge (age: number) {
//   return age>=18
// }
// log(age.every(checkAge)) //false
//? The entries() =>  method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.
const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();
console.log(iterator1.next().value);
// Expected output: Array [0, "a"]
console.log(iterator1.next().value);
export {};
// Expected output: Array [1, "b"]
