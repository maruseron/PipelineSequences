import { Sink } from "../Sink.js";
export declare function map<T, U>(transform: (item: T) => U): Sink<T, U>;
