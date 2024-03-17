import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [name, setName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  // const data = useContext(UserContext);
  // console.log(data);

  let btnName = "Login";

  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex justify-between bg-slate-200 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-36" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4">Online Status : {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4 cursor-pointer hover:translate-y-0.5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 cursor-pointer hover:translate-y-0.5">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 cursor-pointer hover:translate-y-0.5">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 cursor-pointer hover:translate-y-0.5">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-black text-black text-xl cursor-pointer hover:translate-y-0.5">
            <Link to="/cart">🛒 ({cartItems.length} items)</Link>
          </li>
          <li className="px-4 cursor-pointer hover:translate-y-0.5">
            <button
              className="px-4 py-1 border border-solid border-black rounded-lg bg-slate-700 text-white"
              onClick={() => {
                name === "Login" ? setName("Logout") : setName("Login");
              }}
            >
              {name}
            </button>
          </li>
          {/* <li className="px-4 font-semibold">{data.loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
