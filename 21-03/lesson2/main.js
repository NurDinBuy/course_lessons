// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)


// setTimeout(() => {
//     console.log('1')
// }, 0)

// setTimeout(() => {
//     console.log('2')
// }, 0)

// console.log('3')
// console.log('4')


// const interval = setInterval(() => {
//     console.log('hi')
// }, 1000)

// console.log(interval)

// setTimeout(() => {
//     clearInterval(interval)
// }, 5000)


// const box1 = document.getElementsByClassName('box')
// console.log(box1[0])


// const box = document.querySelector('.box')
//
// let positionX = 0
// let positionY = 0
//
// const move = () => {
//     if (positionX <= 450) {
//         positionX++
//         box.style.left = `${positionX}px`
//         setTimeout(move, 1)
//     } else if (positionX >= 450 && positionY <= 450) {
//         positionY++
//         box.style.top = `${positionY}px`
//         setTimeout(move, 1)
//     }
// }
// move()


// const doHomeWork = (finish, subject = prompt('Subject?')) => {
//     alert(`starting my ${subject} homework`)
//     finish()
// }

// const alertFinished = () => {
//     alert('DONE!!!')
// }

// doHomeWork(alertFinished)

// const arr = [1, 2, 3, 4, 5, 'Nurdin', 'Hello', 'Fruit', 'Cola', 'Print']
//
// arr.forEach(item => {
//     const block = document.createElement('div')
//     block.setAttribute('class', 'block_g')
//     block.innerHTML = item
//     const wrapper = document.querySelector('.wrapper')
//     wrapper.append(block)
// })

// arr.map( item => console.log(item + 10) )

// const num = (a, b) => console.log(a + b)
//
// num(12, 12)

// const fruits = ['apple', 'banana', 'peach', 'watermelon']
//
// console.log(fruits)
//
// const result = fruits.filter(item => {
//     return item.length > 5
// })

// console.log(result)