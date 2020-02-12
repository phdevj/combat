
import * as readline from 'readline';
export interface InputInterface {
    getUserIput(question: string): Promise<string>;
}





export class Keyboard implements InputInterface {
    private rl: any;
    private answer: string;
    public constructor() {
        this.answer = ''
        this.rl = readline.createInterface({ input: process.stdin, output: process.stdout }) // prompt: 'OHAI>' 
    }

    async getUserIput(question: string): Promise<string> {
        return new Promise(resolve => {    
            
            this.rl.question(question, (answer: string) => {
                resolve(answer);
                
                this.rl.close();
                
                return this.answer;
            });
        });
    }
}