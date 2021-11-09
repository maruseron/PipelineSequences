import { Sink } from "./Sink.js";
export declare class Sequence<T> implements Iterable<T> {
    protected readonly _values: Iterable<T>;
    protected constructor(_values: Iterable<T>);
    static of<T>(...args: T[]): Sequence<T>;
    static from<T>(iterable: Iterable<T>): Sequence<T>;
    forEach(action: (item: T) => void): void;
    pipe<A>(op: Sink<T, A>): Sequence<A>;
    pipe<A, B>(op1: Sink<T, A>, op2: Sink<A, B>): Sequence<B>;
    pipe<A, B, C>(op1: Sink<T, A>, op2: Sink<A, B>, op3: Sink<B, C>): Sequence<C>;
    pipe<A, B, C, D>(op1: Sink<T, A>, op2: Sink<A, B>, op3: Sink<B, C>, op4: Sink<C, D>): Sequence<D>;
    pipe<A, B, C, D, E>(op1: Sink<T, A>, op2: Sink<A, B>, op3: Sink<B, C>, op4: Sink<C, D>, op5: Sink<D, E>): Sequence<E>;
    pipe<A, B, C, D, E, F>(op1: Sink<T, A>, op2: Sink<A, B>, op3: Sink<B, C>, op4: Sink<C, D>, op5: Sink<D, E>, op6: Sink<E, F>): Sequence<F>;
    pipe<A, B, C, D, E, F, G>(op1: Sink<T, A>, op2: Sink<A, B>, op3: Sink<B, C>, op4: Sink<C, D>, op5: Sink<D, E>, op6: Sink<E, F>, op7: Sink<F, G>): Sequence<G>;
    pipe<A, B, C, D, E, F, G, H>(op1: Sink<T, A>, op2: Sink<A, B>, op3: Sink<B, C>, op4: Sink<C, D>, op5: Sink<D, E>, op6: Sink<E, F>, op7: Sink<F, G>, op8: Sink<G, H>): Sequence<H>;
    pipe<A, B, C, D, E, F, G, H, I>(op1: Sink<T, A>, op2: Sink<A, B>, op3: Sink<B, C>, op4: Sink<C, D>, op5: Sink<D, E>, op6: Sink<E, F>, op7: Sink<F, G>, op8: Sink<G, H>, op9: Sink<H, I>): Sequence<I>;
    pipe<A, B, C, D, E, F, G, H, I, J>(op1: Sink<T, A>, op2: Sink<A, B>, op3: Sink<B, C>, op4: Sink<C, D>, op5: Sink<D, E>, op6: Sink<E, F>, op7: Sink<F, G>, op8: Sink<G, H>, op9: Sink<H, I>, op10: Sink<I, J>): Sequence<J>;
    [Symbol.iterator](): Generator<T, void, unknown>;
}
