class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.div = document.createElement('div');
        this.div.classList.add('shape');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius, radius);
        this.radius = radius;
        this.radius.classList.add('circle');


    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height)
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.classList = 'rectangle';

    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(side, side);
        this.classList = 'square'
    }
}
//List variables
let allShapes = document.getElementById('allShapes');
let squareBtn = document.getElementsByClassName('square');
let rectangleBtn = document.getElementsByClassName('rectangle');
let circleBtn = document.getElementsByClassName('circle');
let triangleBtn = document.getElementsByClassName('triangle');
//Buttons 
squareBtn.addEventListener('click', () =>  {
    new Square

})
rectangleBtn.addEventListener('click', () =>  {
    new Square

})
circleBtn.addEventListener('click', () =>  {
    new Square

})
trinagleBtn.addEventListener('click', () =>  {
    new Square

})
