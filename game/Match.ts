import { Field } from './Field';
import { Player } from './Player';

export class Match {
   
    private field: Field = new Field
    
    private players: Array<Player>|null = null
    
    start() {
       
    
    }
    
    moveTarget(player: Player, direction: string) {
        player.moveTartget(direction)
    }

    selectPin(player: Player) {
        const coordinates = player.getTarget()
        const content = this.field.getSquereContent(coordinates.positionX, coordinates.positionY)

        player.setInHand(content)
    }

    applyPin(player: Player) {
        const pin = player.getInHand()
        const coordinates = player.getTarget()

        if (pin !== null)
            this.field.setPin(coordinates.positionX, coordinates.positionY, pin)
    }

    hasFight(): boolean {
        return true
    }
}