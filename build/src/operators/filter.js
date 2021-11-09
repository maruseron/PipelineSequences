import { Sequence } from "../Sequence.js";
import { Sink } from "../Sink.js";
class FilterSequence extends Sequence {
    predicate;
    constructor(sequence, predicate) {
        super(sequence);
        this.predicate = predicate;
    }
    *[Symbol.iterator]() {
        for (const value of this._values) {
            if (this.predicate(value)) {
                yield value;
            }
        }
    }
}
class FilterSink extends Sink {
    predicate;
    constructor(predicate) {
        super();
        this.predicate = predicate;
    }
    accept(sequence) {
        return new FilterSequence(sequence, this.predicate);
    }
}
export function filter(predicate) {
    return new FilterSink(predicate);
}
