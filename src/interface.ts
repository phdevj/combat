declare interface Interface<EventEmitter>  {
    up(): void
    down(): void
    left(): void
    right(): void
    enter(): void
    quit(): void
}

export { Interface as interface }