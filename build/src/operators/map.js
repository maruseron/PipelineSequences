import { Sequence } from "../Sequence.js";
import { Sink } from "../Sink.js";
class MapSequence extends Sequence {
    transform;
    constructor(sequence, transform) {
        super(sequence);
        this.transform = transform;
    }
    *[Symbol.iterator]() {
        for (const value of this._values) {
            yield this.transform(value);
        }
    }
}
class MapSink extends Sink {
    transform;
    constructor(transform) {
        super();
        this.transform = transform;
    }
    accept(sequence) {
        return new MapSequence(sequence, this.transform);
    }
}
export function map(transform) {
    return new MapSink(transform);
}
