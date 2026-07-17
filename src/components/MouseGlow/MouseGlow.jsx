import { useEffect } from "react";
import "./MouseGlow.css";

function MouseGlow() {
  useEffect(() => {
    const glow = document.querySelector(".mouse-glow");

    const moveGlow = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  return <div className="mouse-glow"></div>;
}

export default MouseGlow ;