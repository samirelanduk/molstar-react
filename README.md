# Molstar React

[![Npm Version](https://img.shields.io/npm/v/molstar-react.svg)][npm_url]
[![downloads](https://img.shields.io/npm/dt/molstar-react.svg)][npm_url]
[![license](https://img.shields.io/npm/l/molstar-react.svg)][npm_url]
[![Twitter Follow](https://img.shields.io/twitter/follow/samirelanduk)](https://twitter.com/samirelanduk)

[npm_url]: https://www.npmjs.org/package/molstar-react

A react component for adding the [Molstar Macromolecular Visualiser](https://github.com/molstar/molstar) to your app.

## The Molstar Viewer

The Viewer is a built-in, full page interface for using Molstar. It comes with a complete set of options for loading files, changing the view, etc. If you don't need a great deal of customisation, it is the most straightforward way to use Molstar.

(It is also, for the moment, the only way of using molstar-react - more customisations are coming soon.)

To use:

```jsx
import MolstarViewer from "molstar-react";

export const App = () => {

  return (
    <div>
      <MolstarViewer />
    </div>
  );
}

export default App;
```

This will render a blank, full page interface, from which you upload a file to view, or download using a PDB code.

### Props

#### `pdbId`

You can pre-load an official PDB structure by supplying its 4 letter ID as a prop. By default these are downloaded from PDBe, but this can be customised using the Molstar options (see below).

#### `url`

You can also pre-load a structure by passing in the URL of the file - as long as it is a file type that Molstar supports.

#### `options`

The initial settings and state of the viewer are set using an options object, which has some defaults set by Molstar itself. Some useful options are:

- `layoutShowSequence` - show the polymer sequences along the top (default `true`).
- `layoutShowLeftPanel` - show the state tree on the left (default `true`).
- `collapseLeftPanel` - minimise the state tree on the left, but make it togglable (default `false`).
- `layoutShowLog` - show the event log on the bottom (default `true`).
- `layoutShowControls` - show controls around the edges (combination of above, default `true`).
- `pdbProvider` - where PDBs will be downloaded from (default `"pdbe"`).

### Example

```jsx
import MolstarViewer from "molstar-react";

export const App = () => {
  
  const options = {
    pdbProvider: "rcsb",
    layoutShowLog: false,
    layoutShowSequence: false
  }

  return (
    <div>
      <MolstarViewer pdbId="1XDA" options={options} />
    </div>
  );
}

export default App;
```

## Changelog

### Release 0.2.0

*13 July 2021*

- Made distinction between Molstar Viewer and Molstar Core.
- Enabled custom viewer options.
- Added option to load structure from URL.
- Made pre-loading structure optional.

### Release 0.1.0

*3 July 2021*

- Basic full screen Molstar.
- Added fetching by PDB ID.