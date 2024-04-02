import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

function Item(props) {
  const [done, setDone] = useState(false);
  return (
    <div
      onClick={() => setDone(!done)}
      className={`
    w-full border-b p-3 flex justify-between cursor-pointer select-none
    `}
    >
      {/* left side */}
      <div>
        <span className="pr-2 text-[12px] text-slate-400">
            {props.time}
            </span>
        <span className={`${done === true ? "line-through" : ""} text-[18px]`}>
          {props.item}
        </span>
      </div>

      {/* right side */}
      <div onClick={()=> props.removeHandler(props.id)}>
        <BsTrash className="text-[#e74c3c]" />
      </div>
    </div>
  );
}

export default Item;
