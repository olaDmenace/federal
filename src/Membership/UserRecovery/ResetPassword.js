import React from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../utils/PageTitle";

function ResetPassword() {
  PageTitle("FIRS Reset Password");
  return (
    <div className="space-y-10 px-5">
      <h2 className="text-4xl font-bold">Reset Password.</h2>
      <div className="mx-auto place-self-center space-y-10">
        <input
          className="input input-bordered input-primary w-2/3 md:1/3"
          placeholder="mail@email.com"
          type="email"
          name=""
          id=""
        />
        <button className="btn btn-primary block self-center mx-auto">
          Send
        </button>
      </div>
      <br></br>
      <Link to={"/"}>
        <span className="font-bold underline underline-offset-4 pt-10">
          Log In
        </span>
      </Link>
    </div>
  );
}

export default ResetPassword;
