// Open-Close principle
/*
    Define que una clase, función o módulo debe permitir extenderse
    pero no modificarse.
*/

/* 
    Si queremos agregar una linea en vez de un circulo, tenemos que modificar la clase,
    tomando como base el siguiente código.
*/

class O_Canvas{
    constructor(canvas){
        this.canvas = canvas
    }

    getContext(mod){
        return this.canvas.getContext(mod)
    }
}

class O_ShapeOne{
    constructor(canvas){
        this.ctx = new O_Canvas(canvas).getContext('2d')
        this.drawCircle()
    }

    drawCircle(){
        this.ctx.beginPath()
        this.ctx.arc(140, 130, 50, 1 * Math.PI, 3 * Math.PI)
        this.ctx.lineWidth = 3
        this.ctx.strokeStyle = 'blue'
        this.ctx.stroke()
    }
}

/* Mejoremos esto para poder crear una linea extendiendo la funcionalidad. */

class O_Shape{

    lineWdth = 5
    color = 'purple'

    constructor(canvas){
        this.ctx = new O_Canvas(canvas).getContext('2d')
        this.draw()
    }
}

class O_Circle extends O_Shape{
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
}

class O_Line extends O_Shape{
    constructor(canvas){
        super(canvas)
    }

    draw(){
        this.ctx.beginPath()
        this.ctx.moveTo(15, 15)
        this.ctx.lineTo(150, 150)
        this.ctx.lineWidth = this.lineWdth
        this.ctx.strokeStyle = this.color
        this.ctx.lineCap = 'round'
        this.ctx.stroke()
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#open_close')
    new O_Line(canvas)
    new O_Circle(canvas)
})