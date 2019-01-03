# create-hook

Enhance React.useState hook


# Install

Hooks are currently a React [RFC](https://github.com/reactjs/rfcs/pull/68) and **not ready for production**. Use at minimum `react@16.7.0-alpha.0` to use this package._

`yarn add create-hook`
or
`npm install create-hook`

# Quick example



```javascript
import * as React from "react";
import { render } from "react-dom";
import createHook from "create-hook";

function App() {
  const {state,setState} = createHook(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{state}</h2>
      <button onClick={() => setState(c => c - 1)}>-</button>
      <button onClick={() => setState(c => c + 1)}>+</button>
      <button onClick={() => setState(0)}>Reset</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
```

Open the demo in [code-sandbox](https://codesandbox.io/s/q9q7yrxjkj) to see it in action

# API

```javascript
// create a new local state value in a React function component
const count = createHook(0)

// same, but with initializer function
const {state,setState} = createHook(() => 0)


// change the state with to the given value
setState(0)

// update the state using an updater function, that receives the current state and returns the next one
count(c => c + 1)
```

`useSt8` has the same call-signature as the [React `useState`](https://reactjs.org/docs/hooks-state.html) hook. 
Except, instead of returning a tuple with the current value and a setter, it returns a single function.
The function returned can be called in two different ways:
* With zero arguments. In that case the current state is returned.
* With one argument. In that case the current state is updated with the given value, or using an updater function, just like the normal `useState` [update function](https://reactjs.org/docs/hooks-reference.html#functional-updates).

That's all.

# Benefits

* No array destructurings needed, which polute your closures with name pairs, like `const [count, setCount] = useState(0)`. Instead, `const count = useSt8(0)` just reads nicer. And it saves some characters. Super important. All IMHO 😉.
* 🚀 Doesn't rely on array destructurings, which are potentially slow as they use the iterator protocol ([background](https://docs.google.com/document/d/1hWb-lQW4NSG9yRpyyiAA_9Ktytd5lypLnVLhPX9vamE/edit)). Note that you probably won't notice this in practice, so this is more of a fun fact than an argument to use this. 

# Example

With `useState` ([offical example](https://reactjs.org/docs/hooks-reference.html#functional-updates)):

```javascript
import { useState } from "react"

function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
    </>
  );
}
```

With `useSt8`:

```javascript
import { useSt8 } from "use-st8"

function Counter({initialCount}) {
  const count = useSt8(initialCount);
  return (
    <>
      Count: {count()}
      <button onClick={() => count(0)}>Reset</button>
      <button onClick={() => count(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => count(prevCount => prevCount - 1)}>-</button>
    </>
  );
}
```

_[sarcasm]Which saves a whooping 21 characters. Now go forth and refactoring all the things![/sarcasm]_

# The name

_useSt8_ is a shorter form of _useState_, which has _8_ characters. Also, the pronounciation is pretty similar to "useState".

# Cool?

Do you think this cool and useful? Consider buying me a coffee!<br/><a href="https://www.buymeacoffee.com/mweststrate" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>