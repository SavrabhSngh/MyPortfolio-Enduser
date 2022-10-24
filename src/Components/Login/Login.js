import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider } from "@mui/material";
import GetIcons from "../../Common/GetIcons";
import AnimationData from "./coderBoy.json";
import Lottie from "react-lottie";
import "./Login.css";

const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationData,
  };
  return (
    <div className="login dflex">
      <Card sx={{ width: "50%", height: "60%" }}>
        <div className="card-header login-header dflex">
          {GetIcons("Login")} <h2>LOGIN</h2>
        </div>
        <Divider />
        <CardContent>
          <div className="login-left">
            <Lottie options={defaultOptions} width={400} height={400} />
          </div>
          <div className="login-right"></div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
