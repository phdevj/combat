import { Member } from './Member';

export class Bomb implements Member {
    LABEL = 'bomb'
    create(): Bomb {
        return new Bomb
    }
}