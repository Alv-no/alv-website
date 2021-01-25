export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    require(`intersection-observer`);
  }
};

const scrollTo = (id) => () => {
  let el;
  if (id) el = document.querySelector(id);
  if (el) return window.scrollTo(0, el.offsetTop - 400);
  return false;
};

export const onRouteUpdate = ({ location }) => {
  if (location.state) {
    window.setTimeout(scrollTo(`#${location.state.employee}`), 100);
  }
};
