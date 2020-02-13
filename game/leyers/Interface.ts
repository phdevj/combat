import { EventEmitter } from 'tsee';
export interface Interface<EventEmitter>  {
    up(): void
    down(): void
    left(): void
    right(): void
    enter(): void
    quit(): void
}