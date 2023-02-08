// console.log('Hello world!')

// Регулярный выражения

// Флаги

// i - регистронезависимый поиск

// const string = prompt('Введите ваше имя...')
//
// const regExp = /n/i
//
// console.log(string.match(regExp))

// g - глобальный поиск

// const symbols = 'AaaaaBbbbCcccDdddccccc'
//
// const regExp = /c/ig
//
// console.log(symbols.match(regExp))

// const numbers = '1231asdfg23123sdfgh1231qwert23'

// const regExp = /\w/g

// console.log(numbers.match(regExp))
// console.log(numbers.replace(regExp, '*'))


// DOM

// const phoneInput = document.querySelector('#phoneInput')
// const phoneCheck = document.querySelector('#phoneCheck')
// const phoneResult = document.querySelector('.phoneResult')
//
// const regExp = /^\+996 \d{3} \d{2} \d{2} \d{2}$/
//
// phoneCheck.onclick = () => {
//     if (regExp.test(phoneInput.value)) {
//         phoneResult.innerHTML = 'OK'
//         phoneResult.style.color = 'green'
//     } else {
//         phoneResult.innerHTML = 'NOT OK'
//         phoneResult.style.color = 'red'
//     }
// }

// Рекурсия

// let num = 0
//
// const count = () => {
//     num++
//     console.log(num)
//     if (num < 500) {
//         count()
//     }
// }
//
// count()

// const peoples = {
//     John: {
//         age: 27,
//         parents: {
//             Nick: {
//                 age: 50,
//                 parents: {
//                     Nick: {
//                         age: 50
//                     },
//                     Stella: {
//                         age: 48
//                     }
//                 }
//             },
//             Stella: {
//                 age: 48,
//                 parents: {
//                     Nick: {
//                         age: 50
//                     },
//                     Stella: {
//                         age: 48
//                     }
//                 }
//             }
//         }
//     },
//     Dave: {
//         age: 15,
//         parents: {
//             Kelly: {
//                 age: 40,
//                 parents: {
//                     Nick: {
//                         age: 50
//                     },
//                     Stella: {
//                         age: 48,
//                         parents: {
//                             Nick: {
//                                 age: 50
//                             },
//                             Stella: {
//                                 age: 48
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     },
//     Ahmed: {
//         age: 20,
//         parents: {
//             Magamed: {
//                 age: 45
//             }
//         }
//     }
// }

// console.log(peoples)

// const parentsList = (obj) => {
//     if (obj.parents) {
//         for (let key in obj.parents) {
//             parentsList(obj.parents[key])
//             console.log(key)
//         }
//     } else {
//         console.log('Parents is not fined')
//     }
// }
//
// for (let key in peoples) {
//     parentsList(peoples[key])
// }
