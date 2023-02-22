// const animal1 = {
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
//     color: 'black',
//     voice() {
//         console.log('I am Animal')
//     }
// }
// animal1.voice()
// console.log(animal1)

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
//         console.log('I am Animal')
//     }
// }
//
//
// class Wolfs extends Animals {
//     static type = 'WOLF'
//
//     constructor(options) {
//         super(options);
//         this.color = options.color
//         this.hasFang = options.hasFang
//         this.callVoice = options.callVoice
//     }
//
//     voice() {
//         console.log('I am ' + this.name)
//     }
//
//     get ageInfo() {
//         return console.log(this.age * 7)
//     }
//
//     set newAge(newAge) {
//         return console.log(this.age = newAge)
//     }
// }
//
// const wolf = new Wolfs({
//     name: 'Akella',
//     age: 10,
//     hasTail: false,
//     hasFang: true,
//     color: 'silver',
//     callVoice: 'Auuuuu Auuu'
// })
// wolf.voice()
// console.log(wolf)
// wolf.ageInfo
// wolf.newAge(12)
// console.log(Animals.type);


// const animal2 = new Animals({
//     name: 'Animal',
//     age: 5,
//     hasTail: true,
// })
// animal2.voice()
// console.log(animal2)


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
        this.$element.style.width = this.$element.style.height = options.razmer + 'px'
        this.$element.style.background = options.cvet
    }
}

class Circle extends Block {
    constructor(options) {
        super(options);
        this.$element.style.borderRadius = options.krug + '%'
    }
}


const block1 = new Block({
    selector: '#block1',
    razmer: 100,
    cvet: 'red'
})

const block2 = new Block({
    selector: '#block2',
    razmer: 150,
    cvet: 'blue'
})

const circle = new Circle({
    selector: '.block3',
    razmer: 200,
    cvet: 'green',
    krug: 50
})

