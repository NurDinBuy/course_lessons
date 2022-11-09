// var array = []

// for (var i = 0; i <= 10; i++) {
//     array.push(i)
// }

// for (var i = 20; i >= 0; i--) {
//     console.log(i)
// }

// var color = prompt('Введите цвет: ')

// if (color === 'зеленый') {
//     alert('Можно идти')
// } else if (color === 'желтый') {
//     alert('приготовиться')
// } else if (color === 'красный') {
//     alert('стоп')
// } else {
//     alert('вводите только цвета светофора')
// }


// function someCalc (sas) {
//     return console.log(sas)
// }
//
// someCalc('Hello')


// function someCalculate (a, b) {
//     return console.log(a + b)
// }
//
// someCalculate(40, 2)
// Function Declaration
// function sayHi() {
//     return console.log('HI')
// }

// Function Expression
// var helloWorld = function  () {
//     return console.log('Hello world!')
// }

// Arrow function
// var doSomething = () => console.log('Hello, I`m arrow function')


// Замыкания

// function init() {
//     var name = prompt('Введите имя: ')
//     function displayName() {
//         console.log(name)
//     }
//     displayName()
// }
// init()


// switch case

// var userAge = Number(prompt('Введите ваш возраст: '))
//
// function age(user) {
//     if (user >= 18) {
//         alert('Доступ разрешен')
//     } else if (user < 18) {
//         alert('До 18  нельзя')
//     } else {
//         alert('Вам надо вводить возраст')
//     }
// }
// age(userAge)

// if (userAge >= 18) {
//     function ageFunc() {
//         alert('Доступ разрешен')
//     }
// } else {
//     function ageFunc() {
//         alert('До 18  нельзя')
//     }
// }
//
// ageFunc()

// switch (userAge) {
//     case 18:
//         alert('Вход разрешен!')
//         break
//     case 16:
//         alert('Доступ запрещен! Ты ещё подросток')
//         break
//     case 12:
//         alert('Доступ запрещен! Ты ещё малыш')
//         break
//     default:
//         alert('Доступ запрещен!')
//         break
// }

// ES5
// var a = 0

// ES6
// let b = 0
// const c = 0


// function inner() {
//     let some = 0
//     return console.log(some)
// }
// inner()