export function Price({ text }) {
  return (
    <div className=" flex items-center justify-center py-[18px] pl-[67px] pr-[66px] bg-[#5E54A4] border rounded-[10px] border-none shadow-custom z-50  xl:w-[540px] xl:h-[60px] xl:pl-[1px] xl:pr-[1px]">
      <h3 className=" w-[194px] text-center text-[#fff] font-bold text-[15px] leading-7 xl:w-full">
        {text}
      </h3>
    </div>
  );
}
