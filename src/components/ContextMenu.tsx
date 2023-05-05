import Menu, { MenuItem, SubMenu, Divider } from "rc-menu";
import "rc-menu/assets/index.css";
import { CSSProperties, MouseEventHandler, useEffect, useState } from "react";

function ContextMenu({ divId }: { divId: string }) {
  const [hidden, setHidden] = useState(true);
  const [selectedItem, setSelectedItem] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleClick = (e:MouseEvent) => {
    e.preventDefault();
    setMousePosition({ x: e.clientX, y: e.clientY });
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

  const handleMenuClick = (item: { key: string }) => {
    setSelectedItem(item.key);
    setHidden(false);
  };

  const handleClickOutside = (e: MouseEvent | TouchEvent) => {
    const target = e.target as HTMLElement;
    if (!hidden && !target.closest(".rc-menu")) {
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
  };

  const menu = (
    <Menu
      style={menuStyle}
      onClick={handleMenuClick}
      hidden={hidden}
      selectable={false}
    >
      <MenuItem key="1">Menu Item 1</MenuItem>
      <MenuItem key="2">Menu Item 2</MenuItem>
      <SubMenu title="Menu Group">
        <MenuItem key="3">Menu Item 3</MenuItem>
        <Divider />
        <MenuItem key="4">Menu Item 4</MenuItem>
      </SubMenu>
    </Menu>
  );

  return <>{menu}</>;
}

export default ContextMenu;
