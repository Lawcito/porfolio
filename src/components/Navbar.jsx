import { Link } from "react-router-dom";
import logo from "../assets/lawLogo.png";

const routes = [
  { path: "skills", label: "Skills" },
  { path: "work", label: "Work" },
  { path: "contact", label: "Contact" },
];

function Navbar() {
  return (
    <>
      <nav className="md:block hidden h-14 bg-[#ECA72C]">
        <ul className="flex justify-around items-center h-full text-[#221E22] font-serif">
          <li>
            <Link to="/">
              <img src={logo} alt="logo" className="w-8 h-8" />
            </Link>
          </li>
          {routes.map(({ path, label }, index) => {
            return (
              <li key={index} className="hover:text-[#44355B] hover:underline">
                <Link to={path}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
