// Liskov substitution

/*
    Este patrón nos dice que las clases que hereden de una superclase, deben comportarsen
    de la misma manera al llamar cualquier subclase. 

    Miremos el siguiente ejemplo.
*/

class L_Canvas{
    constructor(canvas){
        this.canvas = canvas
    }

    getContext(mod){
        return this.canvas.getContext(mod)
    }
}

class L_Shape{

    lineWdth = 4
    color = 'brown'

    constructor(canvas){
        this.ctx = new L_Canvas(canvas).getContext('2d')
        this.draw()
    }

    getNumOfCorners(){
        this.numOfCorners
    }
}

class L_Circle extends L_Shape{
    constructor(canvas){
        super(canvas)
    }

    draw(){
        this.ctx.beginPath()
        this.ctx.arc(170, 170, 20, 1 * Math.PI, 3 * Math.PI)
        this.ctx.lineWidth = this.lineWdth
        this.ctx.strokeStyle = this.color
        this.ctx.stroke()
    }

    getNumOfCorners(){
        throw 'Shape without corners'
    }
}

class L_Square extends L_Shape{
    constructor(canvas){
        super(canvas)
        this.numOfCorners = 4
    }

    draw(){
        this.ctx.beginPath()
        this.ctx.rect(40, 40, 80, 80)
        this.ctx.lineWidth = this.lineWdth
        this.ctx.strokeStyle = this.color
        this.ctx.stroke()
    }
}

/* Hora de mejorar esto */

class L_ShapeTwo{
    lineWdth = 2
    color = 'purple'

    constructor(canvas){
        this.ctx = new L_Canvas(canvas).getContext('2d')
        this.draw()
    }
}

class Polygon extends L_ShapeTwo{
    getNumOfCorners = () => ( this.numOfCorners )
}

class Spheres extends L_ShapeTwo{
    radius = 20

    getRadius = () => ( this.radius )
}

class L_SquareTwo extends Polygon{
    numOfCorners = 4

    draw(){
        this.ctx.beginPath()
        this.ctx.rect(80, 80, 50, 50)
        this.ctx.lineWidth = this.lineWdth
        this.ctx.strokeStyle = this.color
        this.ctx.stroke()
    }
}

class L_circleTwo extends Spheres{
    
    constructor(canvas){
        super(canvas)
        this.radius = 20
        this.draw()
    }

    draw(){
        this.ctx.beginPath()
        this.ctx.arc(105, 105, this.radius, 1 * Math.PI, 3 * Math.PI)
        this.ctx.lineWidth = this.lineWdth
        this.ctx.strokeStyle = this.color
        this.ctx.stroke()
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const Lcanvas = document.getElementById('liskov')

    // Without abstraction
    // const shapes = [ new L_Square(Lcanvas), new L_Circle(Lcanvas) ]

    // shapes.forEach(shape => {
    //     console.log(shape.getNumOfCorners())
    // })


    // With abstraction
    const figures = [ new L_SquareTwo(Lcanvas), new L_circleTwo(Lcanvas) ]

    figures.forEach(figure => {
        // console.log(figure instanceof Polygon)
        (figure instanceof Polygon)
            ? console.log(figure.getNumOfCorners())
            : console.log(figure.getRadius())
    })
})