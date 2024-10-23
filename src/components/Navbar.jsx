import { Link } from "react-router-dom";
import logo from "../assets/lawLogo.png";

const routes = [
  { path: "skills", label: "Skills" },
  { path: "work", label: "Work" },
];

function Navbar() {
  return (
      <nav className="md:block hidden h-14 bg-[#F8F8D4]">
        <ul className="flex justify-around items-center h-full text-[#3287C8] font-serif">
          <li>
            <Link to="/">
              <img src={logo} alt="logo" className="w-8 h-8" />
            </Link>
          </li>
          {routes.map(({ path, label }, index) => {
            return (
              <li key={index} className="hover:text-[#454C54] hover:underline">
                <Link to={path}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
  );
}

export default Navbar;
