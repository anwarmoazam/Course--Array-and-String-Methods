// String.charAt(index) method

const string = 'Code Explained';

const charAt5 = string.charAt(5);

console.log(charAt5);

// String.indexOf(searchString,position) and String.lastIndexOf(searchString,position) method

const s = 'The code undefined code code !';

let resultIndexOf = s.indexOf('Code');
let resultLastIndexOf = s.lastIndexOf('Code');

console.log({resultIndexOf,resultLastIndexOf});

resultIndexOf = s.indexOf('code');
resultLastIndexOf = s.lastIndexOf('code');

console.log({resultIndexOf,resultLastIndexOf});

resultIndexOf = s.indexOf('code',5);
resultLastIndexOf = s.lastIndexOf('code',23);

console.log({resultIndexOf,resultLastIndexOf});

resultIndexOf = s.indexOf('code',-5);
resultLastIndexOf = s.lastIndexOf('code',-5);

console.log({resultIndexOf,resultLastIndexOf});

resultIndexOf = s.indexOf('');
resultLastIndexOf = s.lastIndexOf('');

console.log({resultIndexOf,resultLastIndexOf});

resultIndexOf = s.indexOf(); //because our string contains word undefined it returns undefined word index otherwise it returns -1
resultLastIndexOf = s.lastIndexOf(); //because our string contains word undefined it returns undefined word index otherwise it returns -1

console.log({resultIndexOf,resultLastIndexOf});

// String.slice() and String.substring method

// Syntax : string.slice(indexStart, indexEnd)
// Syntax : string.substring(indexStart, indexEnd)

const str1 = 'The morning is upon us.'

let resultSlice = str1.slice(12);
let resultSubstring = str1.substring(12);

console.log({resultSlice,resultSubstring});

resultSlice = str1.slice(-13); //if negative number passed then count from last
resultSubstring = str1.substring(-12); //if negative number passed then it will be convert 0 any negative number

console.log({resultSlice,resultSubstring});

resultSlice = str1.slice(str1.length); //if negative number passed then count from last
resultSubstring = str1.substring(str1.length); //if negative number passed then it will be convert 0 any negative number

console.log({resultSlice,resultSubstring});

resultSlice = str1.slice(13,16); 
resultSubstring = str1.substring(13,16);

console.log({resultSlice,resultSubstring});

resultSlice = str1.slice(16,13); 
resultSubstring = str1.substring(16,13); //if indexEnd small than indexStart then substring method will swap them

console.log({resultSlice,resultSubstring});

resultSlice = str1.slice(-8,-4); // count from last of string
resultSubstring = str1.substring(-8,-4); //if negative number then substring method will converts them into 0 so indexStart = 0 and indexEnd = 0

console.log({resultSlice,resultSubstring});

resultSlice = str1.slice(-8,4); 
resultSubstring = str1.substring(-8,4); 

console.log({resultSlice,resultSubstring});

resultSlice = str1.slice(8,-4); 
resultSubstring = str1.substring(8,-4); 

console.log({resultSlice,resultSubstring});

// split method - return substring using seperator in an array
// Syntax : string.split(seperator, limit)

let splitResult1 = str1.split() //when no seperator is used the entire string return in array

console.log(splitResult1);

let splitResult2 = str1.split(" ") 

console.log(splitResult2);

let splitResult3 = str1.split("") //empty string is everywhere

console.log(splitResult3);

let splitResult4 = str1.split("o") 

console.log(splitResult4);

let splitResult5 = str1.split("o",2) //set limit 1 with seperator o
console.log(splitResult5);

// includes method - this method is used to string found in original string
// Syntax : string.includes(searchString, Position)

const sentance = 'The quick brown fox jumps over the lazy dog.';

let resultIncludes = sentance.includes('fox');

console.log(resultIncludes);

resultIncludes = sentance.includes('Fox');

console.log(resultIncludes);

resultIncludes = sentance.includes('fox',17);

console.log(resultIncludes);

// startsWith - this method is used whenever you want to check if a string start with another string or not
// startsWith and endsWith method - this method is used whenever you want to check if a string ends with another string or not

// Syntax : string.startsWith(searchString, Position);

const str2 = 'Cats are the best!';

let resultStartsWith = str2.startsWith('Cats'); //case sensative

console.log(resultStartsWith);

resultStartsWith = str2.startsWith('are',5); 

console.log(resultStartsWith);

// Syntax : string.endsWith(searchString, length);

let resultEndsWith = str2.endsWith('best!'); //case sensative

console.log(resultEndsWith);

resultEndsWith = str2.endsWith('best',17); 

console.log(resultEndsWith);

// concat method - concate is used to concatenate a string (doesn't modified any of the string)
// Syntax : string.concat(string2, string3, .... stringN);

const str3 = 'Hello', str4 = 'World';

let concateResult = str3.concat(' ',str4,' ',str2);

console.log(concateResult);

// repeat method - this method is used to whenever you want to more copies a string
// Syntax : string.repeat(count) -- count must be greater than or equal to zero

const str5 = 'abc';

let repeatResult = str5.repeat(0);
console.log(repeatResult);

repeatResult = str5.repeat(1);
console.log(repeatResult);

repeatResult = str5.repeat(2);
console.log(repeatResult);

repeatResult = str5.repeat(3.5);
console.log(repeatResult);

// repeatResult = str5.repeat(-1);
console.log(repeatResult);

// trim, trimStart and trimEnd methods - these methods here are used whenever you want to remove whitespace characters and not changes the original string

// Syntax : string.trim() - removes whitespace from start and end

const str6 = '       Hello world              ';

let trimResult = str6.trim();

console.log(trimResult);

// Syntax : string.trimStart() - removes whitespace from start

const str7 = '       Hello world              ';

let trimStartResult = str7.trimStart();

console.log(trimStartResult);

// Syntax : string.trimEnd() - removes whitespace from end

const str8 = '       Hello world              ';

let trimEndResult = str8.trimEnd();

console.log(trimEndResult);