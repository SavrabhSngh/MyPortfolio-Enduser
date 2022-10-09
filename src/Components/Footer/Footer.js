import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Card
        variant="outlined"
        sx={{
          width: "100%",
          pl: "2vw",
          pr: "2vw",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: { lg: "space-between", sm: "center", md: "center" },
            alignItems: "center",
            flexDirection: { sm: "column", md: "column", lg: "row" },
            width: "100%",
          }}
        >
          <div className="dflex footer-left">
            <Avatar alt="Savrabh Singh" src="./favicon.ico" />
            <p>
              <span style={{ color: "#ff014f" }}>&nbsp;Portfolio Builder</span>{" "}
              by
              <span style={{ color: "#9083d5", fontWeight: "bold" }}>
                &nbsp;Savrabh Singh
              </span>
            </p>
          </div>
          <div className="dflex footer-right">
            <p className="footer-policy">Privacy Policy</p>
            <p className="footer-terms">Terms & Conditions</p>
          </div>
        </CardContent>
      </Card>
    </footer>
  );
};

export default Footer;
