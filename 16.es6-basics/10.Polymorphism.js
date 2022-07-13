class Shape {
    draw(){
        return "I am generic Shape"
    }
}

class Circle extends Shape {
    draw(){
        return "I am a Circle"
    }
}

class Square extends Shape {
    draw(){
        return "I am a Square"
    }
}

class Triangle extends Shape {
    // draw(){
    //     return "I am a Triangle"
    // }
}

var shapeObj = new Shape()
console.log(shapeObj.draw())

var circleObj = new Circle()
console.log(circleObj.draw())

var sqaureObj = new Square()
console.log(sqaureObj.draw())

var triangleObj = new Triangle()
console.log(triangleObj.draw())