import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GetIcons from "../../Common/GetIcons";
import { DrawerInfo } from "../../Services/Constants";
import "./Drawer.css";

const Drawer = () => {
  return (
    <div className="left-drawer">
      <div className="drawer-header dflex">
        <h2>Portfolio Builder</h2>
      </div>
      <List>
        {Object.keys(DrawerInfo).map((obj, index) => {
          return (
            <ListItem disablePadding key={index}>
              <ListItemButton>
                <ListItemIcon sx={{ color: "#fff" }}>
                  {GetIcons(DrawerInfo[obj])}
                </ListItemIcon>
                <ListItemText primary={obj} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Drawer;
