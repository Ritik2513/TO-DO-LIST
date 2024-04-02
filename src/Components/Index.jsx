import React, { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";

function Index(props) {
  const inputBox = useRef();
  return (
    <div className="p-3 flex justify-around">
      <input
        type="text"
        placeholder="Enter Task"
        className="p-3 
        border border-slate-400 w-[90%] focus:outline-none rounded-xl"
        ref={inputBox}
      />
      <div
        className="w-[50px] h-[50px] bg-[#e74c3c] text-white text-3xl rounded-[50%] flex justify-center items-center cursor-pointer"
        onClick={() => {
            props.handler(inputBox.current.value)
            inputBox.current.value = "";

        }}
      >
        <AiOutlinePlus />
      </div>
    </div>
  );
}

export default Index;
