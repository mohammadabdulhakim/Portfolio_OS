import Menu, { MenuItem, SubMenu, Divider } from "rc-menu";
import "rc-menu/assets/index.css";
import { CSSProperties, useEffect, useState } from "react";

function ContextMenu({ divId }: { divId: string }) {
  const [hidden, setHidden] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    let contextMenuNode = document.getElementById("context-menu");

    let x = e.offsetX,
      y = e.offsetY;

    let windowH = window.innerHeight,
      windowW = window.innerWidth,
      cmW = contextMenuNode?.offsetWidth || 0,
      cmH = contextMenuNode?.offsetHeight || 0;

    x = x > windowW - cmW ? windowW - cmW : x;
    y = y > windowH - cmH - 50 ? windowH - cmH - 50 : y;

    setMousePosition({ x, y });
    setHidden(false);
  };

  useEffect(() => {
    const container = document.getElementById(divId);
    container?.addEventListener("contextmenu", handleClick);

    // cleanup function to remove the event listener when the component unmounts
    return () => {
      container?.removeEventListener("contextmenu", handleClick);
    };
  }, []);

  const handleClickOutside = (e: MouseEvent | TouchEvent) => {
    const target = e.target as HTMLElement;
    if (!hidden && !target.closest("#context-menu")) {
      setHidden(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [hidden]);

  const menuStyle: CSSProperties = {
    position: "fixed",
    left: mousePosition.x,
    top: mousePosition.y,
    border: "none",
    backgroundColor: "rgba(100,100,100,0.3)",
    padding: "10px",
    color: "white",
    backdropFilter: "blur(14px)",
    width:"230px"
  };

  const handleMenuClick = (action: ()=> void) => {
    action()
    setHidden(false);
  };

  const menu = (
    <div id="context-menu" className="text-[13px] font-extralight rounded-md transition-all duration-75 flex items-center justify-center gap-2 flex-col" style={menuStyle}>
      <ul className="relative w-full">
        <li className="flex items-center justify-start gap-1 cursor-pointer hover:bg-[#ffffff1c] p-2 rounded-md transition-all" onClick={handleMenuClick}>
          <span className="material-symbols-outlined text-[20px]">autorenew</span>
          <span>Refresh</span>
        </li>
      </ul>
      <span className="material-symbols-outlined">arrow_forward_ios</span>
    </div>
  );

  return <>{!hidden && menu}</>;
}

export default ContextMenu;
