// Este define que no se debe instanciar un objeto dentro de otro objeto.

class D_Canvas{
    constructor(canvas){
        this.canvas = canvas
    }

    getContext(mod){
        return this.canvas.getContext(mod)
    }
}

class D_ShapeTwo{
    constructor(ctx){
        this.ctx = ctx
        this.drawCircle()
    }

    drawCircle(){
        this.ctx.beginPath()
        this.ctx.arc(90, 90, 50, 1 * Math.PI, 3 * Math.PI)
        this.ctx.lineWidth = 3
        this.ctx.strokeStyle = 'orange'
        this.ctx.stroke()
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const canvs = document.querySelector('#dependence')
    new D_ShapeTwo(new D_Canvas(canvs).getContext('2d'))
})