
namespace server {


    export class field {
        private sizeX = 10
        private sizeY = 10
        private squares: Array<Array<squere>>

        constructor() {
            const squeres = new Array
            for (let y = 1; y <= this.sizeY; y++) {
                let line = new Array;
                for (let x = 1; x <= this.sizeX; x++) {
                    line.push( new squere(x,y) )
                }
                squeres.push(line)
            }
            this.squares = squeres
        }

        setPin(x: number, y: number, pin: pin) {
            const squere = this.getSquere(x,y)

            if (squere.getContent() instanceof groud) 
                squere.setPin(pin)

            //TODO: implement else
        }

        removePin(x: number, y: number) {
            //TODO: implement
        }

        getSquere(x: number, y: number) { return this.squares[x][y] }
    }

    class squere {
        x:number
        y:number
        content: pin|groud

        constructor(x: number, y: number) {
            this.x = x
            this.y = y
            this.content = new groud
        }

        getContent() : pin|groud { return this.content }
        setPin(pin: pin) : void {  this.content = pin }
        setGroud() : void {  this.content = new groud }
    }

    class groud {}


}
