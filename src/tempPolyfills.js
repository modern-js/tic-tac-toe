/* eslint-disable */
//This file was added to fix a warning for missing requestAnimationFrame function that were introduced from changes by react 16.
//This should be fixed with react 16.0.1 by the end of November
const raf = global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0);
};

export default raf;
