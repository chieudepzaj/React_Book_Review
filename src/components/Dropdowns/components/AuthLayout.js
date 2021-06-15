import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const AuthLayout = () => {
  return (
    <Fragment>
      <span
        className={
          "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
        }
      >
       Giao diện khách
      </span>
      <Link
        to="/auth/login"
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        }
      >
        Đăng Nhập
      </Link>
      <Link
        to="/auth/register"
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        }
      >
        Tạo Tài Khoản
      </Link>
    </Fragment>
  );
};

export default AuthLayout;
