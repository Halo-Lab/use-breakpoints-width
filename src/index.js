import { useState, useEffect } from 'react';
import debounce from './utils/debounce';

const defaultSettings = { 
  breakpoints: {
    desktop: 992,
    tablet: 768,
    mobile: 0
  },
  debounceDelay: 250
 }

const getBreakpoint = function(width, breakpoints) {
  return Object.entries(breakpoints)
    .reduce((maxMatch, entry) => {
      const shouldSkip = width < entry[1] || entry[1] < maxMatch[1];
      return shouldSkip ? maxMatch : entry;
    }, [])
    .flat()
    .shift();
};

const useBreakpoints = (
  settings = defaultSettings
) => {
  const [width, setWidth] = useState();
  const handleResize = () => setWidth(document.documentElement.clientWidth);
  const debounceDelay = settings.debounceDelay ? settings.debounceDelay : 250;
  const handleResizeDebounce = debounce(handleResize, debounceDelay);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResizeDebounce);

    return () => {
      window.removeEventListener('resize', handleResizeDebounce);
    }
  }, []);

  return {
    width,
    breakpoint: getBreakpoint(width, settings.breakpoints),
  };
};

export default useBreakpoints;
