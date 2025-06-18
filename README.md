# @veksa/react-event-injector

[![npm version](https://img.shields.io/npm/v/@veksa/react-event-injector.svg?style=flat-square)](https://www.npmjs.com/package/@veksa/react-event-injector)
[![npm downloads](https://img.shields.io/npm/dm/@veksa/react-event-injector.svg?style=flat-square)](https://www.npmjs.com/package/@veksa/react-event-injector)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE.md)

Declarative React event manager for handling DOM events with explicit passive/active support

## Installation

@veksa/react-event-injector requires React 19.0.0 or later.

### Using npm or yarn

```
# npm
npm install @veksa/react-event-injector

# yarn
yarn add @veksa/react-event-injector
```

## Features

- Declarative DOM event management for React components
- Support for passive and non-passive event listeners
- Event capturing support
- Native DOM event handling (instead of React synthetic events)
- Ability to attach events to any DOM node
- Lightweight implementation (1kb)

## Basic Usage

```jsx
import { ActiveListener } from '@veksa/react-event-injector';

function ScrollComponent() {
  const handleScroll = (event) => {
    console.log('Scroll position:', event.currentTarget.scrollTop);
  };

  return (
    <ActiveListener onScroll={handleScroll}>
      <div className="scrollable-content">
        Content goes here...
      </div>
    </ActiveListener>
  );
}

}
```

## API Reference

### Components

#### ActiveListener

The primary component exported by this package. Allows attaching non-passive (active) event listeners to DOM elements.

```jsx
import { ActiveListener } from '@veksa/react-event-injector';
```

Props:
- `children`: React element or render prop function
- Event props: Any standard event handler (onClick, onScroll, etc.)
- `settings`: Optional listener settings (defaults to `{ passive: false }`)
- `pure`: If set, prevents event listener updates on component rerenders

### Usage Patterns

#### With Single Element Child

Use a single React element as a child. The listeners will be attached to this element.

```jsx
import { ActiveListener } from '@veksa/react-event-injector';

<ActiveListener onClick={handleClick} onKeyDown={handleKeyDown}>
  <div>Events will be attached to this element</div>
</ActiveListener>
```

#### With Render Props

Use a render prop function that receives a ref-setting function.

```jsx
import { ActiveListener } from '@veksa/react-event-injector';

<ActiveListener onClick={handleClick}>
  {setRef => (
    <div ref={setRef}>
      Events will be attached to this element
    </div>
  )}
</ActiveListener>
```

#### With Capture Phase

Use `[event]Capture` naming convention for capture phase events.

```jsx
import { ActiveListener } from '@veksa/react-event-injector';

<ActiveListener 
  onClick={handleClick}
  onKeyDownCapture={handleCapturedKeyDown}
>
  <div>Content with events</div>
</ActiveListener>
```

## Event Handling

Unlike React's synthetic events, this library:

1. Works directly with native DOM events
2. Allows explicit control over passive/active event listeners
3. Can be used for events React doesn't handle natively
4. Works with DOM nodes outside the React tree

## Browser Support

Supports all modern browsers with feature detection for passive event support.

## Contributing

Contributions are welcome. Please feel free to submit a Pull Request.

## License

[MIT](LICENSE.md)
