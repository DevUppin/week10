// for (let i = 0; i < 1000000; i++) {
//     console.log(i);

// }
// let input = "";
// do {
//     input = prompt("Enter your name: ");
// } while (!isNaN(Number(input)));

// // alert("Hello" + input);
// alert("Hello ${input)") 

// let fruits = ['Apples', 'Bananas'];
// fruits.push("Orange");
// // fruits.pop();
// // fruits.unshift("Mango")
// // console.log(fruits)

// for (let i = 0; i < fruits.length; i++);
// console.log(fruits[i])


// for item of fruits



let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};
let students = [student1, student2, student3];

for (let item of students){
    if(item.program === "CIT" && item.ID > 3) {
        console.log(item);
        counter = counter +1 ;
    }
}


// const person = {
//     name:['Bob', 'Smith'],
//     age:32,
//     gender:'male',
//     hobbies :['music', 'skiing']
// }
// console.log('my name is ${person.name[0]}') 