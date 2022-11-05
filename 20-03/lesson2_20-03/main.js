// ES5

// undefined
// var variable // undefined - не определенная переменная

// null
// var someVar = null

// var number = 12
// typeof - оператор выявления типа данных


// Array (Массивы)

// var arr = [1, 'str', true, 4, 10, ['inner', 12], 'end']

// ES6

// var arr2 = [1, 2, 3, 4]

// var obj = {
//     name: 'Nurdin',
//     id: 1
// }


// ES5
// var arr3 = new Array([1, 2, 3, 4])

// var obj = new Object({
//     name: 'Nurdin',
//     id: 1
// })

// ES5
// console.log('Имя пользователя: ' + obj.name + '\nID пользователя: ' + obj.id)

// Циклы

// 1. while

// var count = 0
//
// while (count < 10 ) {
//     console.log(count = count + 1 )
// }

// 2. do while

// var count = 0
// do {
//     console.log(count)
// } while (count < 10)

// 3. for

// console.log(array)

// ES5
// for (var i = 0; i < array.length; i++) {
//     console.log(array[i] ** 2)
// }

// 4. for of

// ES6
// var array = [2, 4, 45, 753, 12, 1234]
//
// for (var item of array ) {
//     console.log(item * 3)
// }


// Переопределение переменных
// var someone = 0
// console.log(someone)

// someone = 10
// console.log(someone)

// методы массивов

// var newArr = [2, 3]

// newArr.push(1) // - добавляет элементы в конец
// newArr.unshift(12) // – добавляет элементы в начало
// console.log(newArr)
//
// newArr.pop() // - извлекает элемент из конца
// console.log(newArr)
// newArr.shift() // - извлекает элемент из начала
// console.log(newArr)

// var arr = ['a', 'b', 'c']
// delete arr[2]

// var obj = {
//     string: 'some str',
//     'key': 42,
//     21: false,
//     sayHi() {
//         console.log('HI')
//     },
//     about: ['1', 23],
//     [null]: {
//         name: 'Nurdin'
//     }
// }

// console.log(obj[null].name) // log вложенных объектов

// 5. for in

// for (var key in obj) {
//     console.log(`Ключ объекта: ${key} \nЗначение ключа: ${obj[key]}`) // интерполяция строк
// }