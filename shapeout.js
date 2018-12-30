class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.div = document.createElement('div');
        // this.div.classList.add('shape');
    }

    // Canvas Drawing
    draw() {
    let x = Math.floor(Math.random() * (600-this.width))
    let y = Math.floor(Math.random() * (600-this.height))
    this.div.style.left = (x + 'px');
    this.div.style.top = (y + 'px')
    this.div.style.width = (this.width + ' px ');
    this.div.style.height = (this.height +' px ');
    allShapes.appendChild(this.div)
    }
    // Clicking on any shape should call a method named describe(), 
    // which should update the statistics in the sidepanel in index.html

}

class Circle extends Shape {
    constructor(radius) {
        super(radius, radius);
        this.radius = radius;
        this.div.classList.add('circle');
        //Doublclick function will remove
        this.div.addEventListener('dblclick', ()    =>  {
            this.remove();
           
        });
         //Call draw function    
         this.draw();
    }
}

class Triangle extends Shape {
    constructor(height) {
        super(height, height)
        this.div.classList.add('triangle');
        //Doublclick function will remove
        this.div.addEventListener('dblclick', ()    =>  {
            this.remove();
        });
        // 0 Width and Height
        this.div.style.width = 0;
        this.div.style.height = 0;
         //Call draw function    
         this.draw();
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height);
        this.div.classList.add('rectangle');

         //Doublclick function will remove
         this.div.addEventListener('dblclick', ()    =>  {
            this.remove();
        });

         //Call draw function    
         this.draw();
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength);
        this.div.classList.add('square'); 
        
        
        //Doublclick function will remove
        this.div.addEventListener('dblclick', ()    =>  {
            this.remove();
        });
         //Call draw function    
         this.draw();
    }
}
//List variables
let allShapes = document.getElementById('allShapes');
let squareBtn = document.getElementsByClassName('square')[0];
let rectangleBtn = document.getElementsByClassName('rectangle')[0];
let circleBtn = document.getElementsByClassName('circle')[0];
let triangleBtn = document.getElementsByClassName('triangle')[0];

// All inputs
let sideLength = document.getElementById('sideLength')
let rectangleHeight = document.getElementById('rectHeight')
let rectangleWidth = document.getElementById('rectWidth')
let circleRadius = document.getElementById('circleRadius')
let triangleHeight = document.getElementById('triHeight')

//Buttons 
squareBtn.addEventListener('click', () =>  {
    new Square(sideLength.value)

})
rectangleBtn.addEventListener('click', () =>  {
    new Rectangle(rectangleHeight.value)

})
circleBtn.addEventListener('click', () =>  {
    new Circle(circleRadius.value)

})
triangleBtn.addEventListener('click', () =>  {
    new Triangle(triangleHeight.value)

})
