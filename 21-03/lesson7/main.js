// // const cityName = document.querySelector('.cityName')
// const apiKey = 'e417df62e04d3b1b111abeab19cea714'
// const cityName = document.querySelector('.city')
// const temp = document.querySelector('.temp')
//
// const citySearch = () => {
//     const cityNameValue = document.querySelector('.cityName')
//     cityNameValue.addEventListener('input', (e) => {
//         const cityNameValueTarget = e.target.value
//         fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityNameValueTarget}&appid=${apiKey}`)
//             .then(resp => resp.json())
//             .then(data => {
//                 cityName.innerHTML = data.name ? data.name : 'Город не найден...'
//                 temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273) + '&deg' + 'C' : '...'
//             })
//     })
// }
//
// citySearch()



// const delay = (ms) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve()
//         }, ms)
//     })
// }
//
// const url = 'https://jsonplaceholder.typicode.com/todos/1'
//
// const fetchData = () => {
//     console.log('start!')
//     return delay(2000)
//          .then(() => fetch(url))
//         .then((resp) => resp.json())
// }
//
// fetchData()
//     .then(data => console.log(data))
//     .catch(() => console.error('ERROR'))
//     .finally(() => console.warn('DONE'))



//
const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

const url = 'https://jsonplaceholder.typqwertyicode.com/todos/1'


const fetchData = async () => {
    try {
        console.log('Start...')
        await delay(2000)
        const resp = await fetch(url)
        const data = await resp.json()
        console.log(data)
    } catch {
        console.error('ERROR')
    } finally {
        console.warn('DONE!')
    }
}

fetchfData()