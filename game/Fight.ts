import { Pin } from './Pin';
export class fight {
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