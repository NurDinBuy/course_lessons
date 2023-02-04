// console.log('hi')

// var arr = ['a', 'b', 'c', 'd', 'e']
//
// console.log(arr[5]);

// console.log(arr)

// const obj = {
//     name: 'Nurdin',
//     age: '19',
//     isMarried: false,
// }
//
// console.log('Имя: ' + obj.name)
// console.log('Возраст: ' + obj.age)



// Переопределение переменных

// var num = 10
//
// num = 'hello'
//
// console.log(num)

// Циклы

// 1. while

// var count = 0
//
// while (count < 10) {
//     console.log(count += 1)
// }

// console.log(count = count + 1)
// console.log(count += 1)

// 2. for

// for ( var i = 0; i <= 10; i++ ) {
//     console.log(i)
// }

// var arr = [1, 2, 3, 4, 5, 6, 'num']
//
// for (var item = 0; item < arr.length; item++) {
//     console.log(arr[item] ** 2)
// }


// console.log(arr)

// var i = 0
// for (i; i <= arr.length; i++ ) {
//     console.log(i + 10)
// }



// 3. for of

// var arr = [1, 2, 3, 4, 5, 6 ]

// for (var num of arr) {
//     console.log(num * 2)
// }

// for (var symbol of 'Nurdin') {
//     console.log(symbol)
// }

// 4. for in

// var obj = {
//     string: 'some str',
//     number: 42,
//     'key': {
//         name: 'Nurdin'
//     },
//     [null]: true
// }

// console.log(obj["string"])

// console.log(obj.key.name)

// for (var key in obj) {
//     // console.log(obj[key])
//
//     console.log(`Ключ объекта: ${key}, значение: ${obj[key]}`)
// }


// var str = 'Nurdin'
// console.log(str)
// var revName = str.split('').reverse().join('')
// console.log(revName)
// var arr = str.split('')
// arr.reverse()
// var joinArr = arr.join('')
// console.log(arr)
// console.log(joinArr)

// var arr = ['a', 'b', 'c', 'd']

// console.log(arr)
// arr.reverse()
// console.log(arr)

// var newStr = arr.join(' ')
// console.log(newStr)

// arr.push('e') // метод push() добавит элемент в конец массива
// arr.unshift('e') // метод unshift() добавит элемент в начало массива
// arr.pop() // метод pop() удалит элемент с конца массива
// arr.shift() // метод shift() удалит элемент сначала массива
// arr.splice(0, 2, 'e')
// arr.splice(-1)

// var newArr = arr.slice(0, 2)
//
// console.log(newArr)
// console.log(arr)