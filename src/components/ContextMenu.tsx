import { CSSProperties, useEffect, useState } from "react";
import { contextMenuItems } from "../../constants/index.mjs";
import { useOsStore } from "../../libs/osStates";

function ContextMenu({
  divId,
  openProgram,
}: {
  divId: string;
  openProgram: (pName: string) => void;
}) {
  const { setIconSize } = useOsStore();
  const [hidden, setHidden] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

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
    backgroundColor: "rgba(100,100,100,0.3)",
    padding: "10px",
    color: "white",
    backdropFilter: "blur(10px)",
    width: "230px",
  };

  const subMenuStyle: CSSProperties = {
    backgroundColor: "rgba(100,100,100,0.3)",
    padding: "10px",
    color: "white",
    backdropFilter: "blur(10px)",
    width: "150px",
  };

  const handleMenuClick = (action: () => void) => {
    action();
    setHidden(true);
  };

  const menuItems = contextMenuItems({ setIconSize, openProgram });

  const menu = (
    <div
      id="context-menu"
      className="drop-shadow-md text-[15px] font-extralight rounded-md transition-all duration-75 flex items-center justify-center gap-2 flex-col"
      style={menuStyle}
    >
      <ul className="relative w-full">
        {menuItems.map((item) => (
          <>
            {item.dividerBefore && (
              <span
                key={item.title}
                className="m-1 mx-2 bg-gray-400 block h-[1px]"
              />
            )}
            <div
              key={item.title}
              className="flex cursor-pointer hover:bg-[#ffffff1c] p-2 rounded-md transition-all justify-between items-center relative"
              onMouseEnter={() => setActiveSubMenu(item.title)}
              onMouseLeave={() => setActiveSubMenu("")}
              onClick={() => !item.subMenu && handleMenuClick(item.action)}
            >
              <li
                className={`${item.title} ok flex items-center justify-start gap-1`}
              >
                <i className={`uil ${item.icon}`}></i>
                <span>{item.title}</span>
              </li>
              {item.subMenu && <i className="uil-angle-right"></i>}
              {item.subMenu && activeSubMenu === item.title && (
                <>
                  <div
                    style={subMenuStyle}
                    className={`absolute right-[-150px] -top-2 drop-shadow-md text-[15px] font-extralight rounded-md transition-all duration-75 flex items-center justify-center gap-2 flex-col`}
                  >
                    <ul className="relative w-full">
                      {item.subMenu.map((subItem) => (
                        <div
                        key={subItem.title}
                          className="flex cursor-pointer hover:bg-[#ffffff1c] p-2 rounded-md transition-all justify-between items-center"
                          onClick={() => handleMenuClick(subItem.action)}
                        >
                          <li className="flex items-center justify-start gap-1">
                            <i className={`uil ${subItem.icon}`}></i>
                            <span>{subItem.title}</span>
                          </li>
                        </div>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </>
        ))}
      </ul>
    </div>
  );

  return <>{!hidden && menu}</>;
}

export default ContextMenu;
