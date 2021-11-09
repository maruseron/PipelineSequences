import { Sequence } from "../Sequence.js";
import { Sink } from "../Sink.js";

class FilterSequence<T> extends Sequence<T> {
    private readonly predicate: (item: T) => boolean;
    constructor(
        sequence: Sequence<T>, 
        predicate: (item: T) => boolean
    ) {
        super(sequence);
        this.predicate = predicate;
    }
    override *[Symbol.iterator]() {
        for (const value of this._values) {
            if (this.predicate(value)) {
                yield value;
            }
        }
    }
}

class FilterSink<T, S> extends Sink<T, T | S> {
    constructor(private readonly predicate: (item: T) => boolean) { super(); }
    override accept(sequence: Sequence<T>) {
        return new FilterSequence(sequence, this.predicate);
    }
}

export function filter<T>(predicate: (item: T) => boolean): Sink<T, T>;
export function filter<T, S extends T>(predicate: (item: T) => item is S): Sink<T, S>;
export function filter<T, S extends T>(predicate: (item: T) => boolean): Sink<T, T> | Sink<T, S> {
    return new FilterSink(predicate);
}