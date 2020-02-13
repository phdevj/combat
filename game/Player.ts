import { Pin } from './Pin';
export class Player {
    private target = new target
    private hand: Pin|null = null

    getTarget(): target { return this.target }

    moveTartget(direction: string) {
        switch (direction) {
            case 'up': this.target.up()
            case 'down': this.target.down()
            case 'left': this.target.left()
            case 'right': this.target.right()
        }
    }

    getInHand(): Pin|null { return this.hand }
    setInHand(pin: Pin|null): void { this.hand = pin }

}

class target {
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