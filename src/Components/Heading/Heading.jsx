export function Heading({ heading, text }) {
  return (
    <div className=" flex flex-col mb-[64px] xl:w-[525px] xl:text-left">
      <h1 className=" text-center mb-[16px] text-[28px] leading-9 font-bold text-[#fff] xl:text-[50px] xl:leading-[55px] xl:text-left">
        {heading}
      </h1>
      <p className=" text-center font-[500] text-[#fff] leading-7 xl:text-[16px] xl:text-left xl:w-[450px] ">
        {text}
      </p>
    </div>
  );
}
