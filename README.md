# Molstar React

A react component for adding the [Molstar Macromolecular Visualiser](https://github.com/molstar/molstar) to your app.

To use:

```jsx
import Molstar from "molstar-react";

export const App = () => {

  return (
    <div>
      <Molstar pdbId="1REI" />
    </div>
  );
}

export default App;
```

Currently only full-page view is supported, but more customisations will be added as development proceeds.

