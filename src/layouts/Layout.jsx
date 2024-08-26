import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="flex flex-col w-screen h-screen bg-[#221E22]">
      <div className="sticky top-0 lg:block hidden">
     <Navbar/>
      </div>
      <div className="h-full w-full">
        <Outlet/>
      </div>
      <div className="hidden ">
        <Navbar/>
      </div>
    </div>
  );
}

export default Layout;
