// DOM - document object modal


// console.log(document);
// document.body.style.background = 'blue'

// window.alert('Hello')
// console.log('Hello')

// const arr = [1, 2, 3, 4, 5]

// const h1 = document.getElementsByClassName('name')
// console.log(h1)
// console.log(h1[1])

// const btn = document.getElementById('btn')
// btn.style.width = '300px'
// btn.style.height = '300px'
// btn.style.color = 'red'
// console.log(btn)

// const tag = document.getElementsByTagName('button')

// const element = document.querySelector('#btn')
// const element = document.querySelector('button')
// const elements = document.querySelectorAll('.name')

// const h1 = document.querySelector('.name')
// h1.innerHTML = 'hello from JS'

const btn = document.getElementById('btn')

// btn.addEventListener('click', (event) => {
//     console.log(event)
// })

// btn.addEventListener('click', () => console.log('You click me!'))
// btn.onclick = () => console.log('you click me!')

// function clickFunc() {
//     console.log('Click me')
// }

// btn.addEventListener('click', clickFunc)

// const posX = document.getElementById('posX')
// const posY = document.getElementById('posY')
//
// window.addEventListener('mousemove', event => {
//     posX.innerHTML = event.screenX
//     posY.innerHTML = event.screenY
// })

// Методы массивов

// filter()

// const fruits = ['apple', 'pineapple', 'peach', 'grape', 'banana', 'orange', 'watermelon']
// console.log(fruits)
//
// const filteredFruits = fruits.filter((fruit) => {
//     return fruit.length < 6
//     // console.log(fruit)
// })
// console.log(filteredFruits)


// map()

// const numbers = [2, 34, 56, 89, 100, 43]
// console.log(numbers)
// const newNumbers = numbers.map((number) => {
//     return number * 2
//     // console.log(number)
// })
// console.log(newNumbers)

// forEach()

// const numbers = [2, 34, 56, 89, 19]
//
// numbers.forEach((number) => {
//     return console.log(number ** 2)
// })

// console.log(numbers);

// indexOf()

// const arr = [1,  false, 30]
// console.log(arr)
// console.log(arr.indexOf(false));


// find()
// const searchedUser = prompt('Кого ищете?')
//
// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"},
//     {id: 4, name: "Нурдин"},
//     {id: 5, name: "Айбек"},
//     {id: 6, name: "Юрий", aboutMe: 'Я такойто разработчик мне столько лет я люблю рисовать'},
// ];
//
// let user = users.find((item) => {
//     return  item.name === searchedUser
// });
// document.write(user.aboutMe)
// console.log(user)
// alert(user.name);

const wrapper = document.querySelector('.wrapper')

const newDiv = document.createElement('div')
newDiv.setAttribute('class', 'newDiv')
wrapper.append(newDiv)
// console.log(newDiv)