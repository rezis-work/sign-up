import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import React from "react";

const signArr = ["First Name", "Last Name", "Email Adress", "Password"];
const textArr = [
  "First Name cannot be empty",
  "Last Name cannot be empty",
  "Looks like this is not an email",
  "Password cannot be empty",
];
const typeArr = ["text", "text", "email", "password"];

export function Sign() {
  const [isValid, setIsValid] = useState(false);
  const [input, setInput] = useState(signArr.map((item) => ""));
  const handleInputChange = (i, value) => {
    const newInput = [...input];
    newInput[i] = value;
    setInput(newInput);
  };
  const inputRef = useRef(signArr.map(() => React.createRef()));
  useEffect(() => {
    // Focus on the first input field when the component mounts
    inputRef.current[0].current.focus();
  }, []);

  function handleValid() {
    setIsValid(true);
    function pop() {
      if (isValid) {
        alert(`Your Details are Saved, ${"first name: " + input[0]},
        ${"second name: " + input[1]},
        ${"Email: " + input[2]},
        ${"password: " + input[3]}`);
      }
    }
    pop();
  }

  return (
    <div className=" flex flex-col w-[327px] bg-[#fff] p-[24px] rounded-[10px] z-50 xl:w-[540px] xl:p-[40px] shadow-custom ">
      <div className="">
        {signArr.map((item, i) => {
          return (
            <div className=" flex flex-col relative" key={uuidv4()}>
              <input
                className=" text-[14px] border-[1px] border-[#DEDEDE] mb-[6px] py-[15px] pl-[19px] w-[279px] rounded-[5px] text-[#3D3B48] outline-none xl:w-[460px] "
                placeholder={item}
                key={uuidv4()}
                type={typeArr[i]}
                value={input[i]}
                onChange={(e) => handleInputChange(i, e.target.value)}
                ref={inputRef.current[i]}
                autoFocus={input[i].trim() !== ""}
              />
              {isValid === true && input[i] === "" ? (
                <>
                  <p className=" mb-[16px] text-right text-[11px] italic text-[#FF7979]">
                    {textArr[i]}
                  </p>
                  <img
                    className=" absolute right-5 top-5 w-[24px] h-[24px]"
                    src="./images/icon.jpg"
                    alt=""
                  />
                </>
              ) : null}
            </div>
          );
        })}
        <button
          onClick={handleValid}
          className=" flex justify-center items-center mt-[10px] w-[279px] bg-[#38CC8B] text-[#fff] text-[15px] px-[44px] py-[15px] rounded-[5px] shadow-forBtn  xl:w-[460px] hover:bg-[#77E2B3]"
        >
          CLAIM YOUR FREE TRIAL
        </button>
        <p className="text-center text-[11px] w-[249px] mx-auto font-bold text-[#A6A1CF] leading-8 p-[5px] xl:w-[400px] ">
          By clicking the button, you are agreeing to our{" "}
          <span className="text-[11px] text-[#FF7979]">Terms and Services</span>
        </p>
      </div>
    </div>
  );
}
