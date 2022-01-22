import { useState } from "react";
import AppBarComponent from "./AppBarComponent";
import Sidebar from "./Sidebar";
// import ResponsiveAppBar from "./ResponsiveAppBar";

const Navigation = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Sidebar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      <AppBarComponent openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      {/* <ResponsiveAppBar /> */}
    </>
  );
};

export default Navigation;
