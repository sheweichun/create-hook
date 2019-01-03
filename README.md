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

