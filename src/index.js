import { useState, useEffect } from 'react';
import debounce from './utils/debounce';

export const BREAKPOINTS = {
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  MOBILE: 'mobile',
};

const getBreakpoint = function(width) {
  if (width >= 992) {
    return BREAKPOINTS.DESKTOP;
  }
  if (width >= 768) {
    return BREAKPOINTS.TABLET;
  }

  return BREAKPOINTS.MOBILE;
};

const useBreakpoints = (settings = { debounceTime: 250 }) => {
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    const newWidth = document.documentElement.clientWidth;
    setWidth(newWidth);
  };

  const handleResizeDebounce = debounce(handleResize, settings.debounceTime);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResizeDebounce);

    return () => {
      window.removeEventListener('resize', handleResizeDebounce);
    }
  }, []);

  return {
    width,
    breakpoint: getBreakpoint(width),
  };
};

export default useBreakpoints;
