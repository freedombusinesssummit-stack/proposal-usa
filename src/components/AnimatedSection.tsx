"use client";
import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animStyles: Record<string, React.CSSProperties> = {
    "fade-up": visible
      ? { opacity: 1, transform: "translateY(0)" }
      : { opacity: 0, transform: "translateY(40px)" },
    "fade-in": visible
      ? { opacity: 1 }
      : { opacity: 0 },
    "slide-left": visible
      ? { opacity: 1, transform: "translateX(0)" }
      : { opacity: 0, transform: "translateX(-40px)" },
    "slide-right": visible
      ? { opacity: 1, transform: "translateX(0)" }
      : { opacity: 0, transform: "translateX(40px)" },
    "scale-in": visible
      ? { opacity: 1, transform: "scale(1)" }
      : { opacity: 0, transform: "scale(0.92)" },
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...animStyles[animation],
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
