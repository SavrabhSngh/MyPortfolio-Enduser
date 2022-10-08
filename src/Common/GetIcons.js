import Dashboard from "@mui/icons-material/Dashboard";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ManageAccounts from "@mui/icons-material/ManageAccounts";
import PictureAsPdf from "@mui/icons-material/PictureAsPdf";
import Settings from "@mui/icons-material/Settings";
import ContactPage from "@mui/icons-material/ContactPage";
import Logout from "@mui/icons-material/Logout";

const GetIcons = (param) => {
  switch (param) {
    case "Dashboard":
      return <Dashboard />;
    case "Account":
      return <AccountCircle />;
    case "ManageAccounts":
      return <ManageAccounts />;
    case "Document":
      return <PictureAsPdf />;
    case "Settings":
      return <Settings />;
    case "ContactPage":
      return <ContactPage />;
    case "Logout":
      return <Logout />;
    default:
      return "";
  }
};

export default GetIcons;