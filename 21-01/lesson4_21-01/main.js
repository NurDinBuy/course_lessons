// const minNum = (num1, num2) => (num1 < num2) ? alert(num1) : alert(num2)
// minNum(9, 2)

// const userWord = prompt('Введите что либо: ').trim()
// const lenString = (word) => alert('Длина строки: ' + word.length)
// lenString(userWord)


// DOM tree === ДОМ дерево

// console.log(document.body)

// window.alert()
// window.confirm('Hello')

// const h1 = document.getElementById('text') // только 1 элемент
// const h1 = document.getElementsByClassName('text') // не очень хороший выбор // много элементов
// const h1 = document.querySelector('#text') // только 1 элемент
// const h1 = document.querySelector('.text')
// console.log(h1);


// const btns = document.getElementsByClassName('button')
// const buttons = document.querySelectorAll('.button') // много элементов

// for (let button of buttons) button.addEventListener('click', (e) => document.body.style.background = e.target.innerText)
// for (let button of buttons) button.onclick = (e) => document.body.style.background = e.target.innerText

// const posX = document.getElementById('posX')
// const posY = document.getElementById('posY')
//
// window.onmousemove = e => {
//     posX.innerHTML = e.screenX
//     posY.innerHTML = e.screenY
// }

// методы массивов

// filter()

// const fruits = ['apple', 'pineapple', 'peach', 'grape']
//
// console.log(fruits);
//
// const result = fruits.filter(fruit => fruit.length === 12)
//
// console.log(fruits);
// console.log(result)

// map()

// const numbers = [2, 21, 120, 89]
//
// const newNumbers = numbers.map(num => num * 2)
//
// console.log(numbers);
// console.log(newNumbers)

// forEach()

// const numbers = [2, 34, 56, 89, 'dfg', 19, false]
//
// let count = 0
//
// numbers.forEach((element) => {
//     console.log(element)
//     count++
// })
//
// console.log(`Количество элементов: ${count}`)

// slice()

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
//
// console.log(animals)
//
// let slicedAnimals = animals.slice(2)
//
// console.log(slicedAnimals)