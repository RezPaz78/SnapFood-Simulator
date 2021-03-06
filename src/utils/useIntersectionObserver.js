import { useEffect, useRef } from "react";

export const useIntersectionObserver = (options, cb) => {
  const ref = useRef(null);
  const cbRef = useRef(cb);
  useEffect(() => {
    const refElem = ref.current;
    const observerHandler = (entries) => {
      if (entries[0].isIntersecting) {
        if (cbRef.current) {
          cbRef.current();
        }
      }
    };
    const intersectionObserver = new IntersectionObserver(
      observerHandler,
      options
    );
    if (refElem) intersectionObserver.observe(refElem);

    return () => {
      if (refElem) intersectionObserver.unobserve(refElem);
    };
  }, [options]);
  return ref;
};
