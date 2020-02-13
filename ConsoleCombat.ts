import { Keyboard } from './Keyboard'; 
import { Match } from './game/Match';

export class ConsoleCombat {

    init() {

        const keyboard = new Keyboard
        const game = new Match

        keyboard.emitKeyPressEvents()

        process.stdin.on('keypress', (str, key) => {
            if (key.ctrl && key.name === 'c')
              process.exit();
            console.log(str)
            //switch (str) {
            //    case '': game.interface.up()
           // }
                
        })
    }

    
}