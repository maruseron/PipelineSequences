import { Sequence } from "./Sequence.js";

export abstract class Sink<T, U> {
    abstract accept(sequence: Sequence<T>): Sequence<U>;
}