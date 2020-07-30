# useBreakpoints

A React hook for getting the current breakpoint name and screen width.

## Usage 
Initialize `useBreakpoints` with a configuration object. The return value will be an object with the breakpoint's name (string) and screen width (number).
<br>

```jsx
import useBreakpoints from 'use-breakpoints-width';

export default function App() {
  const { breakpoint, width } = useBreakpoints();

  return `The current breakpoint is ${breakpoint} and current screen width is ${width}px`
}
```
<br>
<br>
Consider using constants to verify the current breakpoint value. See the example below.
<br>

```jsx
import useBreakpoints, { BREAKPOINTS } from 'use-breakpoints-width';

export default function App() {
  const { breakpoint } = useBreakpoints();

  return (
    <div>
      {breakpoint === BREAKPOINTS.DESKTOP && 'Desktop Breakpoint'}
      {breakpoint === BREAKPOINTS.TABLET && 'Tablet Breakpoint'}
      {breakpoint === BREAKPOINTS.MOBILE && 'Mobile Breakpoint'}
    </div>
  );
}
```

## Available breakpoints
* Desktop (`width >= 992`)
* Tablet (`width > 768` && `width < 992`)
* Mobile (`width < 768`)

## Settings

`useBreakpoints` use debounce due to optimization purposes. You can change delay time to meet your requirements.

* `debounceTime` - number in milliseconds (default 150ms)

  ```js
  ...
  const { breakpoint, width } = useBreakpoints({ debounceTime: 500 });
  ```
