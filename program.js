


// console.log("hello node js")

// console.log("Running class.js");

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name}.`);
//   }
// }

// const person1 = new Person("Sujithra");
// person1.greet();




// print initial an name


// const prompt = require('prompt-sync')({ sigint: true });

// const a = prompt("Enter a string:")

// const match = /^[A-Za-z]+\w [A-Z] [A-Z]/

// if (match.test(a)) {
//     console.log("It accepted")
// } else {
//     console.log("Not accepted")
// }


// want to accept condition number


// const prompt = require('prompt-sync')({ sigint: true });

// const a = prompt("Enter a number:")

// const match = /^[6-9][0-9]\d{9}|[2-9]\d{8}|[13][0-9]\d{4}|[2][0-9]\d{8}|[6][0-9]\d{7}$/

// if (match.test(a)) {
//     console.log("It accepted")
// } else {
//     console.log("Not accepted")
// }


//  to find total cost of the produts



// const prompt = require('prompt-sync')({ sigint: true });

// const a = prompt("Enter a item:")

// const count= prompt("how many products do you want? ")

// const input = prompt("Enter items separated by commas: ")

// const itemList = input.split(',')

// let items = [{
    
//     name: "rice",
//     price: 300
// },
// {
//     name: "wheat",
//     price: 50
// },
// {
//     name: "oil",
//     price: 250
// },
// {
//     name: "ragi",
//     price: 32
// },
// {
//     name: "pen",
//     price: 10
// }]
 
// let totalprice = 0

// for(let i = 0; i < items.length; i++){
//     if(items[i].name===a){
//         console.log("item",items[i].name ,"price",items[i].price)
//         totalprice+=items[i].price
//     } 
//     else {
//         console.log("not found")
//     }
// }
// console.log("totalprice", totalprice)



//  to accept all mail format


// const prompt = require('prompt-sync')({ sigint: true });

// const a = prompt("Enter a mail:")
 
// const match = /^[a-zA-z0-9._%&]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/

// if (match.test(a)) {
//     console.log("It accepted")
// } else {
//     console.log("Not accepted")
// }



// const prompt = require('prompt-sync')({ sigint: true });

// const count =prompt(" how many item do you want? ")

// let items = [{
    
//     name: "rice",
//     price: 300
// },
// {
//     name: "wheat",
//     price: 50
// },
// {
//     name: "oil",
//     price: 250
// },
// {
//     name: "ragi",
//     price: 32
// },
// {
//     name: "pen",
//     price: 10
// }]
 
// let totalprice = 0

// for(let i = 0; i < count; i++){
//     const a = prompt("Enter item " + (i + 1) + " ")
//     let found = false
//     for (let j = 0; j < items.length; j++) {
//     if(items[j].name===a){
//         console.log("item",items[j].name ,"price",items[j].price)
//         totalprice+=items[j].price
//         found = true
      
//     } 
//   }

//     if(!found){
//         console.log("not found")
//     } 
//   }



// console.log("totalprice", totalprice)


// for(let i = 0; i<=20;i++) {
//     if(i%3===0 && i%5===0){
//         console.log("FIZZBUZZ")
//     }
//     else if(i%3===0){
//         console.log("FIZZ");
//     else if(i%5===0){
//         console.log("BUZZ");
//     } else{
//         console.log(i)
//      }
// }
// }


// fizz buzz

for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ");
    } else if (i % 3 === 0) {
        console.log("FIZZ");
    } else if (i % 5 === 0) {
        console.log("BUZZ");
    } else {
        console.log(i);
    }
}


// nested array into single array

let arr = [[1,2],3,[4,5,6],8,9]
let combined=[]
console.log(combined.concat(...arr))


//      console.log ("    *")
//     console.log(" *     *")
//  console.log("    *      *     *")
//   console.log("*      *")
//     console.log ("    * ")



//  print stars in diamond

console.log("    *")
console.log("  *   *")
console.log("*   *   *")
console.log("  *   *")
console.log("    *")


// print * by length 

let input = "treemangoisbeayutifiul"
let wait= "*".repeat(input.length)
for(let i = 0;i<=input.length;i++ ){
console.log(wait)}


// print loss and salary


// const prompt = require('prompt-sync')({ sigint: true });

// const salary = Number(prompt("Enter a salary: "))

// const leave =Number(prompt("Enter a leave days: "))

// const totaldays = Number(prompt("Enter days: "))

// let freeleave = 1

//  let perDay = salary / totaldays

//  let paidLeaves = leave - freeleave

//  let loss = paidLeaves * perDay

//  let finalSalary = salary - loss

//  let presentDays = totaldays - leave

//  console.log("monthly salary:" ,salary)

// console.log("total leave:", leave)

// console.log("perday:",perDay)

// console.log("leave days", paidLeaves)

// console.log("loss:", loss)

// console.log("final salary",finalSalary)

// console.log("present days",presentDays)


// let n = 3
// for(i = 1;i <= n; i++){
//     let line = ""
// for(j = 1; j <= n-i; j++){
//      line += "  "
// }
// for(k = 1;k <= i; k++){
//      line += "*   "
// }
//     console.log(line.trimEnd())

// }

// for(i = n-1; i>= 1; i--){
//     let line = ""
// for(j = 1; j <= n-i; j++){
//      line += "  "
// }
// for(k = 1;k <= i; k++){
//      line += "*  "
// }
//     console.log(line.trimEnd())

// }
// console.log(line)

// const prompt = require('prompt-sync')({ sigint: true });

// const salary = Number(prompt("Enter a salary"))

// const leave =Number(prompt())

// const totaldays = number(prompt())

// console.log("salary" , salary)


