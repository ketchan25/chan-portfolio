import { useEffect, useRef, useState, type RefObject } from "react";

interface RevealProps {
    children: React.ReactNode;
    delay?: number;
    direction?: "up"|"left"|"right"|"none";
    style?: React.CSSProperties;
    className?: string
}

function useInView(opts: IntersectionObserverInit = { threshold: 0.12 }): [RefObject<HTMLDivElement|null>, boolean] {
    const ref = useRef<HTMLDivElement|null>(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
    const el = ref.current; if (!el) return;
    const ob = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); ob.disconnect(); } }, opts);
    ob.observe(el);
    return () => ob.disconnect();
    }, []);
    return [ref, inView];
}

export const Reveal = ({ children, delay = 0, direction= "up", style = {}, className = "" }: RevealProps) => {
    const [ref, inView] = useInView();
    const transition = { up: "translateY(40px)", left: "translateX(-40px)", right: "translateX(40px)", none: "none" };
    return (
        <div
            ref={ref}
            className={className}
            style={{ opacity: inView ? 1 : 0,transform: inView ? "none" : transition[direction], transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`, ...style }}
            >
            {children}
        </div>
    );
};