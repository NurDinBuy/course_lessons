// console.log('Hi')

// console.log('Loading...')
// setTimeout(() => {
//     const product = {
//         name: 'Product name',
//         price: '$680'
//     }
//     console.log(product, '1 step')
//     setTimeout(() => {
//         product.soldOut = true
//         console.log(product, '2 step')
//     }, 3000)
// }, 1000)
//
//
// console.log('Loading...')
// const request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const product = {
//             name: 'Product name',
//             price: '$680'
//         }
//         console.log(product, '1 step')
//         resolve(product)
//         reject()
//     }, 2000)
// })
//
// const resolveData = (product) => {
//     setTimeout(() => {
//         product.soldOut = true
//         console.log(product, '2 step')
//     }, 1000)
// }
//
// const rejectData = () => console.log('ERROR')
//
//
// request.then(resolveData, rejectData)


// console.log('Loading...')
// const request = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const product = {
//             name: 'Iphone XX',
//             price: '$1400'
//         }
//         console.log(product, '1 step')
//         resolve(product)
//         reject()
//     })
// })
//
// request.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.soldOut = true
//             console.log(product, '2 step')
//             resolve(product)
//         }, 2000)
//     })
// }, () => {
//     console.log('ERROR')
// }).then((product) => {
//     product.isModified = false
//     product.soldOut = false
//     console.log(product, '3 step')
// }).catch(() => {
//     console.log('ERROR')
// }).finally(() => {
//     console.log('FINALLY')
// })

// fetch()

// fetch('https://jsonplaceholder.typicode.com/todos/2').then(response => response.json()).then(json => console.log(json))

// fetch('https://jsonplaceholder.typicode.com/todos', {
//     method: 'GET',
//     headers: {
//         'Content-type': 'application/json'
//     }
// }).then((response) => response.json()
// ).then((data) => {
//     data.forEach(item => console.log(item))
// })
const block = document.querySelector('.block')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
let count = 1

btnNext.onclick = () => {
    count++
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            const div = document.createElement('div')
            div.setAttribute('class', 'card')
            div.innerHTML = `
            <h2>${data.title}</h2>
            <span>${data.id}</span>
            <h3>${data.completed}</h3>
        `
            block.append(div)

        })
}