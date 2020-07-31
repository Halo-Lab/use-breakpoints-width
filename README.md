# use-breakpoints-width

A React hook for getting the current breakpoint name and screen width.   

## Usage 
Initialize `use-breakpoints-width` with a configuration object. The return value will be an object with the breakpoint's name (string) and screen width (number). 

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
      {`Breakpoint name is ${breakpoint}. Screen width is ${width}px`}
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

You can configure custom breakpoints by providing an object as the parameter.

```js
const { breakpoint } = useBreakpoints({ 
  breakpoints: {
    desktop: 1200,
    tablet: 768,
    mobile: 0
  }
});
```
More examples for breakpoint names.
```js
const { breakpoint } = useBreakpoints({ 
  breakpoints: {
    xxlarge: 1440,
    xlarge: 1200,
    large: 1024,
    medium: 640,
    small: 0,
  }
});
```

```js
const { breakpoint } = useBreakpoints({ 
  breakpoints: {
    'big-screen': 1440,
    'small screen': 768,
    'mobile_screen': 640,
  }
});
```

### Debounce delay time

This custom hook uses debounce due to optimization purposes. You can change the delay time to meet your requirements. Provide a new value as the `debounceDelay` property value. Number in milliseconds (**default 250ms**)).

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
It's possible to left it undefined so default value will apply (**default 250ms**).  
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

