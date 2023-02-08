// Functions - Функции

// function declaration

// function calc (a, b) {
//     return console.log(a + b)
// }
//
// calc(12 )


// function expression
// var calcEx = function (a , b) {
//     return console.log(a / b)
// }
//
// calcEx(2, 30)


// arrow function

// var calc = (a, b ) => {
//     console.log(a * b)
// }
//
// calc('a', 'num')


// lambda function

// var pop = str => console.log(str)
//
// pop('Hello')

// Замыкание

// function init() {
//     var name = prompt('Имя')
//
//     var displayName = () => {
//         alert(name)
//     }
//     displayName()
// }
//
// init()


// var userAge = Number(prompt('Возраст'))
//
// var age = function (user) {
//     if (user >= 18) {
//         console.log('OK')
//     } else if (user < 18) {
//         console.log('NOT OK')
//     } else {
//         console.log('ERROR')
//     }
// }
//
// age(userAge)

//
// var userAge = Number(prompt('Возраст'))
//
// if (userAge >= 18) {
//     function ageFunc() {
//         console.log('OK')
//     }
// } else {
//     function ageFunc() {
//         console.log('NOT OK')
//     }
// }
//
// ageFunc()

// function ageFunc() {
//     console.log('Age')
// }
//
// function func(fn) {
//     return fn()
// }
//
// func(() => console.log('hello'))

// function* generator() {
//     console.log(yield 1)
//     // yield 1
//     // yield 2
//     // yield 3
// }
//
// var genr = generator()
// console.log(genr.next());

// ES5
// console.log(number)
// var number = 0
// number = 10
// console.log(number)

//ES6

// console.log(num);
// let num = 0

// num = 10
// console.log(num)

// const numC = 0

// let name = 'Nurdin'

// function global(){
//     let name = 'John'
//     return console.log(name)
// }
//
// console.log(name)
// global()


