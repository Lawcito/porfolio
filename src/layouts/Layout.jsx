import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="flex flex-col bg-[#0D3B66] h-screen">
      <div className="lg:sticky top-0 z-50">
        <Navbar />
      </div>
      <Outlet />
      <div className="hidden">
        <Navbar />
      </div>
    </div>
  );
}
export default Layout;
