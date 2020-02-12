
namespace server {
    export class Match {
   
        private field: field = new field
        
        private players: Array<player>|null = null
        
        start() {
           
        
        }
        
        moveTarget(player: player, direction: string) {
            player.moveTartget(direction)
        }

        selectPin(player: player) {
            const coordinates = player.getTarget()
            const content = this.field.getSquereContent(coordinates.positionX, coordinates.positionY)

            player.setInHand(content)
        }

        applyPin(player: player) {
            const pin = player.getInHand()
            const coordinates = player.getTarget()

            if (pin !== null)
                this.field.setPin(coordinates.positionX, coordinates.positionY, pin)
        }

        hasFight(): boolean {
            return true
        }
    }
}
