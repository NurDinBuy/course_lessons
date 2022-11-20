// ES5
// a = 19
// console.log(a)
//
// var a = 0
// console.log(a)
// ES6

// let b = 0
// console.log(b)

// const g = 0
// g = 19


// if (true) {
//     let a = 12
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

// const COLOR = '#ffeebb'
// COLOR = '#fff'
// console.log(COLOR)

// const arr = [1, 2, 3, 5, 8]
// console.log(arr)
// arr.push(13)
// console.log(arr)


// const obj = {a: 13}
// console.log(obj)
// obj.name = 'Igor'
// console.log(obj)

//
// function sum (a, b) {
//     return console.log(a + b)
// }
// sum(10, 12)

// const sum = (a , b) => console.log(a + b)
// sum(40, 2)

// const cube = num => console.log(num ** 3)
// cube(3)


// setTimeout(function () {
//     console.log('after 5 second')
// }, 5000)


// Context

// function log() {
//     console.log(this)
// }
//
// const arrowFunc = () => console.log(this)
//
// const person = {
//     name: 'Nurdin',
//     age: 19,
//     log: log,
//     arrowFunc: arrowFunc,
//     delayLog: function () {
//         const self = this
//         setTimeout( function () {
//             console.log(`${self.name}, ${self.age}`)
//         }, 500)
//     }
// }

// person.log()
// person.arrowFunc()
// person.delayLog()

// const defaultState = 2
//
// const compute = (a = 12, b = defaultState) => console.log(a + b)
//
// compute(100, 50)

// '' "" ``
// const title = 'Hello'
//
// const template = `
// <h1 id="test" style="color: red">${title}<h1/>
// `
// document.body.append(template)
// console.log(template)

//
// const persons = [
//     {name: 'Nurdin', age: 19},
//     {name: 'Kairat', age: 20},
//     {name: 'Ivan', age: 17},
//     {name: 'Aida', age: 20},
//     {name: 'Milana', age: 15},
//     {name: 'Ahmad', age: 19},
//
// ]
//
// persons.map(person => {
//     const p = document.createElement('p')
//     document.body.append(p)
//     p.append(`Name: ${person.name}, Age: ${person.age}`)
// })

// const str = 'Hello'

// console.log(str.trimEnd())
// console.log(str.trimStart())
// console.log(str.trim())

// console.log(str.startsWith('Hfel'))
// console.log(str.toUpperCase().endsWith('O'))
// console.log(str.repeat(10))

// console.log(str.includes('v'))
// let a = 'NUR'
// console.log(str.padStart(8, a))
// console.log(str.padEnd(8, a))