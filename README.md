# useBreakpoints

A React hook for getting the current breakpoint name and screen width.   

## Usage 
Initialize `useBreakpoints` with a configuration object. The return value will be an object with the breakpoint's name (string) and screen width (number). 

```js
import useBreakpoints from 'use-breakpoints-width';

export default function App() {
  const { breakpoint, width } = useBreakpoints({ 
    breakpoints: {
      desktop: 1200,
      tablet: 768,
      mobile: 0
    },
    debounceDelay: 250
   });

  return (
    <div>
      {`Breakpoint name is ${breakpoint}. Screen width is ${width}`}
    </div>
  );
}
```

> Default settings will apply in case you will provide no configuration

```js
{ 
  breakpoints: {
    desktop: 992,
    tablet: 768,
    mobile: 0
  },
  debounceDelay: 250
}
```
## Settings

### Breakpoints

You can configure custom breakpoints by providing an object as the first parameter.

```js
const { breakpoint } = useBreakpoints({ 
  breakpoints: {
    desktop: 1200,
    tablet: 768,
    mobile: 0
  }
});
```
### Debounce delay time

`useBreakpoints` uses debounce due to optimization purposes. You can change the delay time to meet your requirements. Provide a new value as the second parameter. Number in milliseconds (default 250ms).

```js
...
const { breakpoint, width } = useBreakpoints({ 
  breakpoints: {
    desktop: 1200,
    tablet: 768,
    mobile: 0
  },
  debounceDelay: 500
});
```
The default value for debounce is 250 ms. It's possible to left it undefined so default value will apply.  
```js
...
const { breakpoint, width } = useBreakpoints({ 
  breakpoints: {
    desktop: 1200,
    tablet: 768,
    mobile: 0
  }
}); // debounceDelay is 250 ms now
```

