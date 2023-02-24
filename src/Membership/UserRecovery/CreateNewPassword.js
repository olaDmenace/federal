import React from "react";
import PageTitle from "../../utils/PageTitle";

function CreateNewPassword() {
  PageTitle("A&C Create New Pssword");
  return (
    <div className="space-y-10 px-5">
      <h2 className="text-4xl font-bold">Cretae New Password.</h2>
      <input
        className="input input-bordered input-primary w-2/3 md:1/3"
        placeholder="New Password"
        type="password"
        name=""
        id=""
      />
      <input
        className="input input-bordered input-primary w-2/3 md:1/3"
        placeholder="Confirm New Password"
        type="password"
        name=""
        id=""
      />
      <button className="btn btn-primary block self-center mx-auto">
        Send
      </button>
    </div>
  );
}

export default CreateNewPassword;
