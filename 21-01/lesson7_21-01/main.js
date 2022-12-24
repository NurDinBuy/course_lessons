// // const words = document.getElementById('words')
// // const input = document.getElementById('int')
// // const reverseWord = () => {
// //     let arr = []
// //     arr.push(input.value)
// //     arr.forEach(word => {
// //         const p = document.createElement('p')
// //         p.append(word.split('').reverse().join(''))
// //         words.append(p)
// //     })
// //     input.value = ''
// // }
// // input.onkeydown = e => e.keyCode === 13 ? reverseWord() : false
//
//
// // ООП
//
// const animal1 = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
//     number: 10
//     // log() {
//     //
//     // }
// }
// //
// // console.log(animal1);
//
// class Animals {
//     static type = 'ANIMAL'
//
//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.hasTail = options.hasTail
//     }
//
//     voice() {
//         console.log('I am Animal!')
//     }
// }
//
// // console.log(Animals.type);
//
// // const animal = new Animals({
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true
// // })
// //
// // animal.voice()
// // console.log(animal)
//
// class Wolfs extends Animals {
//     static type = 'WOLF'
//
//     constructor(options) {
//         super(options);
//         this.hasFang = options.hasFang
//         this.eyeColor = options.eyeColor
//         this.colorHair = options.colorHair
//     }
//
//     voice() {
//         console.log('I am Wolf!')
//     }
//
//     get ageInfo() {
//        return console.log(this.age * 6)
//     }
//
//     // set setAge(newAge) {
//     //     this.age = newAge
//     // }
//
// }
//
// const wolf = new Wolfs({
//     name: 'Shram',
//     age: 9,
//     hasTail: false,
//     hasFang: true,
//     eyeColor: 'black',
//     colorHair: 'Gray'
// })
//
// wolf.voice()
// // wolf.ageInfo
// // console.log(wolf)

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

        this.$element.style.width = this.$element.style.height = options.abai + 'px'
        this.$element.style.background = options.color
    }


}

const block1 = new Block({
    selector: '#block1',
    abai: 150,
    color: 'blue'
})

const block2 = new Block({
    selector: '#block2',
    abai: 200,
    color: 'red'
})

class Circle extends Block {
    constructor(options) {
        super(options);
        this.$element.style.borderRadius = '50%'
    }
}

const circle = new Circle({
    selector: '.circle',
    abai: 90,
    color: 'green'
})

circle.hide()
circle.show()