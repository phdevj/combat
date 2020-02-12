import { Match } from './game/Match';
import { Keyboard } from './io';
import { Player } from './game/Player';


(function start() {
    
    const player1 = new Player
    const player2 = new Player

    const game = new Match(player1, player2)

    game.start()
})()