
namespace server {
    export class fight {
        private pins: Array<pin>
        private winner: pin | null = null
        private loser: pin | null = null

        constructor(pins: Array<pin>) {
            this.pins = pins
        }

        getWinner(): pin {
            const pin1 = this.pins.pop()
            const pin2 = this.pins.pop()

            this.winner = (pin1.winsFrom(pin2)) ? pin1 : pin2
            
            return this.winner
        }

        getLoser(): pin {

        }
    }
}
