# useBreakpoints

```js
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
      {width}{' '}{breakpoint}
    </div>
  );
}
```