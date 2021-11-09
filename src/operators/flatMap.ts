import { Sequence } from "../Sequence.js";
import { Sink } from "../Sink.js";

class FlatMapSequence<T, U> extends Sequence<U> {
    private readonly transform: (item: T) => Sequence<U>;
    constructor(
        sequence: Sequence<T>,
        transform: (item: T) => Sequence<U>
    ) {
        super(sequence as any);
        this.transform = transform;
    }
    override *[Symbol.iterator]() {
        for (const value of this._values) {
            yield *this.transform(value as any);
        }
    }
}

class FlatMapSink<T, U> extends Sink<T, U> {
    constructor(private readonly transform: (item: T) => Sequence<U>) { super(); }
    override accept(sequence: Sequence<T>): Sequence<U> {
        return new FlatMapSequence(sequence, this.transform);
    }
}

export function flatMap<T, U>(transform: (item: T) => Sequence<U>): Sink<T, U> {
    return new FlatMapSink(transform);
}