---
title: "How to create boolean operators with nand"
date: 2020-04-18T21:34:47+01:00
draft: false
description: "How to create the AND, XOR and OR operators starting from NAND"
---

Doing the [nand2tetris](https://www.nand2tetris.org/) course is an extremely enlightning experience into the world of computers.

The course starts from the simplest building block, the "NAND" operators and helps you step by step to building a modern, functioning computer, OS and tetris Game.

The NAnd block stands for Not And.

It takes two binary inputs, A and B and outputs true only if they both aren't true.

| A | B | Output |
| :----:|:----: | :-:|
| 0 |  0  |  1 |
| 1  | 0 || 1 |
| 1| 1 | 0 |
| 0 | 1 | 1 |

To derive the Not operation we have to find a way of using NAnd to have this output:

| Input | Output |
| :----:| :-:|
| 0 | 1 |
| 1 | 0 |

If you think about it if you take and Element A and NAnd it with itself you'll get its opposite!

So:

```
define Not
    NAnd(A, A)
```

To derive the Or operation we have to find a way of using NAnd, and our newly defined Not to have this output:

| A | B | Output |
| :----:|:----: | :-:|
| 0 |  0  |  0 |
| 1  | 0 | 1 |
| 1| 1 | 1 |
| 0 | 1 | 1 |

If you apply Not() on every line of the previous table you get the NAnd() table.

So here's how to create an Or statement:

```
define Or
    NAnd(Not(A) Not(b))
```

To derive the And operation we have to find a way of using NAnd to have this output:

| A | B | Output |
| :----:|:----: | :-:|
| 0 |  0  |  0 |
| 1  | 0 || 0 |
| 1| 1 | 1 |
| 0 | 1 | 0 |

Deriving the AND statement is straightforward having Not and NAnd

```
define And
    Not(Nand(A B))
```

What we did here is define basic boolean logic starting from one logic gate.

This excercise is useful to keep in mind when writing code and making interfaces and interactions in general.

The Not, And & Or operations are clear and reusable abstractions of the Nand operation.

When we judge a layer of abstraction we should consider if it hides all the things we shouldn't care about.

Most human made things in the world are interfaces. Designing better abstractions is what gives us superpowers.