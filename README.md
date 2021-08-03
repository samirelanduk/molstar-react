# Molstar React

[![Npm Version](https://img.shields.io/npm/v/molstar-react.svg)][npm_url]
[![downloads](https://img.shields.io/npm/dt/molstar-react.svg)][npm_url]
[![license](https://img.shields.io/npm/l/molstar-react.svg)][npm_url]
[![Twitter Follow](https://img.shields.io/twitter/follow/samirelanduk)](https://twitter.com/samirelanduk)

[npm_url]: https://www.npmjs.org/package/molstar-react

A react component for adding the [Molstar Macromolecular Visualiser](https://github.com/molstar/molstar) to your app.

## Installation

With npm:

```bash
npm install molstar-react
```

## Basic Use

To use:

```jsx
import Molstar from "molstar-react";

export const App = () => {

  return (
    <div>
      <Molstar />
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

#### `dimensions`

By default the molstar viewer will take up the full screen. If you want it to act as just a normal div, you can provide a `[width, height]` array instead.

### Example

```jsx
import Molstar from "molstar-react";

export const App = () => {
  
  const options = {
    pdbProvider: "rcsb",
    layoutShowLog: false,
    layoutShowSequence: false
  }

  return (
    <div>
      <Molstar pdbId="1XDA" options={options} dimensions={[800, 600]} />
    </div>
  );
}

export default App;
```

## Changelog

### Release 0.3.0

*3 August 2021*

- Added ability to control dimensions rather than always being full-screen.
- Removed distinction between viewer and non-viewer.

### Release 0.2.1

*16 July 2021*

- Fixed re-render initialising.
- Component now disposes of viewer when removed.

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