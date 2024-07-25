// let a = ['bilal', 'nabeel','muzammil','david','john','akber shah']
// let pushMethod = a.push('junaid')
// log(pushMethod)  // 1 2 3 4
// let popMethod = a.pop()
// log(popMethod)  // junaid
// let shiftMethod = a.shift()
// log(shiftMethod)
// a.unshift("david",'john','akkber')
// log(a)
// let a = ['bilal', 'nabeel', 'muzammil', 'david', 'john', 'akber shah']
// let sliceM = a.slice(-4,-3) //(start ,end not include)
// log(sliceM)
// let spliceM = a.splice(2, 3)
// log(a) //[ 'bilal', 'nabeel', 'akber shah' ]
// log(spliceM) //[ 'muzammil', 'david', 'john' ]
// let spliceM = a.splice(3,0,"chemistry",'physics')
// let spliceM = a.splice(3,4,"chemistry",'physics')
// log(a)
// log(spliceM)
// let a = [1,2,3,4,5]
// let b = [11,111,23]
// let c = [66,88,7773,63677,63663]
// log(a.concat(b,c))
// let a = new Array(1,12,0,2,7,99,3,24,5,6,7,8)
// log(a.length)
// log(a.toString())
// log(a.reverse())
// log(a.sort())
// log(a)
// log(a.fill(2,4))
//[
//     1, 12, 0, 2, 2,
//     2,  2, 2, 2, 2,
//     2,  2
//   ]
// let a = Array.from('akmal')
// let b:string [] = Array.from(['nabeel','muzammil'])
// log(a)
// log(b)
// let c:string [] = Array.from('akmal')
// log(c)
// let d = ['akmal']
// log(Array.from(d))
// indexOf and lastIndexof
// let a = [1,2,3,4,5,6,7]
// log(a.indexOf(1))
// log(a.lastIndexOf(5))
// log(a.lastIndexOf(8))
// let a = [1, 2, 3, 4]
// log(a.find(ele => ele === 4))
// log(a.find(e => e === 3))
// log(a.findIndex(e => e === 5))
// log(a.findLastIndex(e => e === 5))
// let a = [1, 2, 3, 4]
// log(a.includes(3))
// log(Array.isArray(a))
// let str = "bilal "
// console.log(Array.isArray(str));
// let fruits = ["Apple", "Grapes", "Banana"];
// // checking whether fruits is an array or not
// console.log(Array.isArray(fruits));
// let text = "Apple";
// // checking whether text is an array or not
// console.log(Array.isArray(text));
// let a = [1, 2, 3, 4, 5]
// log(a.reduce((acc, curr) => acc + curr, 0))
// let words = ['this', 'is', 'a', 'test']
// let wors = words
//   .reduceRight((ac, cu) => {
//     return ac + ' ' + cu
//   }, '')
//   .trim()
// log(wors)
// let languages = ["JavaScript", "Java", "C++"];
// // returns an Array Iterator object that contain values
// let iteratorObject = languages.values();
// log(iteratorObject.next())
// log(iteratorObject.next())
// log(iteratorObject.next())
// log(iteratorObject.next())
// // looping through iterator
// for (let value of iteratorObject) {
//   console.log(value);
// }
// Output:
// JavaScript
// Java
// C++
// let fruits = ['apple', 'banana', 'cherry'];
// let iterator = fruits.keys();
// // console.log(iterator.next().value); // Output: 0
// // console.log(iterator.next().value); // Output: 1
// // console.log(iterator.next().value); // Output: 2
// for(let value of iterator){
//     console.log(value);
// }
// let fruits = ['apple', 'banana', 'cherry'];
// let iterator = fruits.entries();
// console.log(iterator.next().value); // Output: [0, 'apple']
// console.log(iterator.next().value); // Output: [1, 'banana']
// console.log(iterator.next().value); // Output: [2, 'cherry']
// for (const val of iterator) {
//     log(val)
// }
// let develpName: string[] = ['akmal', 'nabeel', 'muzammil']
// function addName (val: string): void {
//   console.log(val)
// }
// develpName.forEach(addName)
// let num = [1, 2, 3, 4, 5].forEach(e => {
//   if (e % 2 == 0) {
//     console.log(e)
//   }
// })
//filter
//map
//some
//every
//flat
//flatmap
// let a = [11, 2, 3, [1, 2, 3, [4, 5, 6, 7], 7, 8, [5, [5, 6, 7], 6, 7, 8]]]
// log(a.flat(2))
// log(a.flat(Infinity))
// let a1 = [1, 2, 3, 4, 5, 3]
// let sq = a1.flatMap(ele => {
//   console.log(ele * 2)
//   return [ele * 2]
// })
// console.log(sq)
// let msg = ['i ma boy', 'how ', 'are you']
// let flats = msg.flatMap(se => {
//   return se.split(' ')
// })
// log(flats)
// let filterM = [2, 8, 3, 56, 7, 34, 56, 22, 77, 19]
// let res = filterM.filter(a => {
//   if (a > 18) {
//     return a
//   }
// })
// log(res)
// let wordsName = [
//   'bilal',
//   'animals',
//   'plants',
//   'carnivourus',
//   'david',
//   'john rahul'
// ]
// let worLen = wordsName.filter(len => len.length > 9)
// log(worLen)
// let evenNum = [1,2,3,4,5,6,7,8,9,10,11,12,3,14,15]
// let eveNums = evenNum.filter(num => num % 2 == 0)
// log(eveNums)
// let people = [
//   { name: 'John', age: 28 },
//   { name: 'Jane', age: 22 },
//   { name: 'Peter', age: 35 },
//   { name: 'Mary', age: 40 }
// ]
// let peopleName = people.filter(names => {
//   return names.age > 30
// })
// log(peopleName)
// people.filter(per => log(per.name))
let mapsM = [1, 2, 3, 4, 5, 6, 7];
export {};
// mapsM.map(ele => log(ele * 2))
// let sqM = mapsM.map(ele => ele * 2)
// log(sqM)
// let sqM = mapsM.map((val, index,array) => {
//   log(val, index,array)
// //   return val * 2
// })
// log(sqM)
// mapsM.map((val,index,arr)=>{
//     log(val,index,arr)
// })
// let eve = mapsM.map(ele => ele % 2 == 0)
// log(eve)
// const even = mapsM.some(checkAge)
// function checkAge (vev:number):boolean {
//   return vev > 4
// }
// log(even)
// const fruits: string[] = ['apple', 'banana', 'mango', 'guava']
// function checkAvailability(arr:string [], val:string) {
//   return arr.some(arrVal => val === arrVal);
// }
// console.log(checkAvailability(fruits, "kela"));
// console.log(checkAvailability(fruits, "banana"));
// checkAvailability(fruits, "banana"); // true
// function checkAva(arr: string[], val: string): boolean {
//   return arr.some(arrVal => val === arrVal);
// }
// const fruitsList1: string[] = ['apple', 'banana', 'mango', 'guava'];
// console.log(checkAva(fruitsList1, 'banana')); // true
// console.log(checkAva(fruitsList1, 'grape')); // false
// const fruitsList2: string[] = ['apple', 'banana', 'orange'];
// console.log(checkAva(fruitsList2, 'banana')); // true
// console.log(checkAva(fruitsList2, 'grape')); // false
// const isBelowThreshold = (currentValue:number):boolean => currentValue < 40;
// const array1:number [] = [1, 30, 39, 29, 10, 13];
// console.log(array1.every(isBelowThreshold));
// Expected output: true
// const numbers:number [] = [1, 2, 3, 4, 5];
// const allLessThan10 = numbers.every(num => num > 10);
// console.log(allLessThan10); // true
