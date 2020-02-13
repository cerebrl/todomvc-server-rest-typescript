# RESTful TodoMVC Service Application

## Project Intention

This serves as a simple RESTful service for the other TodoMVC example applications.

## Project Progress

[NOTE: Each linked commit below is be a working version of the application. Earlier versions, may have some bugs. Listed from latest to oldest.]

- [ ] Feature: Add multi-user capability
- [ ] Feature: Convert from URL Query based update to request body update and Joi schema validation
- [x] Tech: Clean up unneeded code and libraries, and reorganize files ([HEAD](https://github.com/cerebralideas/todomvc-server-rest-typescript))
- [x] Tech: Roughly convert [Universal TodoMVC application](https://github.com/cerebralideas/todomvc-universal-react-pouchdb) to solely a RESTful service.

## Up and Running

```
npm install
npm run build
npm start
```

Visit `localhost:3000` in your browser.

## What's a RESTful service application?

[Coming soon ...]

Here's the full tech-stack that we've chosen to execute this idea:

- **TypeScript**: used for transpiling (JSX and ES6) and module bundling for universal module design
- **Rx.js**: this is a powerful async library that uses Reactive Functional Programming at its core
- **Express**: our lightweight, un-opinionated, server framework
- **PouchDB**: quick data persistence solution

#### A bit on the top 4:

> TypeScript is a language for application-scale JavaScript development. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open Source.
>
> _[TypeScript - typescriptlang.org](http://typescriptlang.org)_

> RxJS (Reactive Extensions Library for JavaScript) is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.
>
> _[RxJS - https://rxjs.dev/](https://rxjs.dev/)_

## Learning TypeScript

The [TypeScript website](http://typescriptlang.org) is a great resource for getting started.

Here are some links you may find helpful:

- [Tutorial](http://www.typescriptlang.org/Tutorial)
- [Code Playground](http://www.typescriptlang.org/Playground)
- [Documentation](https://github.com/Microsoft/TypeScript/wiki)
- [Applications built with TypeScript](http://www.typescriptlang.org/Samples)
- [Blog](http://blogs.msdn.com/b/typescript)
- [Source Code](https://github.com/Microsoft/TypeScript)

Articles and guides from the community:

- [Thoughts on TypeScript](http://www.nczonline.net/blog/2012/10/04/thoughts-on-typescript)
- [ScreenCast - Why I Like TypeScript](http://www.leebrimelow.com/why-i-like-typescripts)

Get help from other TypeScript users:

- [TypeScript on StackOverflow](http://stackoverflow.com/questions/tagged/typescript)
- [Forums](https://github.com/Microsoft/TypeScript/issues)
- [TypeScript on Twitter](http://twitter.com/typescriptlang)

_If you have other helpful links to share, or find any of the links above no longer work, please [let us know](https://github.com/tastejs/todomvc/issues)._

## Learning Express

Express has been around for a very long time, so documentation is ubiquitous. But, if you need a reference, the framework's main site is the place to go: http://expressjs.com/.

## Learning Redux

Redux has some great documentation at their main site here: http://redux.js.org/.

Here are some links you may find helpful:

- [Egghead.io video tutorials](https://egghead.io/series/getting-started-with-redux)
- [Original TodoMVC from which this was made](https://github.com/reactjs/redux/tree/master/examples/todomvc)

## Learning RxJS (RFP)

There's a lot of information out there about Reactive Functional Programming (RFP), much of which can get really academic. What I like to do when teaching RFP is start with something almost any JS dev is going to be familiar with using &ndash; arrays and array methods.

Here are some links that discuss the foundations:

- [2 minute introduction to Rx](https://medium.com/@andrestaltz/2-minute-introduction-to-rx-24c8ca793877)
- [Asynchronous Programming: The End of The Loop](https://egghead.io/courses/asynchronous-programming-the-end-of-the-loop)
- [RxJS Beyond the Basics: Creating Observables from scratch](https://egghead.io/courses/rxjs-beyond-the-basics-creating-observables-from-scratch)
- [Save time avoiding common mistakes using RxJS](https://egghead.io/courses/save-time-avoiding-common-mistakes-using-rxjs)

Here is the more academic stuff:

- [The introduction to Reactive Programming you've been missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)

There's even a whole online "manual": [Learn RxJS](https://www.learnrxjs.io/)
