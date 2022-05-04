import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="list-item d-lg-inline  ">
        <div
          className=" d-inline d-lg-block"
          style={{ padding: "8px 0px 8px 0px" }}
        >
          <span className="list-icon  ">
            <OtherHousesOutlinedIcon
              sx={{
                height: "20px",
              }}
            />
          </span>
          <span className="d-none  d-lg-inline sidemenu ">Dashboard</span>
        </div>
      </div>
      <div className="list-item d-lg-inline  ">
        <div
          className=" d-inline inventory-menu d-lg-block"
          style={{ padding: "8px 0px" }}
        >
          <span className="list-icon  ">
            <InsertDriveFileOutlinedIcon
              sx={{
                height: "20px",
              }}
            />
          </span>
          <span className="d-none  d-lg-inline sidemenu ">Inventory</span>
        </div>
      </div>
      <div className="list-item d-lg-inline  ">
        <div
          className=" d-inline d-lg-block"
          style={{ padding: "8px 0px 8px 0px" }}
        >
          <span className="list-icon  ">
            <ArticleIcon
              sx={{
                height: "20px",
              }}
            />
          </span>
          <span className="d-none  d-lg-inline sidemenu ">Documents</span>
        </div>
      </div>
      <div className="list-item d-lg-inline  ">
        <div
          className=" d-inline d-lg-block"
          style={{ padding: "8px 0px 8px 0px" }}
        >
          <span className="list-icon  ">
            <SettingsOutlinedIcon
              sx={{
                height: "20px",
              }}
            />
          </span>
          <span className="d-none  d-lg-inline sidemenu ">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
