// const input = document.getElementById('int')
// const words = document.getElementById('words')
//
// const reverseWord = e => {
//     let arr = []
//     arr.push(input.value)
//     arr.map(word => {
//         const p = document.createElement('p')
//         words.append(p)
//         p.append(word.split('').reverse().join(''))
//     })
// }
//
// input.onkeydown = e => {e.keyCode === 13 ? reverseWord() : false }

//
// const animal = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// }
//
// class Animal {
//
//     static type = 'ANIMAL'
//
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//
//     voice() {
//         console.log('I am animal!')
//     }
// }
// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true
// })

// class Cats extends Animal {
//
//     static type = 'CAT'
//
//     constructor(options) {
//         super(options)
//         this.color = options.color
//         this.eyeColor = options.eyeColor
//     }
//
//     voice() {
//         console.log('I am Cat!')
//     }
//
//     get ageInfo() {
//         return this.age * 7
//     }
//
//     set ageInfo(newAge) {
//         this.age = newAge
//     }
// }
//
// const cat = new Cats({
//     name: 'Barsik',
//     age: 5,
//     hasTail: true,
//     color: 'black',
//     eyeColor: 'blue'
// })
//
// console.log(cat)

class Component {

    constructor(selector) {
        this.$element = document.querySelector(selector)
    }

    hide() {
        this.$element.style.display = 'none'
    }

    show() {
        this.$element.style.display = 'block'
    }
}

class Block extends Component {
    constructor(options) {
        super(options.selector);

        this.$element.style.width = this.$element.style.height = options.size + 'px'
        this.$element.style.background = options.color
    }
}

const block1 = new Block({
    selector: '#block1',
    size: 100,
    color: 'red'
})

const block2 = new Block({
    selector: '#block2',
    size: 150,
    color: 'blue'
})

class Circle extends Block {
    constructor(options) {
        super(options);
        this.$element.style.borderRadius = '50%'
    }

    hide() {
        this.$element.style.opacity = 0
    }

    show() {
        this.$element.style.opacity = 1
    }
}

block1.hide()
block1.show()

const circle = new Circle({
    selector: '.circle',
    size: 90,
    color: 'green'
})

circle.hide()
circle.show()