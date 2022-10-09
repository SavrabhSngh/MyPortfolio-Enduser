import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Divider } from "@mui/material";
import "./Settings.css";
import GetIcons from "../../Common/GetIcons";

const Settings = () => {
  return (
    <Card sx={{ minWidth: 275, m: "30px" }}>
      <div className="card-header dflex">
        {GetIcons("Settings")} <h2>Settings</h2>
      </div>
      <Divider />
      <CardContent>
        <p>Dummy Text fo dev testing</p>
      </CardContent>
    </Card>
  );
};

export default Settings;
