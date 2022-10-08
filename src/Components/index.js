import Drawer from "./Drawer/Drawer";
import DrawerAppBar from "./AppBar/DrawerAppBar";
import "./index.css";

const Session = () => {
  return (
    <div className="session">
      <div className="left-session">
        <Drawer />
      </div>
      <div className="right-session">
        <DrawerAppBar />
      </div>
    </div>
  );
};

export default Session;
