const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-[50px] bg-[#1e0c7944] backdrop-blur-md flex items-center justify-between md:px-2 px-1">
      <div id="navbar-left">left</div>

      <div id="navbar-bottom" className="bg-[#99b6df52] h-full w-fit px-2 py-0.5 rounded-md">
        <button id="navbar-btn">
          <img src="/assets/os/navbar/windows.png" />
        </button>
      </div>

      <div id="navbar-right">right</div>
    </div>
  );
};

export default Navbar;
