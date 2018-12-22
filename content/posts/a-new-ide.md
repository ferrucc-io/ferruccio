---
title: "A functional IDE for React"
date: 2018-12-21T20:43:10+01:00
draft: false
description: "Re-Imagining IDEs for functional programming. What happens when functions replace files and become the smallest unit of code."
featured_image: "/a-new-ide/functions-not-files.png"
---

6 years ago this video came out.

{{< youtube H58-n7uldoU >}}

At the time I couldn’t code yet.

This concept is still mind blowing to me.

![](/a-new-ide/light-table.gif)

Up until now I always thought about code as a lot of files, that you divide in components.

But when working on a functional project we could try and consider it a collection of functions instead.

As no IDEs think this way I decided to try and create a prototype for a *new* kind of IDE taking this idea as its guiding principle. 

This is not a new idea, but maybe in the past it wasn't the right time for it.

## 💡 Here's my concept for a functional text editor

![](/a-new-ide/ide-mockup.png)

![](/a-new-ide/add-function.png)


## 🏛 Taking inspiration from the past
There are two people working on fundamentally different software development experiences, Bret Victor and Chris Granger, there are others too, but these two people have had an outsized impact on new ways of thinking about programming.

Let’s focus on what Chris Granger has done in this space: [Light Table](https://lighttable.com/) and [Eve](https://witheve.com/).

* Light Table: is an IDE that came before Atom/VS Code and Brackets.
* Eve: a programming language with an IDE that has a radically more human friendly approach to coding

{{< youtube TWAMr72VaaU >}}

These two projects at the time of inception have definitely paved the way for something better than the current paradigm of files and folders to take hold.

When Chris Granger first posted about Light Table on Hacker News a lot of people started saying that he wasn't inventing anything new..

In "[All ideas are old ideas](http://www.chris-granger.com/2012/10/05/all-ideas-are-old-ideas/)" Chris goes forward to say that Light Table is as much about rediscovering the past as about creating something for the future.

I also found [some insightful comments](https://news.ycombinator.com/item?id=3837202) providing additional ideas that still haven't been implemented in most workflows, that can be summed up with.

* The smallest unit of code is the function.
* Able to get instant feedback on code changes (results, app windows, graphics, other tools.
* Multiple editors with just one function in it. Show code in an "area of concern" not just in a file.
* Never have to look for documentation

There's also an extra point which is "*The coding environment can show also results, app windows, graphics, other tools.*". I'll skip this as I think it's okay to have a distinction between things like Jupyter Notebooks and IDEs for web development.

With [Eve](https://witheve.com/) Chris Granger is trying to break this division and while I think it's a great idea, there's not much adoption.

## 𝑓 The shift from files to functions

I think that VS Code at the moment is the best IDE experience out there so took some user experience cues from it and added this “functional view” of a project.

**What is a “functional view”?**

The idea is to treat functions like you would treat files and folders like files. 

Other than having a normal file view, one can create some boards that contain functions or full files.

A killer application of this is in React.

For React developers this would be great to have a quick overview of components.

A standard for many React developers is to structure components in the following way:

![](/a-new-ide/file-structure.png)

An example use case would be creating a board with the component code, the styling and the tests.

Here's how it would look like:

![](/a-new-ide/react-example.png)

Taking cues from the list of points previously mentioned this JS development workflow would have the following traits:

* Embrace functions as a unit of code
* Instant rendering of changes with Hot Reloading

The only missing point for a front end workflow is **"Never have to look for Documentation"**.

This is a little challenging because across libraries at the moment there isn't a standard documentation format for each function.

For Clojure code where the documentation of functions is generally the function code, this is easy. It gets more tricky for React Components.

I'll leave how to solve this problem to the collective imagination.

I'm curious to find out how people feel about this and if this makes any sense to build.

## 👷‍♂️ Building an IDE from scratch is a ton of work.

After having this idea and creating a mockup concept of it I started asking myself the question: 

> **How can I make this happen?**   

Building an IDE here are the things you have to build, because people expect them:

* An extensible plugin system
* Code Highlighting
* Code Autocomplete (for the language, the external libraries and local functions )
* A theme system to customize the look
* Search and Replace features
* A preview system for all types of file
* Git integration
* Command line integration
* REPL support
* Tooling for Debugging

So after a basic analysis it's not hard to figure out that starting from scratch is too much work for a solo developer with no external funding.

**The solution is clearly to build on top of existing solutions**

The options I consider viable are:

* [**Atom**](https://atom.io)
* [**Visual Studio Code**](https://code.visualstudio.com/)
* [**Light Table**](http://lighttable.com/)

The disadvantage of all three is that they're all non native Apps built on Electron. It's great because of the cross platform part of it, but I have a personal preference for native apps when free to pick.

Atom and VS Code have a good customization and plugin ecosystem, which is also well documented.

Light Table is almost abandoned and half baked, but it's in ClojureScript, so the irrational part of me is drawn to it.

## 🔜 What's next?

I'm going to reach out to as many developers as possible to measure how much interest there is for something like this. 

If you're interested in getting notified about what happens next you can either leave your email in the form under the post or email me at *[hi] @ th1s domain* with any feedback, or ideas for features or on how to make this happen.

*Special thanks to Sean Walker for reviewing this article and giving me the initial inspiration to write this*