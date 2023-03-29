import { useRef } from "react";

const CursorLight = () => {
  const lightRef = useRef();

  window.addEventListener("mousemove", (e) => {
    lightRef.current.style.top = `${e.y}px`;
    lightRef.current.style.left = `${e.x}px`;
  });
  window.addEventListener("mouseout", (e) => {
    lightRef.current.style.display = `none`;
  });
  window.addEventListener("mouseover", (e) => {
    lightRef.current.style.display = `block`;
    lightRef.current.style.boxShadow =
      "10px 10px 200px 40px rgba(255, 255, 255, 0.5)";
    // document.body.style.cursor = "none"
  });

  return (
      <span
        ref={lightRef}
        className="z-[10] block cursor-none fixed rounded-full translate-x-[-50%] translate-y-[-50%]"
      ></span>
      //  <span className="bg-red-500 block h-screen w-screen absolute"></span>
  );
};

export default CursorLight;
