import * as readline from 'readline';
import { EventEmitter } from 'tsee';

class Console {

    init() {

        const keyboard = new Keyboard
     
        keyboard.emitKeyPressEvents()

        process.stdin.on('keypress', (str, key) => {
            if (key.ctrl && key.name === 'c')
              process.exit();  
        })
    }
}

class Keyboard extends EventEmitter {
   
    emitKeyPressEvents() {
        readline.emitKeypressEvents(process.stdin);
        process.stdin.setRawMode(true);
        process.stdin.on('keypress', (str, key) => {
            if (key.ctrl && key.name === 'c')
              process.exit();
        })
    }

}

export { Console as client }