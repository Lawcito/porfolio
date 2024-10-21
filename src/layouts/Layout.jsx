import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="flex flex-col bg-[#0D3B66]">
      <div className="sticky top-0">
     <Navbar/>
      </div>
      <div className="h-screen">
        <Outlet/>
      </div>
      <div className="hidden">
        <Navbar/>
      </div>
    </div>
  );
}
export default Layout;
