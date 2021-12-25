//1. შექმენით 5 ელემენტიანი მასივი, რომლის თვითვეული ელემენტი არის რიცხვი,
// console.log გამოიტანეთ ამ მასივის ყველა ელემენტის ჯამი.

// პირველი ხერხი
const example = [5, 25, 30, 20, 20];
let total = 0;
for(let i = 0; i < example.length; i++){
    total = total + example[i];
}
console.log(`total is ${total}`);

// მეორე ხერხი...
let total2 = example[0] + example[1] + example[2] + example[3] + example[4];
console.log(total2);

/*2. შექმენით 3 ელემენტიანი მასივი, რომლის თვითვეული ელემენტი არის ობიექტი
რომელსაც აქვს შემდეგი ველები (properties): name, age, address.
 */
const example2 = [
    {name: "Nika", age: 23, addres:"leonidze street"},
    {name:"Gio", age: 25, addres:"shartava street"},
    {name:"Nino", age: 22, addres:"kostava street"}
];
//3. console.log ში გამოიტანეთ 3 სტრინგი
console.log(`My name is ${example2[0].name}, my age is ${example2[0].age}, my addres is ${example2[0].addres}.`);
//4. დაწერეთ if / else statement
if(example2[0].age < 19){
    console.log("I am a teenager");
} else{
    console.log("I am an adult");
}