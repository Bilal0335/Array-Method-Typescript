//! concate
// let a = [1,2,3,4]
// let b = [5,6,7,8]
// let c = [9,10]
// console.log(a.concat(b,c));

//! copyWithin
// let a = [1,2,3,4,5,6,7,8] //
// console.log(a.copyWithin(3,4));
// console.log(a.copyWithin(2,3)); //[1,2,3,4,5,6,7,8] //[1,2,4,5,6,7,8]
// console.log(a.copyWithin(0,1));
// console.log(a.copyWithin(2,1));

//! entries //* Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
// let a = [1, 2, 3, 4, 5, 55, 6, 7]
// let ent = a.entries()
// for (const iterator of ent) {
//   console.log(iterator)
// }

//* or
// let ent = Array.from(a.entries())
// console.log(ent)

//! every: Tests whether all elements in the array pass the provided function
// console.log(a);
// console.log(a.every(e => e > 4));

//! fill: Fills all the elements in an array with a static value.
// console.log(a);
// log(a.fill(0))
// log(a.fill(1,2))
// console.log(a.fill(1,3,5));

//! filter: Creates a new array with all elements that pass the test implemented by the provided function.
// console.log(a);
// console.log(a.filter(e => e % 2 == 0));

//! find: Returns the value of the first element that satisfies the provided function.
// console.log(a)
// console.log(a.find(e => e > 6)) // 55
// console.log(a.find(e => e % 2 == 0)) // 2

//! findIndex: Returns the index of the first element that satisfies the provided function.
// console.log(a)
// console.log(a.findIndex(ele => ele % 2 == 0)) //[1,2,3,4,5,55,6,7] //index = 1 => 2

//! forEach: Executes a provided function once for each array element.
// console.log(a)
// function add (item: number) {
//   console.log(item)
// }
// a.filter(add)

// a.filter(ele => console.log(ele))
// a.filter(e => {
//   if (e % 2 === 0) {
//     console.log(e)
//   }
// })

//! includes: Determines whether an array includes a certain value.
// console.log(a);
// console.log(a.includes(4));
// console.log(a.includes(9));

//! indexOf: Returns the first index at which a given element can be found.
// console.log(a);
// console.log(a.indexOf(5)); // is ma bata hy index kaha hy 5 jo hy index 4 ma hy

//! join: Joins all elements of an array into a string.
// console.log(a);
// console.log(a.join(" "));
// console.log(a.join("-"));

//! keys: Returns a new Array Iterator that contains the keys for each index in the array.
// console.log(a)
// console.log(a.keys().next());
// console.log(a.keys().next());
// console.log(a.keys().next());
// console.log(a.keys().next());
// let itera = a.keys()
// for (const iterator of itera) {
//   console.log(iterator)
// }

//! lastIndexOf: Returns the last index at which a given element can be found.
// let lIndex = [1,2,3,4,5,2,3]
// console.log(lIndex.lastIndexOf(3));  //last index search 3 index = 6

//! map: Creates a new array with the results of calling a provided function on every element.
// console.log(a)
// console.log(a.map(e => e * 2))
// console.log(a.map(e => e + 2))
// let a = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a.map(e => e % 2 == 0).filter(el => el));

//! reduce: Applies a function against an accumulator and each element to reduce it to a single value.

// console.log(a)
// console.log(a.reduce((acc, cuu) => acc + cuu,0))

//! reduceRight: Applies a function against an accumulator and each element (from right to left) to reduce it to a single value.

// console.log(a)
// console.log(a.reduce((acc, cuu) => acc + cuu,0))

//! push: Adds one or more elements to the end of an array and returns the new length.

//! pop: Removes the last element from an array and returns that element.

//! reverse: Reverses the order of the elements in an array.
// console.log([3, 2, 5, 1].reverse())

//! shift: Removes the first element from an array and returns that element.
//! slice: Returns a shallow copy of a portion of an array into a new array.
//! some: Tests whether at least one element in the array passes the provided function

// console.log(a)
// console.log(a.some(e => e > 4))

//! sort: Sorts the elements of an array in place and returns the sorted array.
// console.log([3, 2, 5, 1].sort((a, b) => a - b))
// console.log([3, 2, 5, 1].sort())

//! splice: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

//! toLocaleString: Returns a string representing the elements of the array.

//! toString: Returns a string representing the specified array and its elements.

//! unshift: Adds one or more elements to the beginning of an array and returns the new length.

//! values: Returns a new Array Iterator object that contains the values for each index in the array.
// console.log(a)
// let b = a.values()
// for (const iterator of b) {
//   log(iterator)
// }

//! String Method
//! charAt: Returns the character at a specified index.
// console.log("Hello, World".charAt(3));

//! charCodeAt: Returns the Unicode of the character at a specified index.
// console.log("Hello, World".charCodeAt(3));

//! concat: Combines two or more strings.
// let b =  "bilal "
// let c =  "hussain"
// let d =  "muhammad "
// console.log(d.concat(b));
// console.log(d.concat(b,c));

//! endsWith: Checks if a string ends with a specified substring.
// console.log("Hello, World".endsWith("World"));
// console.log("Hello, World".endsWith("World!"));

//! includes: Checks if a string contains a specified substring.
// console.log("Hello, World".endsWith("World"));
// console.log("Hello, World".endsWith("World"));
// console.log("Hello, World".endsWith("Hello"));

//! indexOf: Returns the first index at which a given substring can be found.
// console.log('Hello, World'.indexOf('World'))
// console.log('Hello, World'.indexOf('Hello'))

//! lastIndexOf: Returns the last index at which a given substring can be found.
// console.log('Hello, World'.lastIndexOf('World'))
// console.log('Hello, World World'.lastIndexOf('World'))

//! localeCompare: Compares two strings in the current locale.
// let str1 = 'banana'
// let str2 = 'banana'
// let str3 = 'orange'
// console.log(str1.localeCompare(str2)); //0
// console.log(str1.localeCompare(str3));//1

//! match: Retrieves the result of matching a string against a regular expression.
// console.log("hello world".match(/world/));
// console.log("hello world".match(/world/i));
// console.log("hello world".match(/world/gi));
// console.log("hello world".match(/world/g));

//! repeat: Constructs and returns a new string which contains the specified number of copies of the string on which it was called.
// console.log('hello world'.repeat(6))

//! replace: Replaces a specified value with another value in a string.
// console.log('hello wrold'.replace('wrold', 'world'))

//! search: Executes a search for a match between a regular expression and the string.
// console.log('hello world'.search(/world/)); //index bata hy

//! slice: Extracts a section of a string and returns it as a new string.
// console.log("hello, david".slice(7));
// console.log("hello, david".slice(0,5));
// console.log("hello, david".slice(2,-5));

//!
//!
//!
//!
//!

//!
//! concate
// let a = [1,2,3,4]
// let b = [5,6,7,8]
// let c = [9,10]
// console.log(a.concat(b,c));

import { log } from 'console'
import { type } from 'os'

//! copyWithin
// let a = [1,2,3,4,5,6,7,8] //
// console.log(a.copyWithin(3,4));
// console.log(a.copyWithin(2,3)); //[1,2,3,4,5,6,7,8] //[1,2,4,5,6,7,8]
// console.log(a.copyWithin(0,1));
// console.log(a.copyWithin(2,1));

//! entries //* Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
// let a = [1, 2, 3, 4, 5, 55, 6, 7]
// let ent = a.entries()
// for (const iterator of ent) {
//   console.log(iterator)
// }

//* or
// let ent = Array.from(a.entries())
// console.log(ent)

//! every: Tests whether all elements in the array pass the provided function
// console.log(a);
// console.log(a.every(e => e > 4));

//! fill: Fills all the elements in an array with a static value.
// console.log(a);
// log(a.fill(0))
// log(a.fill(1,2))
// console.log(a.fill(1,3,5));

//! filter: Creates a new array with all elements that pass the test implemented by the provided function.
// console.log(a);
// console.log(a.filter(e => e % 2 == 0));

//! find: Returns the value of the first element that satisfies the provided function.
// console.log(a)
// console.log(a.find(e => e > 6)) // 55
// console.log(a.find(e => e % 2 == 0)) // 2

//! findIndex: Returns the index of the first element that satisfies the provided function.
// console.log(a)
// console.log(a.findIndex(ele => ele % 2 == 0)) //[1,2,3,4,5,55,6,7] //index = 1 => 2

//! forEach: Executes a provided function once for each array element.
// console.log(a)
// function add (item: number) {
//   console.log(item)
// }
// a.filter(add)

// a.filter(ele => console.log(ele))
// a.filter(e => {
//   if (e % 2 === 0) {
//     console.log(e)
//   }
// })

//! includes: Determines whether an array includes a certain value.
// console.log(a);
// console.log(a.includes(4));
// console.log(a.includes(9));

//! indexOf: Returns the first index at which a given element can be found.
// console.log(a);
// console.log(a.indexOf(5)); // is ma bata hy index kaha hy 5 jo hy index 4 ma hy

//! join: Joins all elements of an array into a string.
// console.log(a);
// console.log(a.join(" "));
// console.log(a.join("-"));

//! keys: Returns a new Array Iterator that contains the keys for each index in the array.
// console.log(a)
// console.log(a.keys().next());
// console.log(a.keys().next());
// console.log(a.keys().next());
// console.log(a.keys().next());
// let itera = a.keys()
// for (const iterator of itera) {
//   console.log(iterator)
// }

//! lastIndexOf: Returns the last index at which a given element can be found.
// let lIndex = [1,2,3,4,5,2,3]
// console.log(lIndex.lastIndexOf(3));  //last index search 3 index = 6

//! map: Creates a new array with the results of calling a provided function on every element.
// console.log(a)
// console.log(a.map(e => e * 2))
// console.log(a.map(e => e + 2))
// let a = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a.map(e => e % 2 == 0).filter(el => el));

//! reduce: Applies a function against an accumulator and each element to reduce it to a single value.

// console.log(a)
// console.log(a.reduce((acc, cuu) => acc + cuu,0))

//! reduceRight: Applies a function against an accumulator and each element (from right to left) to reduce it to a single value.

// console.log(a)
// console.log(a.reduce((acc, cuu) => acc + cuu,0))

//! push: Adds one or more elements to the end of an array and returns the new length.

//! pop: Removes the last element from an array and returns that element.

//! reverse: Reverses the order of the elements in an array.
// console.log([3, 2, 5, 1].reverse())

//! shift: Removes the first element from an array and returns that element.
//! slice: Returns a shallow copy of a portion of an array into a new array.
//! some: Tests whether at least one element in the array passes the provided function

// console.log(a)
// console.log(a.some(e => e > 4))

//! sort: Sorts the elements of an array in place and returns the sorted array.
// console.log([3, 2, 5, 1].sort((a, b) => a - b))
// console.log([3, 2, 5, 1].sort())

//! splice: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.

//! toLocaleString: Returns a string representing the elements of the array.

//! toString: Returns a string representing the specified array and its elements.

//! unshift: Adds one or more elements to the beginning of an array and returns the new length.

//! values: Returns a new Array Iterator object that contains the values for each index in the array.
// console.log(a)
// let b = a.values()
// for (const iterator of b) {
//   log(iterator)
// }

//! String Method
//! charAt: Returns the character at a specified index.
// console.log("Hello, World".charAt(3));

//! charCodeAt: Returns the Unicode of the character at a specified index.
// console.log("Hello, World".charCodeAt(3));

//! concat: Combines two or more strings.
// let b =  "bilal "
// let c =  "hussain"
// let d =  "muhammad "
// console.log(d.concat(b));
// console.log(d.concat(b,c));

//! endsWith: Checks if a string ends with a specified substring.
// console.log("Hello, World".endsWith("World"));
// console.log("Hello, World".endsWith("World!"));

//! includes: Checks if a string contains a specified substring.
// console.log("Hello, World".endsWith("World"));
// console.log("Hello, World".endsWith("World"));
// console.log("Hello, World".endsWith("Hello"));

//! indexOf: Returns the first index at which a given substring can be found.
// console.log('Hello, World'.indexOf('World'))
// console.log('Hello, World'.indexOf('Hello'))

//! lastIndexOf: Returns the last index at which a given substring can be found.
// console.log('Hello, World'.lastIndexOf('World'))
// console.log('Hello, World World'.lastIndexOf('World'))

//! localeCompare: Compares two strings in the current locale.
// let str1 = 'banana'
// let str2 = 'banana'
// let str3 = 'orange'
// console.log(str1.localeCompare(str2)); //0
// console.log(str1.localeCompare(str3));//1

//! match: Retrieves the result of matching a string against a regular expression.
// console.log("hello world".match(/world/));
// console.log("hello world".match(/world/i));
// console.log("hello world".match(/world/gi));
// console.log("hello world".match(/world/g));

//! repeat: Constructs and returns a new string which contains the specified number of copies of the string on which it was called.
// console.log('hello world'.repeat(6))

//! replace: Replaces a specified value with another value in a string.
// console.log('hello wrold'.replace('wrold', 'world'))

//! search: Executes a search for a match between a regular expression and the string.
// console.log('hello world'.search(/world/)); //index bata hy

//! slice: Extracts a section of a string and returns it as a new string.
// console.log("hello, david".slice(7));
// console.log("hello, david".slice(0,5));
// console.log("hello, david".slice(2,-5));

//! split: Splits a string into an array of substrings.
// console.log('hello, bilal ,you are fine, yes'.split(' '))

//! startsWith: Checks if a string starts with a specified substring.
// console.log("hello, david".startsWith("David"));
// console.log("hello, david".startsWith("david"));

//! substr: Returns a portion of the string starting at a specified index and extending for a given number of characters.
// console.log("hello, david".substr(6,6));

//! substring: Returns a substring between two indices.
// console.log('hello world'.substr(6, 11))

//! toLocaleLowerCase: Returns the calling string value converted to lower case, according to any locale-specific rules.

//! toLocaleUpperCase: Returns the calling string value converted to upper case, according to any locale-specific rules.

//! toLowerCase: Returns the calling string value converted to lower case.

//! toUpperCase: Returns the calling string value converted to upper case.

//! trim: Removes whitespace from both ends of a string.

//! valueOf: Returns the primitive value of a string object.
// let b = new String('Bilal')
// console.log(b.valueOf())

//!                 for ,forof ,forin  ,while ,do while loop

// for (let i = 0; i < 5; i++) {
//   console.log('hello , typescript')
// }
// console.log(' ')
// for (let i = 5; i < 51; i = i + 5) {
//   console.log(i)
// }
// console.log(' ')
// for (let i = 50; i > 4; i = i - 5) {
//   console.log(i)
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i)
//   }
// }

//! while loop
// let i = 0
// while (i < 10) {
//   console.log(i)
//   i++
// }

// let i = 10
// while (i > 0) {
//   console.log(i)
//   i--
// }

// let i = 0
// while (i < 10) {
//   if (i % 2 != 0) {
//     console.log(i)
//   }
//   i++
// }

// let i = 0
// do {
//   console.log(i,' hello bilal')
//   i++
// } while (i < 10)

// type Person = {
//   name: string
//   age: number
//   email: string
// }

// let a:Person = {
//   name: 'Bilal',
//   age: 88,
//   email: 'abc@gmail.com'
// }

// for (const key in a) {
//   console.log(key, a[key as keyof Person])
// }

// let fruit: string[] = ['apple', 'banana', 'orange', 'grapes']
// for (const key in fruit) {
//   console.log(key,fruit[key])
// }

// for (const iterator of fruit) {
//   console.log(iterator)
// }
// for (let i = 1; i <= 4; i++) {
//   let line = ''; // Initialize an empty string for each row

//   for (let j = 1; j <= i; j++) {
//     line += '*'; // Append a star to the string
//   }

//   console.log(line); // Print the accumulated stars for the current row
// }

// let i = 1
// while (i <= 4) {
//   let lin = ''
//   let j = 1
//   while (j <= i) {
//     lin += '*'
//     j++
//   }
//   console.log(lin)

//   i++
// }

// for (let i = 1; i <= 4; i++) {
//   let line = '' // Initialize an empty string for each row

//   for (let j = 1; j <= i; j++) {
//     line += '*' // Append a star to the string
//   }

//   console.log(line) // Print the accumulated stars for the current row
// }

//! Object

// let std = {
//   name: 'Bilal',
//   age: 66,
//   hppies: ['cricket', 'football'],
//   fun: () => 300,
//   // email:"abc@gmail.com",
//   offic:{
//     name:"akmal",
//     age:30
//   }
// }
// delete std.fun;
// console.log(std)
// console.log(std.fun())
// std.email = "abc@gmail.com"
// console.log('email' in std);

// console.log(std.offic.age);
// console.log(std.offic);
// console.log(std);
// console.log(std['age']);

//! Math Object

// let x = 44.1
// console.log(Math.round(x));
// console.log(Math.floor(x));  //44
// console.log(Math.ceil(x));
// console.log(Math.trunc(x));

// let d = [12,3,4,5]
// console.log(Math.max(...d));
// console.log(Math.max(3,4,3,5,6,5,6,55));
// console.log(Math.min(...d));
// console.log(Math.min(1,2,3,4,50));
// console.log(Math.sqrt(9));

//! Destrucing
let a = ['animal', 'plant', 'sun', 'moon', 77, 'abc@gmail.com', true]
// let [name]  = a
// let [,,,,age,,boolean]  = a
// console.log(age,boolean);

// let obj = {
//   name: 'akmal',
//   age: 77,
//   off: {
//     names: 'nana majno',
//     age: 77
//   }
// }

// let {name,off:{names}} = obj
// console.log(name,names);

// let arr = ['akmal', [77, 'nana majno'], 'extra'];

// // Combined destructuring of both top-level and nested array elements
// let [name, [age, names]] = arr;

// console.log(name);  // Outputs: 'akmal'
// console.log(age);   // Outputs: 77
// console.log(names); // Outputs: 'nana majno'

//! interface
// interface Person {
//   name: string
//   age: number
//   func: () => void
//   hopp: string[]
//   obj: {
//     name: string
//     age: number | number
//   }
//   sum: (a: number, b: number) => void
// }
// let std: Person = {
//   name: 'Bilal',
//   age: 66,
//   func: () => {
//     console.log('hello')
//   },
//   hopp: ['PSl', 'Cricket'],
//   obj: {
//     name: 'nouman',
//     age: 21
//   },
//   sum: (a, b) => {
//     console.log(a + b);

//   }
// }
// console.log(std)
// std.func()
// std.sum(11,2)

//! Type
// type idType = number
// type ageTye = number
// type nameType = string

// type Empoye = {
//   emId: idType
//   emAge: ageTye
//   emName: nameType
// }
// let idNum: idType = 777
// let ageNum: ageTye = 22
// let namesUse: nameType = 'Bilal'

// let employee = {
//   emId: idNum,
//   emAge: ageNum,
//   emName: namesUse
// }

// interface Person {
//   name: string
//   age: number
// }
// interface Person {
//   email: string
// }
// interface Employee extends Person {
//   email: string
// }

// let person: Person = {
//   name: 'Billa',
//   age: 22,
//   email:"abc@gmail.com"
// }
// let employee: Employee = {
//   name: 'Billa',
//   age: 22,
//   email: 'abc@gmail.com'
// }



