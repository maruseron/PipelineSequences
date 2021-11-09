import { filter, flatMap, map } from "./src/operators/index.js";
import { Sequence } from "./src/Sequence.js";
(function main() {
    Sequence.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(filter((item) => item % 2 === 0), map((item) => item.toString()), flatMap((item) => Sequence.from(item))).forEach(console.log);
})();
