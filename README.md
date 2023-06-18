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
      <Molstar pdbId="1LOL" />
    </div>
  );
}

export default App;
```

This will render a full page Molstar plugin, with the structure 1LOL loaded.

### Props

#### `pdbId`

You can pre-load an official PDB structure by supplying its 4 letter ID as a prop.

#### `url`

You can also pre-load a structure by passing in the URL of the file - as long as it is a file type that Molstar supports.

#### `file`

Thirdly, you can provide a file object, which should have a `filestring` property and a `type` property (`"pdb"`, `"mmcif"` etc. - anything that molstar itself natively supports).

#### `dimensions`

By default the molstar plugin will take up the full screen. If you want it to act as just a normal div, you can provide a `[width, height]` array instead.

#### `className`

A class name to apply to the outer parent element.

#### `useInterface`

If `true`, the full Molstar interface will be used around the core canvas.

#### `showControls`

If `true` and `useInterface` is `true`, the controls will be shown around the sides of the interface. Only recommended for large sizes.

#### `showAxes`

If `true`, axes will appear in the bottom left corner.

## Changelog

### Release 0.5.2

*13 May 2023*

- Fixed 'Invalid data cell' issue.
- Fixed duplicate-fetch issue.

### Release 0.5.1

*26 April 2022*

- Fixed issue where `?key=value` params in URLs would break extension parsing.

### Release 0.5.0

*4 March 2022*

- Added option to provide filestring directly.
- Added option to toggle axes in bottom left corner.

### Release 0.4.0

*29 January 2022*

- Now uses Plugin and PluginUI directly instead of Viewer.
- Class name prop.
- Plugin now clears first when pdbID/URL prop changes.

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