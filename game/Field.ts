import { Pin } from './Pin';
export class Field {
    private sizeX = 10
    private sizeY = 10
    private squares: Array<Array<squere>>
    private fight: boolean = false

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

    setPin(x: number, y: number, pin: Pin) {
        const squere = this.getSquere(x,y)
        squere.setPin(pin)
    }

    removePin(x: number, y: number) {
        //TODO: implement
    }

    getSquereContent(x: number, y: number): Pin | groud {
        return this.getSquere(x, y).getContent()
    }

    getSquere(x: number, y: number) { return this.squares[x][y] }
}

class squere {
    x: number
    y: number
    content: Array<Pin> | groud = new groud

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    getContent(): Array<Pin> | groud { return this.content }
    setGroud(): void { this.content = new groud }
    setPin(pin: Pin): void {
        if (this.content instanceof groud) {
            this.content = new Array(pin)
        } else {
            this.content.push(pin)
            // this.fight = this.content.length == 2 ? true : false
        }
    }
}

class groud {}