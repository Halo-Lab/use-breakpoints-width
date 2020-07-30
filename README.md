# useBreakpoints

A React hook for getting the current breakpoint name and screen width.   

## Usage 
Initialize `useBreakpoints` with a configuration object. The return value will be an object with the breakpoint's name (string) and screen width (number). 

```jsx
import useBreakpoints from 'use-breakpoints-width';

export default function App() {
  const { breakpoint, width } = useBreakpoints();

  return `The current breakpoint is ${breakpoint} and current screen width is ${width}px`
}
```  

Consider using constants to verify the current breakpoint value. See the example below. 

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

## Default values

> To define custom breakpoints width and debounce delay, see available settings below: 

**Breakpoints**
* Desktop (`width >= 992`)
* Tablet (`width > 768` && `width < 992`)
* Mobile (`width < 768`)

**Debounce**

* Number in milliseconds (default 250ms).


## Settings

### Breakpoints

You can configure custom breakpoints by providing an object as the first parameter.

```js
const { breakpoint } = useBreakpoints({ 
  mobile: 0, 
  tablet: 768, 
  desktop: 1200 
});
```

It's possible to change just one breakpoint other one's will be defined by default values.

```js
const { breakpoint } = useBreakpoints({ 
  desktop: 1200 
});

// result => { mobile: 0, tablet: 768, desktop: 1200 }
}
```
### Debounce delay time

`useBreakpoints` uses debounce due to optimization purposes. You can change the delay time to meet your requirements. Provide a new value as the second parameter. Number in milliseconds (default 250ms).

```js
...
const { breakpoint, width } = useBreakpoints({ 
  mobile: 0, 
  tablet: 768, 
  desktop: 1200 
}, 500);
```
You can pass an empty object to keep default breakpoints values and set the new debounce time delay.
```js
...
const { breakpoint, width } = useBreakpoints({}, 500);
```

