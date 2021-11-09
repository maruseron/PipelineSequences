# PipeSeq
This is a simple operator-based lazy sequence example class using a pipe function for intermediate operations. For example:
```ts
Sequence.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
    filter((item) => item % 2 === 0),
    map((item) => item.toString()),
    flatMap((item) => Sequence.from(item))
).forEach(console.log);
```
This, contrasted to a traditional fluent interface for intermediate operations, such as in:
```ts
Sequence.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .filter((item) => item % 2 === 0)
    .map((item) => item.toString())
    .flatMap((item) => Sequence.from(item))
    .forEach(console.log);
```
## Pipes vs Fluent Interfaces
There are a couple challenges to implementing pipe functions for basically anything that should exhibit lazy intermediate behavior, such as _properly defining an arbitrary arity, type-safe pipe function_ - even "avant-garde" JavaScript libraries like RxJS don't have this. Instead, they use the same technique I apply here, which is manually defining overloaded signatures pipes for up to 9-10 operators and an implementation using any.

To add another disadvantage, one could make the argument that the latter (method chaining) looks cleaner, since it's more similar to "proper" method piping as seen in functional languages. For example, the same code in a language similar to F# would be something along the lines of:
```fsharp
Sequence.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    |> filter(fun item -> item % 2 = 0)
    |> map(fun item -> item.ToString())
    |> flatMap(fun item -> Sequence.from(item))
    |> iter (fun item -> printfn "%s" item)
```

## If that's the case, then... why bother? 
Well, pipes have a very strong advantage in their favor: _they're very versatile_. Pipes provide a mechanism that lets you easily extend the range of intermediate behavior that your object can exhibit by giving you a common interface for pipe operators and a pipe function that accepts and composes them sequentially. While an average Fluent Interface fan like me would have to _extend Sequence_ to get a couple new methods, an average Piping enjoyer only needs to _make a new Sink_. That's writing a new class from one you don't own vs making a single-method middleware class. Ah - the beauty of the visitor pattern.

So next time you're trying to implement a lazy anything and need to compose intermediate states of a pipeline (every weekend, I know) and think to yourself: "should I add the methods directly, or use a pipe function?", the answer is, if you want to give your users the possibility of extending your class' functionality in a safe way, use pipes. If you're making a "final functionality" sort of class (like a Collection), then you're free to use method chaining. It just looks so much better...