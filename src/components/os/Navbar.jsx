import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <div className="z-[99999] fixed bottom-0 left-0 right-0 h-[50px] bg-[#1e0c7944] backdrop-blur-md flex items-center justify-between md:px-2 px-1">
      <div id="navbar-left">left</div>

      <div id="navbar-bottom" className="bg-[#99b6df52] h-full min-w-[100px] px-2 py-0.5 rounded-md flex items-center justify-center gap-2">
        <button id="navbar-btn">
          <img src="/assets/os/icons/windows.png" />
        </button>
        {
          navLinks.map((item)=>(
          <a href={item.link} target="_blank" id="navbar-btn">
            <img src={`/assets/os/icons/${item.img}.png`} />
          </a>
          ))
        }
      </div>

      <div id="navbar-right">right</div>
    </div>
  );
};

export default Navbar;
