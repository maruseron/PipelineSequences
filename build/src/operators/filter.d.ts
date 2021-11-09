import { Sink } from "../Sink.js";
export declare function filter<T>(predicate: (item: T) => boolean): Sink<T, T>;
export declare function filter<T, S extends T>(predicate: (item: T) => item is S): Sink<T, S>;
