import React from "react";
import { BsTrash } from "react-icons/bs";

function Item() {
  return (
    <div className="w-full border-b p-3 flex justify-between">
      {/* left */}
      <div>
        <span className="pr-2 text-[12px] text-slate-400">10:30 A.M</span>
        <span>items</span>
      </div>

      {/* right */}
      <div>
        <BsTrash className="text-[#e74c3c]" />
      </div>
    </div>
  );
}

export default Item;
