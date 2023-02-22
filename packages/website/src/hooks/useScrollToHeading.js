const useScrollToHeading = (pathname) => {
  const handleHeadingClick = (e) => {
    const element = document.getElementById(e.target.name);
    const top = element && window.scrollY + element.getBoundingClientRect().top;
    window.history.replaceState({}, "", `${pathname}#${e.target.name}`);
    window.scrollTo({ top, behavior: "smooth" });
  };

  return { handleHeadingClick };
};

export default useScrollToHeading;
