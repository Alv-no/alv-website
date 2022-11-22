import '@fontsource/source-sans-pro/200.css';
import '@fontsource/source-sans-pro/300.css';
import '@fontsource/source-sans-pro/400.css';
import '@fontsource/source-sans-pro/700.css';
import '@fontsource/source-sans-pro/900.css';

import './src/components/layout/layout.css';
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    require(`intersection-observer`);
  }
};

const scrollTo = (id) => () => {
  let el;
  if (id) el = document.querySelector(id);
  if (el) return window.scrollTo(0, el.offsetTop);
  return false;
};

export const onRouteUpdate = ({ location }) => {
  if (location.state) {
    window.setTimeout(scrollTo(`#${location.state.employee}`), 100);
  }
  if (location.hash) {
    window.setTimeout(scrollTo(location.hash), 500);
  }
};
