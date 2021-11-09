export class Sequence {
    _values;
    constructor(_values) {
        this._values = _values;
    }
    static of(...args) {
        return new Sequence(args);
    }
    static from(iterable) {
        return new Sequence(iterable);
    }
    forEach(action) {
        for (const item of this) {
            action(item);
        }
    }
    pipe(...operators) {
        return operators.reduce((sequence, operator) => operator.accept(sequence), this);
    }
    *[Symbol.iterator]() {
        for (const value of this._values) {
            yield value;
        }
    }
}
