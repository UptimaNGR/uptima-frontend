const animatedScrolllObserver = new IntersectionObserver(
  (entries, animatedScrolllObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('enter');
        animatedScrolllObserver.unobserve(entry.target);
      }
    });
  }
);
export default {
  bind(el) {
    el.classList.add('before-enter');
    animatedScrolllObserver.observe(el);
  }
};
