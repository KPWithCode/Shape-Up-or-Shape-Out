class Shape {
    constructor(height,width)   {
        this.height = height;
        this.width = width;
        this.div = document.createElement('div');
        this.div.classList.add('shape');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(radius,radius);
            this.radius = radius;
            this.radius.classList.add('circle');
        

    }
}

class Triangle extends Shape{
    constructor(height) {
        super(height,height)
    }
}

