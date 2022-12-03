// variable - переменная
// Примитивные типы данных
// var number = 13.12 // number
// var string = 'Nurdin' // string
// var boolean1 = false // boolean
// var boolean2 = true // boolean
// var neopr // undefined
// var pustota = null // null

// Не примитивные типы данных (ссылочные)

// Array - Массив
// var arr = [1, 2, 3, 4]
// console.log(typeof arr)

// Object - Объекты
// var obj = {a: 1, b: 2, c: 3}
// console.log(typeof obj)

// typeof - оператор для определения типов данных в JS
// console.log(typeof number)
// console.log(typeof string)
// console.log(typeof boolean1)
// console.log(typeof boolean2)
// console.log(typeof neopr)
// console.log(pustota)

// Операторы (Математические / Условные )

// console.log(12 + 40)
// console.log(12 - 40)
// console.log(40 / 2)
// console.log(40 * 2)
//
// console.log(10 < 100)
// console.log(10 > 100)
// console.log(10 >= 11)
// console.log(10 <= 100)
// console.log(10 === 100)
// console.log(10 !== 100)
// console.log('10' === 10)

// console.log(true && false) // Оператор логическое 'И'
// console.log(false || false) // Оператор логическое 'Или'


// Условная конструкция if, else if, else

// if (10 > 100) {
//     console.log('Меньше')
// }


// alert('Hello')
// window.alert('Hello')
// window.confirm('Hello')

// document.write('Hello World!')

// prompt('Введите что нибудь')

// var age = Number(prompt('Введите ваш возраст?'))
//
// if (age >= 18 || age > 50) {
//     alert('вход разрешен!')
// } else if (age <= 17) {
//     alert('доступ закрыт!')
// } else {
//     alert('Надо вводить возраст!')
// }

var colors = prompt('Choice color! (red, yellow, green)').toLowerCase()

switch (colors) {
    case 'red':
        alert('STOP!')
        break
    case 'yellow':
        alert('Wait!')
        break
    case 'green':
        alert('GO')
        break
    default:
        alert('Choice color! (red, yellow, green)')
        break
}