// Single responsability principle
/*
    Define que una clase, función o módulo debe ser responsable 
    de una única funcionalidad.
*/

/* 
    A continuación creamos la clase Shape, la cual deberia solo manejar la 
    manipulación de figuras en nuestro programa, pero aqui podemos ver que hace algo más.
    Obtiene el contexto del elemento canvas, lo cual no está mal pero no es una funcionalidad 
    que le pertenezca a la clase.
*/

class S_ShapeOne{

    constructor(canvas){
        this.getContext(canvas)
        this.drawCircle()
    }

    getContext(canvas){
        this.ctx = canvas.getContext('2d')
        this.drawCircle()
    }

    drawCircle(){
        this.ctx.beginPath()
        this.ctx.arc(50, 50, 30, 1 * Math.PI, 3 * Math.PI)
        this.ctx.lineWidth = 3
        this.ctx.strokeStyle = 'blue'
        this.ctx.stroke()
    }
}

/* Ahora vamos a aplicar el Patrón Single Responsability */

class S_Canvas{
    constructor(canvas){
        this.canvas = canvas
    }

    getContext(mod){
        return this.canvas.getContext(mod)
    }
}

class S_ShapeTwo{
    constructor(canvas){
        this.ctx = new S_Canvas(canvas).getContext('2d')
        this.drawCircle()
    }

    drawCircle(){
        this.ctx.beginPath()
        this.ctx.arc(140, 130, 50, 1 * Math.PI, 3 * Math.PI)
        this.ctx.lineWidth = 3
        this.ctx.strokeStyle = 'orange'
        this.ctx.stroke()
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#single')
    new S_ShapeOne(canvas)
    new S_ShapeTwo(canvas)
})