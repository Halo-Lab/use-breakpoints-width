import { useState, useEffect } from 'react';
import debounce from './utils/debounce';

export const BREAKPOINTS = {
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  MOBILE: 'mobile',
};

const defaultBreakponts = { 
  mobile: 0, 
  tablet: 768, 
  desktop: 992 
};

const getBreakpoint = function(width, breakpoints) {
  if (width >= breakpoints.desktop) {
    return BREAKPOINTS.DESKTOP;
  }
  if (width >= breakpoints.tablet) {
    return BREAKPOINTS.TABLET;
  }

  return BREAKPOINTS.MOBILE;
};

const checkBreakpoints = (breakpoints) => {
  if(Object.keys(breakpoints).length === 0 || !breakpoints) {
    return defaultBreakponts;
  }

  return {
    ...defaultBreakponts,
    ...breakpoints
  };
}

const useBreakpoints = (
  breakpointsSettings = defaultBreakponts, 
  debounceTimeSettings = 250
) => {
  const [width, setWidth] = useState(0);

  const breakpoints = checkBreakpoints(breakpointsSettings);

  const handleResize = () => {
    const newWidth = document.documentElement.clientWidth;
    setWidth(newWidth);
  };

  const handleResizeDebounce = debounce(handleResize, debounceTimeSettings);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResizeDebounce);

    return () => {
      window.removeEventListener('resize', handleResizeDebounce);
    }
  }, []);

  return {
    width,
    breakpoint: getBreakpoint(width, breakpoints),
  };
};

export default useBreakpoints;
