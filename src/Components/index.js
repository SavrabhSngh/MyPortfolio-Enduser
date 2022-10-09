import Drawer from "./Drawer/Drawer";
import DrawerAppBar from "./AppBar/DrawerAppBar";
import "./index.css";
import Footer from "./Footer/Footer";
import Settings from "./Settings/Settings";
import Education from "./Education/Education";

const Session = () => {
  return (
    <div className="session">
      <div className="left-session">
        <Drawer />
      </div>
      <div className="right-session">
        <DrawerAppBar />
        <Settings />
        <Education />
        <Footer />
      </div>
    </div>
  );
};

export default Session;
