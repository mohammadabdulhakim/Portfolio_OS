import { useEffect, useRef } from "react";

const CursorLight = () => {
  const lightRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (lightRef.current) {
        lightRef.current.style.top = `${e.y}px`;
        lightRef.current.style.left = `${e.x}px`;
      }
    };

    const handleMouseOut = () => {
      if (lightRef.current) {
        lightRef.current.style.display = `none`;
      }
    };

    const handleMouseOver = () => {
      if (lightRef.current) {
        lightRef.current.style.display = `block`;
        lightRef.current.style.boxShadow =
          "10px 10px 200px 45px rgba(255, 255, 255, 0.5)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <span
      ref={lightRef}
      className="z-[10] block cursor-none fixed rounded-full translate-x-[-50%] translate-y-[-50%]"
      ></span>
      //  <span className="bg-red-500 block h-screen w-screen absolute"></span>
  );
};

export default CursorLight;
