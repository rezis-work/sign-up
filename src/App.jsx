import { Heading } from "./Components/Heading/Heading";
import { Price } from "./Components/Price/Price";
import { Sign } from "./Components/Sign/Sign";

function App() {
  return (
    <>
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 xl:hidden"
          style={{ backgroundImage: `url('./images/bg-intro-mobile.png')` }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center z-0 hidden xl:block"
          style={{ backgroundImage: `url('./images/bg-intro-desktop.png')` }}
        />
        <div
          className="main-wrapper w-[375px] h-[1204px] flex flex-col mx-auto pt-[88px] py-[88px] px-[24px] bg-[#FF7979] z-10 xl:flex-row xl:py-[121px] xl:w-full
         xl:px-[165px]  xl:mx-auto xl:justify-center xl:gap-12 xl:items-center xl:h-[100vh]"
        >
          <Heading
            heading="Learn to code by watching others"
            text="See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. "
          />
          <div className=" flex flex-col gap-[24px]">
            <Price text="Try it free 7 days then $20/mo. thereafter" />
            <Sign />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
