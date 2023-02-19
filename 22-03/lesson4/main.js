// const obj = {
//     name: 'nurdin',
//     age: 19
// }
//
// const data = JSON.stringify(obj)
//
// const newObj = JSON.parse(data)
// console.log(JSON)
// console.log(newObj.name)
// console.log(typeof data)
// console.log(obj)

// const btn = document.querySelector('.btn')
//
// btn.addEventListener('click', () => {
//     const request = new XMLHttpRequest() // создание запроса
//     request.open("GET", "data.json") // объявление метода запроса и указание пути
//     request.setRequestHeader("Content-type", "application/json") // указывание заголовка
//     request.send() // отправка запроса
//
//     request.addEventListener('load', () => {
//         const data = JSON.parse(request.response)
//         document.querySelector('.name').innerHTML = data.name
//         document.querySelector('.age').innerHTML = data.age
//     })
// })

// string undefined null boolean number NaN - primitive
// obj, arr - obj [ссылочные]

// let a = 'Hello'
// let b = a = 10
//
// console.log(b)

// const obj1 = {
//     name: 'John',
//     age: '24'
// }
// obj1.name = 'Rose'
// const obj2 = obj1
// obj2.name = 'Rose'
// console.log(obj1)
// console.log(obj2)
// const obj2 = { ...obj1 }
// obj2.name = 'Rose'
//
// console.log(obj1)
// console.log(obj2)
