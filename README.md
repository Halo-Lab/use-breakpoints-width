# useBreakpoints

React hook that shows the current breakpoint name and screen width.

## Example 

```jsx
import useBreakpoints from 'use-breakpoints-width';

export default const App = () => {
  const { breakpoint, width } = useBreakpoints();

  return `The current breakpoint is ${breakpoint} and current screen width is ${width}px`
}
```
Consider using constants to verify the current breakpoint value. See the example below.

```jsx
import useBreakpoints, { BREAKPOINTS } from 'use-breakpoints-width';

const App = () => {
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

* `debounceTime` - number in milliseconds (default 150ms)

  ```js
  ...
  const { breakpoint, width } = useBreakpoints({ debounceTime: 500 });
  ```