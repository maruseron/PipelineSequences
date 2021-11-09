import { Sequence } from "../Sequence.js";
import { Sink } from "../Sink.js";
class FlatMapSequence extends Sequence {
    transform;
    constructor(sequence, transform) {
        super(sequence);
        this.transform = transform;
    }
    *[Symbol.iterator]() {
        for (const value of this._values) {
            yield* this.transform(value);
        }
    }
}
class FlatMapSink extends Sink {
    transform;
    constructor(transform) {
        super();
        this.transform = transform;
    }
    accept(sequence) {
        return new FlatMapSequence(sequence, this.transform);
    }
}
export function flatMap(transform) {
    return new FlatMapSink(transform);
}
