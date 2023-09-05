import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MailIcon } from "@heroicons/react/solid";
import { LockClosedIcon } from "@heroicons/react/outline";
import endpoint from "../../utils/endpoints/endpoint";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../utils/features/userSlice";
import LoadingSpinner from "../../utils/LoadingSpinner";

function LoginForm({ setAuth }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const dispatch = useDispatch();
  const loginURL = "/auth/login";
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    // setLoading(!loading)
    e.preventDefault();
    setErrMsg("");
    const data = {
      email: email,
      password: password,
    };

    endpoint
      .post(loginURL, data)
      .then((res) => {
        console.log(res);
        setEmail("");
        setPassword("");
        setSuccess(res.data.message);
        dispatch(
          login(
            // {
            //     data: data,
            //     loggedIn: true
            // }
            res.data.data
          )
        );
        // setLoading(!loading)
        setTimeout(() => {
          navigate("/welcome");
        }, 3000);
      })
      .catch((err) => {
        setEmail("");
        setPassword("");
        setErrMsg(err.response.data.message);
      });
      // setLoading(!loading)
  };

  return (
    <div className="space-y-10">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col gap-5 place-items-center"
      >
        {success && <p className="text-green-900 text-lg">{success}</p>}
        {errMsg && <p className="text-red-900 text-lg">{errMsg}</p>}
        <fieldset className="flex items-center border py-2 px-2 rounded-md active:outline w-4/5 md:w-2/3 gap-1">
          <MailIcon className="h-8 text-place" />
          <input
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoFocus
            placeholder="user@mail.com"
            className="bg-transparent placeholder:text-place outline-none h-10 w-full"
          />
        </fieldset>
        <fieldset className="flex items-center border py-2 px-2 rounded-md active:outline w-4/5 md:w-2/3 gap-1">
          <LockClosedIcon className="h-8 text-place" />
          <input
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="bg-transparent placeholder:text-place outline-none h-10 w-full"
          />
        </fieldset>
        <fieldset className="flex justify-between items-center gap-16 w-5/6  md:w-2/3">
          <label className="label cursor-pointer space-x-3 flex items-center">
            <input type="checkbox" className="checkbox checkbox-primary" />
            <span className="label-text text-primary">Remember me</span>
          </label>
          <Link to={"/ResetPassword"}>
            <p className="text-sm">Forgot Password</p>
          </Link>
        </fieldset>
        {loading&&<LoadingSpinner />}
        {!loading&&<button disabled={email==='' && password===''} onClick={handleSubmit} className="btn btn-primary">
          Sign In
        </button>}
      </form>
      <p className="text-center">
        Do not have an accout yet? <br />{" "}
        <Link to={"/register"}>
          <span className="font-bold underline underline-offset-4">
            Create Account
          </span>
        </Link>
      </p>
    </div>
  );
}

export default LoginForm;
