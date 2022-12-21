// ES5

// var num = 0

//ES6

// let num = 0
// const COLOR = '#ffffff'


// b = 20
// console.log(b)

// let a = 10
//
// if (true) {
//     // a = 12
//     console.log(a)
// }

// hoisting

// b = 20
// console.log(b)

// function hoisted() {
//     age = 20
// }
//
// let age
// hoisted()
// console.log(age)

// const color = '#ffffff'
// color = 'f999999'

// ES5
// const array = new Array([1, 2, 3, 4, 5])
//
// console.log(array)
// array.push(6)
// console.log(array)

// const object = new Object({
//     name: 'Nurdin',
//     age: 19
// })
// object.name = 'Aibek'
//
// console.log(object)

// ES6
//
// const arr = [1, 2, 3, 4, 5]
// console.log(arr)
// arr.push(6)
// console.log(arr)

// const object = {
//     name: 'Igor'
// }
//
// console.log(object)

//ES5

// const persons = ['Nurdin', 'Feliks', 'Ilya', 'Atai', 'Igor']
//
// function sum(array) {
//     return array
// }
//
// // sum(persons)
// console.log(sum(persons));

// ES6


// const persons = ['Nurdin', 'Feliks', 'Ilya', 'Atai', 'Igor']
//
// const sum = (array) => array
//
// console.log(sum(persons))

// const returnMin = (a = Number(prompt('a')), b = Number(prompt('b'))) => {
//     alert(Math.min(a, b))
// }
// returnMin()

// let calc = 10 / 3
// console.log(typeof calc.toFixed(0))
// console.log(typeof Math.floor(calc))

// const calc = (a , b = 0) => console.log(a + b)
//
// calc(10, 32)

// Context

// let obj = this
//
// console.log(obj)
// console.log(Object)
// console.log(this);

// function log() {
//     console.log(this)
// }
//
// const arrowLog = () => console.log(this)
//
// const person = {
//     name: 'Nurdin',
//     age: 19,
//     logThis: log,
//     arrowFunc: arrowLog,
//     delayLog: function () {
//         // const self = this
//         setTimeout( () => {
//             console.log(`name: ${this.name} age: ${this.age}`)
//         }, 500)
//     }
// }
//
// person.delayLog()
// person.logThis()

// '' "" ``
//
// const title = 'Hello world!'
//
// const template = `
//     <h1 style="color: red">${title}</h1>
// `
//
// document.body.append(template)

// const persons = [
//     {name: 'Nurdin', age: 19},
//     {name: 'Kairat', age: 20},
//     {name: 'Ivan', age: 17},
//     {name: 'Aida', age: 20},
//     {name: 'Milana', age: 15},
//     {name: 'Ahmad', age: 19},
// ]

// persons.forEach(person => {
//     const h1 = document.createElement('h1')
//     document.body.append(h1)
//     h1.append(`Name: ${person.name}, Age: ${person.age}`)
// })

// persons.map(person => {
//     const h1 = document.createElement('h1')
//     document.body.append(h1)
//     h1.append(`Name: ${person.name}, Age: ${person.age}`)
// })