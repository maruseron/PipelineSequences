import { Sequence } from "./Sequence.js";
export declare abstract class Sink<T, U> {
    abstract accept(sequence: Sequence<T>): Sequence<U>;
}
