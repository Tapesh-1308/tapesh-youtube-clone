import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/SideBar";

const App = () => {
  return (
    <>
      <Header />
      <div className="flex h-[calc(100% - 56px)] overflow-auto">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default App;
