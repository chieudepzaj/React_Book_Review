import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { app } from "../../firebase";
import AuthContext from "../../store/auth-context";
import useInput from "../../hooks/use-input";

const Login = () => {
  const history = useHistory();

  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");

  const authCtx = useContext(AuthContext);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passInputError,
    valueChangeHandler: passChangeHandler,
    inputBlurHandler: passBlurHandler,
  } = useInput(isNotEmpty);

  const submitHandler = (event) => {
    event.preventDefault();
    app
      .auth()
      .signInWithEmailAndPassword(enteredEmail, enteredPassword)
      .then((userCredetial) => {
        authCtx.onLogin(userCredetial.user.displayName);
        alert(`Chào mừng bạn đến với review sách - Hi ${userCredetial.user.displayName} <3`);
        history.push("/");
      })
      .catch((error) => {
        console.log(error.message);
        alert("Email hoặc password không chính xác !");
      });
  };

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const emailInputClasses = emailInputError
    ? "block uppercase text-red-500 text-xs font-bold mb-2"
    : "block uppercase text-blueGray-600 text-xs font-bold mb-2";

  const passInputClasses = passInputError
    ? "block uppercase text-red-500 text-xs font-bold mb-2"
    : "block uppercase text-blueGray-600 text-xs font-bold mb-2";

  const submitButtonClasses = formIsValid
    ? "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
    : "bg-blueGray-600 text-white text-sm font-bold uppercase px-6 py-3 rounded shadow outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 cursor-not-allowed";
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              { <div className="rounded-t mb-0 px-6 py-6">
                
                <div className="btn-wrapper text-center">
                  
                  <Link
                  to = "/genres/"
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/1489798288.svg").default}
                    />
                    Let's Go !!! 
                  </Link>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div> }
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-6">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <h1>Đăng Nhập</h1>
                </div>
                <form onSubmit={submitHandler}>
                  <div className="relative w-full mb-3">
                    <label
                      className={emailInputClasses}
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      id="email"
                      value={enteredEmail}
                      onChange={emailChangeHandler}
                      onBlur={emailBlurHandler}
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label className={passInputClasses} htmlFor="grid-password">
                      Mật Khẩu
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      id="password"
                      value={enteredPassword}
                      onChange={passChangeHandler}
                      onBlur={passBlurHandler}
                      placeholder="Mật Khẩu"
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className={submitButtonClasses}
                      type="submit"
                      disabled={!formIsValid}
                    >
                      Đăng Nhập
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                { <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Quên mật khẩu?</small>
                </a> }
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200">
                  <small>Tạo tài khoản mới</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
