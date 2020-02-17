interface Pin { }

export class Match {
    private field: Field = new Field
    private players: Array<Player> | null = null
    private turnPlayer: number | null = null

    up(playerId: number) {
        if (this.isPlayerTurn(playerId)) {
            this.moveTarget(playerId, 'UP')
        }
    }

    down(playerId: number) {
        if (this.isPlayerTurn(playerId)) {
            this.moveTarget(playerId, 'DOWN')
        }
    }

    left(playerId: number) {
        if (this.isPlayerTurn(playerId)) {
            this.moveTarget(playerId, 'LEFT')
        }
    }

    right(playerId: number) {
        if (this.isPlayerTurn(playerId)) {
            this.moveTarget(playerId, 'RIGHT')
        }
    }

    select(playerId: number) {
        if (this.isPlayerTurn(playerId)) {
            this.selectPin(playerId)
        }
    }

    apply(playerId: number) {
        if (this.isPlayerTurn(playerId)) {
            this.applyPin(playerId)
        }
    }

    setPlayer(id: number) {
        if (this.players === null) this.players = new Array
        this.players.push(new Player(id))
    }

    getMapJson() {

    }

    private setTurnPlayer(id: number) {
        this.turnPlayer = id
    }

    private getPlayer(id: number): Player {
        if (this.players !== null) {
            for (const player of this.players) {
                if (player.id == id) return player
            }
        }

        throw "Player not found"; 
    }

    private moveTarget(playerId: number, direction: string) {
        const player = this.getPlayer(playerId)
        player.moveTartget(direction)
    }

    private selectPin(playerId: number) {
        const player = this.getPlayer(playerId)
        const coordinates = player.getTarget()
        const content = this.field.getSquereContent(coordinates.positionX, coordinates.positionY)

        player.setInHand(content)
    }

    private applyPin(playerId: number) {
        const player = this.getPlayer(playerId)
            const pin = player.getInHand()
            const coordinates = player.getTarget()
    
            if (pin !== null)
                this.field.setPin(coordinates.positionX, coordinates.positionY, pin)
    }

    private isPlayerTurn(playerId: number): boolean {
        return this.turnPlayer === playerId
    }
}

class Field {
    private sizeX = 10
    private sizeY = 10
    private squares: Array<Array<Squere>>
    private fight: boolean = false

    constructor() {
        const squeres = new Array
        for (let y = 1; y <= this.sizeY; y++) {
            let line = new Array;
            for (let x = 1; x <= this.sizeX; x++) {
                line.push( new Squere(x,y) )
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

    getSquereContent(x: number, y: number): Pin | Groud {
        return this.getSquere(x, y).getContent()
    }

    getSquere(x: number, y: number) { return this.squares[x][y] }
}

class Squere {
    x: number
    y: number
    content: Array<Pin> | Groud = new Groud

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    setPin(pin: Pin): void {
        if (this.content instanceof Groud) {
            this.content = new Array(pin)
        } else {
            this.content.push(pin)
        }
    }
    getContent(): Array<Pin> | Groud { return this.content }
    setGroud(): void { this.content = new Groud } 
}

class Groud {

}

class Fight {
    private pins: Array<Pin>
    private winner: Pin | null = null
    private loser: Pin | null = null

    constructor(Pins: Array<Pin>) {
        this.pins = Pins
    }

    getWinner(): void {
        const pin1 = this.pins.pop()
        const pin2 = this.pins.pop()

        //this.winner = (Pin1.winsFrom(Pin2)) ? Pin1 : Pin2
        
        //return this.winner
    }

    // getLoser(): Pin {
//
  //  }
}

class Player {
    id: number
    private target = new Target
    private hand: Pin|null = null

    constructor(id: number) { this.id = id }

    moveTartget(direction: string) {
        switch (direction) {
            case 'UP': this.target.up()
            case 'DOWN': this.target.down()
            case 'LEFT': this.target.left()
            case 'RIGHT': this.target.right()
        }
    }
    getTarget(): Target { return this.target }
    getInHand(): Pin|null { return this.hand }
    setInHand(pin: Pin|null): void { this.hand = pin }
}

class Target {
    positionX = 0
    positionY = 0

    up() { this.isValidMovement(this.positionX, this.positionY + 1) ? this.positionY++ : this.positionY }
    down() { this.isValidMovement(this.positionX, this.positionY - 1) ? this.positionY-- : this.positionY }
    left() { this.isValidMovement(this.positionX + 1, this.positionY) ? this.positionX++ : this.positionX }
    right() { this.isValidMovement(this.positionX - 1 , this.positionY) ? this.positionX-- : this.positionX }

    private isValidMovement(futureX: number, futureY: number): boolean {
        return futureX >= 1 && futureX <= 10 && futureY >= 1 && futureY <= 10
    }
}