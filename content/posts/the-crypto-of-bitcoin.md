---
title: What is the Crypto of Bitcoin [WIP]
date: "2018-06-02T16:46:03.284Z"
draft: true
---

# This is a draft don't take *too* seriously

# CAUTION WET FLOOR 🚧🚧

As the term crypto, is now widely used to refer to cryptocurrencies I thought it would be interesting to write a simple blog post explaining the cryptography behind Bitcoin, which is one of the many layers of the digital gold we all love.

## Hashing Algorithms

A hashing algortihm is a code used to uniquely map objects.
The main reason hashing algorithms were introduced was that if in a program you want to look for a value it makes no sense to check all existing values to find what we need.

**How do they work ?**

Imagine an enourmous library that has a librarian that for every book can tell you its unique position.
![](/library.png)

In programming if we didn't have hashing functions we would have to sift through everything we have saved on our computers and check if it's what we're looking for:
![](/digital-dictionary.png)

With hashing functions we can find or know that we don't have what we need in only one step, whatever the size of our "library".

In Bitcoin there are two hashing functions used: SHA256 and RIPEMD-160.
Here's the output of SHA256 when the input is "bitcoin": 
`6b88c087247aa2f07ee1c5956b8e1a9f4c7f892a70e324f1bb3d161e05ca107b`

In Bitcoin generally the SHA256 is applied twice:

Initial input:
`bitcoin`

Output of first round of SHA256 on "bitcoin":
`6b88c087247aa2f07ee1c5956b8e1a9f4c7f892a70e324f1bb3d161e05ca107b` 

Output of second round of SHA256 on "6b88c087247aa2f07ee1c5956b8e1a9f4c7f892a70e324f1bb3d161e05ca107b":
`a23b7f87e4250b3a64b737f349c06422f752f419cbb25ae9169a6cf1e23f4462` 

When we want to get a shorter output from our hashing function, like when a Bitcoin address is created the RIPEMD-160 hash function is used in the second round:

Initial input:
`bitoin address`

Output of SHA256 on "bitcoin address":
`338fc17627ab215e5cb0c4ef807dfd161ef96febdb00e997c50db5f4bf76f383`

Output of RIPEMD-160 on "338fc17627ab215e5cb0c4ef807dfd161ef96febdb00e997c50db5f4bf76f383":
`edb33402f008c1fed31f57f625aa30403f3a9b33`


## Merkle Tree

A Merkle Tree is a signature of all the transactions contained in a block.

I tried to understand Merkle trees from definitions on the internet and textbooks, but couldn't understand how they worked until I visualised them:
![](/merkle.gif)

1. hash all the transaction.
2. pair the hashes and hash together.
3. if you have more than 1 element left go back to step one using the combined hashes as "transactions".
4. you now have the merkle root.

If you change the value of the transaction in a block, the merkle root changes.
For this reason if you want to verify the validity of a transaction you can simply check the validity of the branch on which a transaction is on:
![](/tx-validity.png)

## Elliptic Curve Cyptography

To explain Bitcoin's ECDSA (Elliptic Curve Digital Signature Algorithm) we have to understand what a Signature Algorithm is.

A **Signature Algorithm** is composed by three parts:

* a key generation algorithm, which can be shared with other public-key algorithms
* a signature generation algorithm
* a signature verification algorithm

We can build signature algorithms using hashing functions.
Using the private key we generate a unique text using the hash function on the message we want to sign.

Anyone can then use the public key to see the content of the message and the signature proves that someone with the private key of the corresponding public key signed the message.

A cryptographic system with a public and a private key is an asymmetric system.

These systems work because it's easy to calculate outputs in one direction, extremely hard in the other.
 A -> B easy
 B -> A extremely hard
 
 A property of elliptic curves is that if a line crosses an elliptic curve twice, it will cross it in another point, unless the points are opposite to each other.
 
 The Elliptic Curve used in Bitcoin is called secp256k1 here is its plot:

![](/secp256k1.png)
 
 # This is a draft don't take *too* seriously