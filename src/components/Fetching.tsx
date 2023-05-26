const Fetching = ({ progress }:{progress:string}) => {
  return (
    <div className="relative h-[100px] w-[100px] inline-block">
      <div
        className={`absolute top-0 left-0 w-full h-full border-[10px] rounded-full border-y-[#3498db] overflow-hidden`}
        style={{ transform: `rotate(${+progress * 5}deg)` }}
      ></div>
      <div className="text-[#3498db] text-center font-bold text-[24px] absolute bottom-[50%] right-[50%] translate-x-[50%] translate-y-[50%]">
        {progress}%
      </div>
    </div>
  );
};

export default Fetching;
