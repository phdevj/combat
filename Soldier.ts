import { Member } from './Member';

export class Soldier implements Member {
    public LABEL = 'bomb'
    create(): Soldier {
        return new Soldier
    }
}