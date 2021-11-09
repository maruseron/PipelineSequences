import { Sequence } from "../Sequence.js";
import { Sink } from "../Sink.js";
export declare function flatMap<T, U>(transform: (item: T) => Sequence<U>): Sink<T, U>;
