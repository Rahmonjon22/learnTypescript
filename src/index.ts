// tsc index.ts compiles the tsc into js
// console.log('Hello World');

// it specifies if it is number or string
// let age: number = 20;

// configuring the typescript compiler
// tsc --init
// edit tsconfig.json and add src file and add index.ts and write tsc in terminal



// Debugging the Typescript applications
// 1 go to the debugging and launch the progam
// 2 you will see variables and watch. and each breaking point you can see the result

// let age: number = 20;
// if (age < 50)
// age += 10;
// console.log(age);

// Typescript has the following
// any
// unkown
// never
// enum
// tuple

// let sales: number = 123_456_789;
// let course: string = 'TypeScript';
// let is_published: boolean = true;
// we dont have to annotate it all the time so we can remove it and it knows itself

// let sales = 123_456_789;
// let course = 'TypeScript';
// let is_published = true;
// let level;
// function render(document){
//     console.log(document);
// }


// let numbers: number[] = [1, 2, 3];

// let numbers: number[] = [];
// numbers.forEach(n => n.toFixed)

// Tupples are usefull for two values
// let user: [number, string] = [1, 'Mosh'];


// Enums

// const small = 1;
// const medium = 2;
// const large = 3;

// pascalCase
// const enum Size { Small = 1, Medium, Large };

// let mySize: Size = Size.Medium;

// console.log(mySize);


// Functions

function calculateTax(income: number, taxYear: number): number {
  
   if(income < 50_000) 
   return income * 1.2;
   return income *1.3
}