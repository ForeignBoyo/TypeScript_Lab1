//boolean
let flag: boolean = true;
console.log("Value assigned to flag is: " + flag);

//string 
let myString:string = "Hello";
console.log(myString);

//number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

//array
let list: Array <number> = [1 , 2, 3];
console.log(list[0]);

//any
let notSure: any = 4;
notSure = "maybe a string instead";
console.log("Value is a string: " + notSure + ".");
notSure = false;
console.log("Now value is a boolean: " + notSure + ".");