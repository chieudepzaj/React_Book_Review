import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

import AuthContext from "../../store/auth-context";
import AuthLayout from "./components/AuthLayout";
import ProfileLayout from "./components/ProfileLayout";
import AdminLayout from "./components/AdminLayout";

const PagesDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const ctx = useContext(AuthContext);

  return (
    <>
      <a
        className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Tùy chọn
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
        style={{ marginTop: "0.5rem" }}
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Thể loại
        </span>
        <Link
          to="/genre/Tiểu sử"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Tiểu sử
        </Link>
        <Link
          to="/genre/Tiểu thuyết"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Tiểu thuyết
        </Link>
        <Link
          to="/genre/Lịch sử"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Lịch sử
        </Link>
        <Link
          to="/genre/Khoa học viễn tưởng"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Khoa học viễn tưởng
        </Link>
        <Link
          to="/genre/Viễn tưởng"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Viễn tưởng
        </Link>
        <Link
          to="/genre/"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Tất cả các thể loại
        </Link>
        {ctx.currentUser === "admin" && <AdminLayout />}
        {!ctx.isLoggedIn && <AuthLayout />}
        {ctx.isLoggedIn && <ProfileLayout currentUser={ctx.currentUser} />}
      </div>
    </>
  );
};

export default PagesDropdown;
