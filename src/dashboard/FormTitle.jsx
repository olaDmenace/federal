import React from "react";

function FormTitle(props) {
  return (
    <div className="flex justify-between items-center my-5">
      <h2 className="text-2xl text-primary font-semibold">{props.Title}</h2>
      {/* <div className="inlne flex items-center gap-3">
        <button>Save as Draft</button>
        <button className="btn btn-primary">Completed</button>
      </div> */}
    </div>
  );
}

export default FormTitle;
