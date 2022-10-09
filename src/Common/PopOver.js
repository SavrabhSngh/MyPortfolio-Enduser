import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import GetIcons from "./GetIcons";
import { PopoverData } from "../Services/Constants";

const Popover = (props) => {
  return (
    <Popper
      open={props.open}
      anchorEl={props.anchorEl}
      placement={props.placement}
      transition
    >
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper sx={{ p: 2 }}>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                pl: 1,
                pr: 1,
              }}
              component="nav"
            >
              {Object.keys(PopoverData).map((obj, index) => {
                return (
                  <ListItem button key={index}>
                    {GetIcons(PopoverData[obj])}
                    <Typography sx={{ pl: 2 }}> {obj} </Typography>
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};

export default Popover;
