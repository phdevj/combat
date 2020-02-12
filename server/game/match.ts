
namespace server {
    export class Match {
   
        private field: field = new field
        
        private players: Array<player>|null = null
        
        start() {
           
        
        }
        
        setPlayer(player: player) {
            if (this.players === null) this.players = new Array
            this.players.push(player)
        }
      
    }
}
