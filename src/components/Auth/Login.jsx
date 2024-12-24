import image from "../../assets/Image.svg";
import google from "../../assets/Google.svg";
import facebook from "../../assets/Facebook.svg";
import picon from "../../assets/ProfileIcon.svg";
import eicon from "../../assets/EmailIcon.svg";
import eyeicon from "../../assets/EyeIcon.svg";
import keyicon from "../../assets/PasswordIcon.svg";
import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateData = () => {
    let error = {};

    // username validation
    if (username.trim() === "") {
      error.username = "Please enter username";
    }

    // email validation
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      error.email = "Please enter an email";
    } else if (!regex.test(email)) {
      error.email = "Please enter valid email address";
    }

    // password validation
    if (!password) {
      error.password = "Please enter password";
    } else if (password.length < 8) {
      error.password = "Password at least 8 character long.";
    }

    setErrors(error);
    return Object.keys(error).length === 0;
  };

  const submitHandle = (e) => {
    e.preventDefault();

    if (validateData()) {
      handleLogin(username, email, password);
      setUserName("");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div className="flex w-screen h-screen">
      <div className="flex w-full px-20 py-8">
        <div className="hidden lg:flex h-full w-full lg:w-1/2 items-center justify-center">
          <img src={image} alt="Image" className="w-[540px] p-10" />
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center px-16 py-2">
          <div className="bg-white flex flex-col w-full h-full rounded-xl">
            <h1 className="text-3xl font-normal mt-2 ml-4">Welcome to</h1>
            <p className="text-3xl font-bold text-[#6358DC] ml-4">Unstop</p>
            <div className=" flex flex-col p-2 gap-3">
              <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border-transparent outline-none shadow-lg rounded-xl cursor-pointer">
                <img src={google} alt="Google logo" />
                <p>Login with Google</p>
              </button>
              <button className="flex cursor-pointer items-center justify-center gap-2 px-4 py-2 bg-white border-transparent outline-none shadow-lg rounded-xl">
                <img src={facebook} alt="Facebook logo" />
                <p>Login with Facebook</p>
              </button>
              <div className="inline-flex items-center justify-center w-full px-6">
                <hr className="w-full h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
                <span className="px-4 font-medium text-gray-900 bg-white absolute ">
                  OR
                </span>
              </div>
            </div>

            <form className="px-6" onSubmit={submitHandle}>
              <div className="flex flex-col py-2">
                <div className="relative">
                  <label className="absolute px-12 mt-1 text-[12px] font-medium text-gray-900">
                    User name
                  </label>
                  <div className="absolute inset-y-2 start-0 flex items-center ps-3 pointer-events-none">
                    <img src={picon} />
                  </div>
                  <input
                    type="text"
                    className="block w-full pt-6 ps-12 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#F4F4F4] outline-none"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.username}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col py-2">
                <div className="relative">
                  <label className="absolute px-12 mt-1 text-[12px] font-medium text-gray-900">
                    Email
                  </label>
                  <div className="absolute inset-y-2 start-0 flex items-center ps-3 pointer-events-none">
                    <img src={eicon} />
                  </div>
                  <input
                    type="text"
                    className="block w-full pt-6 ps-12 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#F4F4F4] outline-none"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col py-2">
                <div className="relative">
                  <label className="absolute px-12 mt-1 text-[12px] font-medium text-gray-900">
                    Password
                  </label>
                  <div className="absolute inset-y-2 start-0 flex items-center ps-3 pointer-events-none">
                    <img src={keyicon} />
                  </div>
                  <input
                    type="password"
                    className="block w-full pt-6 ps-12 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#F4F4F4] outline-none"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </p>
                  )}
                  <button className="absolute inset-y-2 end-3 flex items-center ps-3 cursor-pointer">
                    <img src={eyeicon} />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="bg-[#F4F4F4]" />
                  <span className="text-[14px]">Remember me</span>
                </div>
                <a href="#" className="text-[#6358DC] text-[14px]">
                  Forgot Password?
                </a>
              </div>
              <button className="bg-[#6358DC] text-white w-full py-4 mt-4 rounded-xl text-sm">
                Login
              </button>
              <div>
                <p className="text-center mt-2">
                  Don&apos;t have an account?{" "}
                  <a href="#" className="text-[#6358DC]">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
