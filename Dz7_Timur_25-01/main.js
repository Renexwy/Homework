class Cars {
    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.weels = options.weels
        this.price = options.price

    }
    start() {
        console.log(`${this.model} заведен`)
    }

}

class Matiz extends Cars{
    constructor(options) {
        super(options);
    }
}

const matiz = new Matiz({
    model: "matiz1",
    color: 'red',
    weels: 4,
    price: '20000$'
})

matiz.start()
console.log(matiz);


class Honda extends Cars{
    constructor(options) {
        super(options);
        this.steering_wheel = options.steering_wheel
    }
}

const honda = new Honda({
    model: "honda1",
    color: 'white',
    weels: 4,
    price: '5000$',
    steering_wheel: 'праворульный'
})

honda.start()
console.log(honda);


class Tesla1 extends Cars{
    constructor(options) {
        super(options);
        this.fuel = options.fuel
    }
}

const tesla = new Tesla1({
    model: "tesla1",
    color: 'red',
    weels: 4,
    price: '88888$',
    fuel: 'электрический'
})

tesla.start()
console.log(tesla);

///////////////////////////////////////////

class Svetofor {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }

    hide () {
        this.$element.style.display = 'none'
    }
    show () {
        this.$element.style.display = 'block'
    }
}
function clickme() {
    let color = prompt("Введите цвет (Red, Yellow or Green):");

    if (color === "Red") {
        document.querySelector("#circle1").style.backgroundColor = "red";
        document.querySelector("#circle2").style.backgroundColor = "gray";
        document.querySelector("#circle3").style.backgroundColor = "gray";
        document.querySelector("#circle1").textContent = "STOP";
        document.querySelector("#circle2").textContent = "";
        document.querySelector("#circle3").textContent = "";
    } else if (color === "Yellow") {
        document.querySelector("#circle1").style.backgroundColor = "gray";
        document.querySelector("#circle2").style.backgroundColor = "yellow";
        document.querySelector("#circle3").style.backgroundColor = "gray";
        document.querySelector("#circle1").textContent = "";
        document.querySelector("#circle2").textContent = "SLOW";
        document.querySelector("#circle3").textContent = "";
    } else if (color === "Green") {
        document.querySelector("#circle1").style.backgroundColor = "gray";
        document.querySelector("#circle2").style.backgroundColor = "gray";
        document.querySelector("#circle3").style.backgroundColor = "green";
        document.querySelector("#circle1").textContent = "";
        document.querySelector("#circle2").textContent = "";
        document.querySelector("#circle3").textContent = "GO";
    } else {
        alert("Такого цвета нету");
    }
}

class Block extends Svetofor {
    constructor(options) {
        super(options.selector);
        this.$element.style.width = this.$element.style.height = options.size + 'px'
        this.$element.style.background = options.color

    }
}

class Circle extends Block {
    constructor(options) {
        super(options);
        this.$element.style.borderRadius = options.border + '%'
    }
}
const block1 = new Circle({
    selector: '#circle1',
    size: 50,
    color: 'gray',
    border: 50
})
const block2 = new Circle({
    selector: '#circle2',
    size: 50,
    color: 'gray',
    border: 50
})
const circle = new Circle({
    selector: '#circle3',
    size: 50,
    color: 'gray',
    border: 50
})