import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <div className="main-content min-h-screen">{<Outlet />}</div>
      <Footer />
    </div>
  );
}

export default AppLayout;
