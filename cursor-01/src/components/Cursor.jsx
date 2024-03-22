import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./style.css";

function Cursor() {
  const size = 30;
  const circle = useRef();
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    mouse.current = { x: e.clientX, y: e.clientY };
  };

  const animateCursor = (x, y) => {
    gsap.set(circle.current, { x, y, yPercent: -50, xPercent: -50 });
  };

  const lerp = (x, y, alpha) => x * (1 - alpha) + y * alpha;

  const animation = () => {
    const { x, y } = delayedMouse.current;
    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };
    animateCursor(delayedMouse.current.x, delayedMouse.current.y);
    window.requestAnimationFrame(animation);
  };

  useEffect(() => {
    animation();
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={circle}
      className="animated-cursor"
      style={{
        width: size,
        height: size,
      }}
    >
      <div></div>
    </div>
  );
}

export default Cursor;
