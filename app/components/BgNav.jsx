import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function BgNav({ id, children, onVisible }) {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  // وقتی بخش visible شد، بخش activeNav را به parent می‌فرستیم
  useEffect(() => {
    if (inView && onVisible) {
      onVisible(id);
    }
  }, [inView, id, onVisible]);

  return (
    <section ref={ref} id={id} style={{ minHeight: "100vh" }}>
      {children}
    </section>
  );
}
