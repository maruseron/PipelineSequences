import { Sequence } from "../Sequence.js";
import { Sink } from "../Sink.js";

class MapSequence<T, U> extends Sequence<U> {
    private readonly transform: (item: T) => U;
    constructor(
        sequence: Sequence<T>,
        transform: (item: T) => U
    ) {
        super(sequence as any);
        this.transform = transform;
    }
    override *[Symbol.iterator]() {
        for (const value of this._values) {
            yield this.transform(value as any);
        }
    }
}

class MapSink<T, U> extends Sink<T, U> {
    constructor(private readonly transform: (item: T) => U) { super(); }
    override accept(sequence: Sequence<T>): Sequence<U> {
        return new MapSequence(sequence, this.transform);
    }
}

export function map<T, U>(transform: (item: T) => U): Sink<T, U> {
    return new MapSink(transform);
}