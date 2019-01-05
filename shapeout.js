document.addEventListener("DOMContentLoaded", function (event) {
    class Shape {
        constructor(width, height) {
            this.width = width;
            this.height = height;
            this.div = document.createElement('div');
             // Possibly unnecessary
            // this.div.classList.add('shape');
            // this.div.addEventListener('click', ()   =>  {
            //     this.describe()
            // })
        }

        // Canvas Drawing
        draw() {
            let x = Math.floor(Math.random() * (600 - this.width))
            let y = Math.floor(Math.random() * (600 - this.height))
            this.div.style.left = (x + 'px');
            this.div.style.top = (y + 'px')
            this.div.style.width = (this.width + 'px');
            this.div.style.height = (this.height + 'px');
            allShapes.appendChild(this.div)
            if (this.width > 600 || this.height > 600) {
                alert('Try Again')
            }

        };
        // Clicking on any shape should call a method named describe(), 
        // which should update the statistics in the sidepanel in index.html

        describe(name,height,width) {
           
            sideShape.innerHTML = name;
            sideHeight.innerHTML = height + ' px ';
            sideWidth.innerHTML= width + ' px ';
        }

    }

    class Circle extends Shape {
        constructor(radius) {
            super(radius, radius);
            this.radius = radius;
            this.div.classList.add('circle');
            // Single click event listener
            this.div.addEventListener("click", ()   =>  {
               this.describe(' Circle ',this.height, this.height)   
               sideArea.innerHTML = (3.14159 * Math.pow(this.height /2, 2)) + ' px '
               sidePer.innerHTML = ( this.height * 2) + ( this.width * 2) + ' px'
               sideRadius.innerHTML = (this.height / 2) + ' px'
            });
           
            //Doublclick function will remove
            this.div.addEventListener('dblclick', () => {
                this.div.remove();

            });

            //Call draw function    
            this.draw();
        }

        
    }

    class Triangle extends Shape {
        constructor(height) {
            super(height, height)
            this.div.classList.add('triangle');
            // Single click event listener
            this.div.addEventListener("click", ()   =>  {
                this.describe(('Triangle'),this.height ,this.height)
                sideArea.innerHTML = 0.5 * (this.height * this.height)
                sidePer.innerHTML = 2 * this.height +(Math.sqrt(2)) * height
                sideRadius.innerHTML = ' N/A ';
            });
            //Doublclick function will remove
            this.div.addEventListener('dblclick', () => {
                this.div.remove();
            });
            
            this.div.style.backgroundColor = 'bisque';
            this.div.style.borderRightWidth = this.height + 'px';
            this.div.style.borderBottomWidth = this.height + 'px';
            this.width = 0;
     
            //Call draw function    
            this.draw();
        }
    }

    class Rectangle extends Shape {
        constructor(width, height) {
            super(width, height);
            this.div.classList.add('rectangle');

            // Single click event listener
            this.div.addEventListener("click", ()   =>  {
                this.describe('Rectangle',this.height,this.width);
                sideArea.innerHTML = (height * width + ' px')
                sidePer.innerHTML = ( this.height * 2) + ( this.width * 2) + ' px'
                sideRadius.innerHTML = ' N/A ';
            });

            //Doublclick function will remove
            this.div.addEventListener('dblclick', () => {
                this.div.remove();
            });

            //Call draw function    
            this.draw();
        }
    }

    class Square extends Shape {
        constructor(sideLength) {
            super(sideLength, sideLength);
            this.div.classList.add('square');

            // Single click event listener
            this.div.addEventListener("click", ()   =>  {
                this.describe(('Square'),this.sideLength + ' px',this.sideLength + ' px')
                sideHeight.innerHTML = sideLength + ' px ';
                sideWidth.innerHTML = sideLength + ' px ';
                sidePer.innerHTML = 4 * sideLength + ' px '
                sideRadius.innerHTML =  ' N/A ';
                sideArea.innerHTML = sideLength * sideLength + ' px '
            });

            //Doublclick function will remove
            this.div.addEventListener('dblclick', () => {
                this.div.remove();
            });
            //Call draw function    
            this.draw();
        }
    }
    //List variables
    let allShapes = document.getElementById('allShapes');
    let squareBtn = document.getElementById('square')
    let rectangleBtn = document.getElementsByClassName('rectangle')[0];
    let circleBtn = document.getElementsByClassName('circle')[0];
    let triangleBtn = document.getElementsByClassName('triangle')[0];
    let sideShape = document.getElementById('sideShape')
    let sideHeight = document.getElementById('sideHeight')
    let sideWidth = document.getElementById('sideWidth')
    let sideRadius = document.getElementById('sideRadius')
    let sideArea = document.getElementById('sideArea')
    let sidePer = document.getElementById('sidePerimeter')

    // All inputs
    let sideLength = document.getElementById('sideLength');
    let rectangleHeight = document.getElementById('rectHeight');
    let rectangleWidth = document.getElementById('rectWidth');
    let circleRadius = document.getElementById('circleRadius');
    let triangleHeight = document.getElementById('triHeight');

    //Buttons 
    squareBtn.addEventListener('click', () => {
        new Square(sideLength.value)
      
    });

    rectangleBtn.addEventListener('click', () => {
        new Rectangle(rectangleHeight.value, rectangleWidth.value)
   

    });
    circleBtn.addEventListener('click', () => {
        new Circle(circleRadius.value)

    });

    triangleBtn.addEventListener('click', () => {
        new Triangle(triangleHeight.value)
    });
    //End of DOM tag
});