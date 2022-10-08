import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ManageAccounts, Logout, ContactPage } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

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
              <ListItem button>
                <ManageAccounts />
                <Typography sx={{ pl: 2 }}>Account</Typography>
              </ListItem>
              <ListItem button>
                <ContactPage />
                <Typography sx={{ pl: 2 }}>Contact</Typography>
              </ListItem>
              <ListItem button>
                <Logout />
                <Typography sx={{ pl: 2 }}>Logout</Typography>
              </ListItem>
            </List>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
};

export default Popover;
