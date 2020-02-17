
import { Match } from './game';
import { Console } from './infra';

const game = new Match
const client = new Console

client.init()

process.stdin.on('keypress', (str, key) => {
    console.log(key)
    if (key.ctrl && key.name === 'c')
      process.exit();  
})

console.log(game)
