// ES5

// a = 10
// a = 15
// console.log(a)

// var a = 10
// console.log(a)

// ES6

// let b = 0
// const g = 0

// const arr = ['Nurdin', 'Gleb']
// arr[0] = 'Ivan'
// arr.push('Sanya')
// console.log(arr)

// const obj = {
//     name: 'Nurdin',
//     age: 19
// }
//
// obj.age = 25 // Год спустя...
// obj.name = 'Gleb' // 5лет спустя
// console.log(obj)

// if (true) {
//     // let a = 12
//     var a = 12
// }
// console.log(a)


// hoisting

// function hoisted() {
//     age = 20
// }
//
// let age
// hoisted()
// console.log(age)

// function number () {
//     return console.log(10)
// }

// expression arrow lambda функция высшего порядка
// const sum = numFunc => numFunc()
// sum(number)

// Context
// console.log(this)

// function logger() {
//     console.log(this)
// }

// const arrowLogger = () => console.log(this)
// logger()

// setTimeout(() => {
//     console.log('Hi')
// }, 5000)

// const person = {
//     name: 'John Wick',
//     age: 40,
//     logger: logger,
//     arrow: arrowLogger,
//     delay: function () {
//         console.log(this.name)
//     },
//     delayLog: function () {
//         const self = this
//         setTimeout(function () {
//             console.log(`name: ${self.name}, age: ${self.age}`)
//         }, 500)
//     }
// }

// person.delayLog()
// person.delay()
// person.logger()
// person.arrow()

// const str = '     Hello World     '
const str = 'Hello World'

// console.log(str.trimEnd())
// console.log(str.trimStart())
// console.log(str.trimLeft())
// console.log(str.trimRight())
// console.log(str.trim())

// console.log(str.startsWith('Hello'))
// console.log(str.toUpperCase())
// console.log(str.toLowerCase())

// console.log(str.repeat(100))
// console.log(str.includes('o W'))

// let a = 'POP'
// console.log(str.padStart(14, 'POP'))
// console.log(str.padEnd(14, 'POP'))
// const random = Math.random()

// Hello => olleH