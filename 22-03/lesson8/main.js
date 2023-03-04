// console.log('hello')
// const URL = 'https://jsonplaceholder.typicode.com/posts'
// const wrapper = document.querySelector('.wrapper')

// let check = false

// const array = wrapper.classList.toggle('second', check)
// console.log(array)

// array.forEach(item => {
//     console.log(item)
// })

// console.dir(wrapper)


//
// const fetchNews = async (url) => {
//     try {
//         const response = await fetch(url)
//         const data = await response.json()
//         data.slice(0, 10).forEach(item => {
//             const block = document.createElement('div')
//             block.setAttribute('class', 'block')
//             block.innerHTML = `
//             <img src="data:image/png;base64,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" alt="#">
//             <h3>${item.title}</h3>
//             <p>${item.body}</p>
//         `
//             wrapper.append(block)
//         })
//     } catch {
//         console.log('ERROR')
//     } finally {
//         console.log('FINALLY')
//     }
// }
// fetchNews(URL)

// let str = prompt('Name')
// const regExp = /n/gi
// console.log(str.match(regExp))

// const input = document.querySelector('input')