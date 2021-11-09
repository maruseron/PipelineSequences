import { Sink } from "./Sink.js";

export class Sequence<T> implements Iterable<T> {
    protected readonly _values: Iterable<T>;
    protected constructor(_values: Iterable<T>) {
        this._values = _values;
    }

    public static of<T>(...args: T[]): Sequence<T> {
        return new Sequence(args);
    }

    public static from<T>(iterable: Iterable<T>): Sequence<T> {
        return new Sequence(iterable);
    }

    public forEach(action: (item: T) => void): void {
        for (const item of this) {
            action(item);
        }
    }

    public pipe<A>(op: Sink<T, A>): Sequence<A>;
    public pipe<A, B>(
        op1: Sink<T, A>,
        op2: Sink<A, B>
    ): Sequence<B>;
    public pipe<A, B, C>(
        op1: Sink<T, A>,
        op2: Sink<A, B>,
        op3: Sink<B, C>,
    ): Sequence<C>;
    public pipe<A, B, C, D>(
        op1: Sink<T, A>,
        op2: Sink<A, B>,
        op3: Sink<B, C>,
        op4: Sink<C, D>
    ): Sequence<D>;
    public pipe<A, B, C, D, E>(
        op1: Sink<T, A>,
        op2: Sink<A, B>,
        op3: Sink<B, C>,
        op4: Sink<C, D>,
        op5: Sink<D, E>
    ): Sequence<E>;
    public pipe<A, B, C, D, E, F>(
        op1: Sink<T, A>,
        op2: Sink<A, B>,
        op3: Sink<B, C>,
        op4: Sink<C, D>,
        op5: Sink<D, E>,
        op6: Sink<E, F>
    ): Sequence<F>;
    public pipe<A, B, C, D, E, F, G>(
        op1: Sink<T, A>,
        op2: Sink<A, B>,
        op3: Sink<B, C>,
        op4: Sink<C, D>,
        op5: Sink<D, E>,
        op6: Sink<E, F>,
        op7: Sink<F, G>
    ): Sequence<G>;
    public pipe<A, B, C, D, E, F, G, H>(
        op1: Sink<T, A>,
        op2: Sink<A, B>,
        op3: Sink<B, C>,
        op4: Sink<C, D>,
        op5: Sink<D, E>,
        op6: Sink<E, F>,
        op7: Sink<F, G>,
        op8: Sink<G, H>
    ): Sequence<H>;
    public pipe<A, B, C, D, E, F, G, H, I>(
        op1: Sink<T, A>,
        op2: Sink<A, B>,
        op3: Sink<B, C>,
        op4: Sink<C, D>,
        op5: Sink<D, E>,
        op6: Sink<E, F>,
        op7: Sink<F, G>,
        op8: Sink<G, H>,
        op9: Sink<H, I>
    ): Sequence<I>;
    public pipe<A, B, C, D, E, F, G, H, I, J>(
        op1: Sink<T, A>,
        op2: Sink<A, B>,
        op3: Sink<B, C>,
        op4: Sink<C, D>,
        op5: Sink<D, E>,
        op6: Sink<E, F>,
        op7: Sink<F, G>,
        op8: Sink<G, H>,
        op9: Sink<H, I>,
        op10: Sink<I, J>
    ): Sequence<J>;
    public pipe(...operators: Sink<unknown, unknown>[]): Sequence<unknown> {
        return operators.reduce((sequence, operator) => operator.accept(sequence), this as any);
    }

    *[Symbol.iterator]() {
        for (const value of this._values) {
            yield value;
        }
    }
}