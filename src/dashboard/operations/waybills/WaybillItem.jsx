import React from "react";

const WaybillItem = () => {
  return (
    <div className="grid gap-2 lg:w-60">
      <p>Secondary Waybills</p>
      <input className="input input-primary w-full" type="text" name="" id="" />
      {/* <input type="file" name="" id="" /> */}
      {/* Add File Preview Here */}
      {/* <img className='h-56 w-full shadow-lg' src="" alt="" /> */}
      <p>Transaction Status</p>
      <hr />
      <select className="select select-primary w-full" name="" id="">
        <option value="approved">Approved</option>
        <option value="declined">Declined</option>
      </select>
    </div>
  );
};

export default WaybillItem;
