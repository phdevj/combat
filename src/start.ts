
import { Match } from './game';
import { Console } from './infra';

const game = new Match
const client = new Console

client.init()

process.stdin.on('keypress', (str, key) => {
    let map = new Array
    for (let y = 1; y <= game.field.sizeY; y++) {
        let line = new Array
        for (let x = 1; x <= game.field.sizeX; x++) {
            console.log(x,y); 
            // line.push(game.render().getOnMapPosition(x,y)) 
        }
        // map.push(line)
    }
    
    console.log(`
    
     +    +    +    +    +    +    +    +    +    +  
        ${map[1][1]}                                                 
     +    +    +    +    +    +    +    +    +    +  
                                                         
     +    +    +    +    +    +    +    +    +    +     
                                                         
     +    +    +    +    +    +    +    +    +    +     
                                                         
     +    +    +    +    +    +    +    +    +    +     
                                                         
     +    +    +    +    +    +    +    +    +    +     
                                                         
     +    +    +    +    +    +    +    +    +    +     
                                                         
     +    +    +    +    +    +    +    +    +    +     
                                                         
     +    +    +    +    +    +    +    +    +    +     
                                                         
     +    +    +    +    +    +    +    +    +    +     
    
    `)
})
