// 1. 
let result = 5 + 5 + "5";
console.log(result); 
console.log(typeof result); 

// 2.
let email = "radzibabavasil4@gmail.com";
if (email.includes("@")) {
  console.log("Email містить символ @");
} else {
  console.log("Email не містить символ @");
}
console.log("Загальна кількість символів в email:", email.length);

// 3. 
let word1 = "My";
let word2 = "name";
let word3 = "is";
let fullName = `${word1} ${word2} ${word3} Viktor`;
console.log(fullName); // Виведе 'My name is Viktor'

// 4. 
let userName = "Василю";
let payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
