import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import React from "react";
const iconStyle = {
  height: "20px",
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className=" list-item d-lg-inline  ">
        <div className="sidebar-option d-inline d-lg-block">
          <span className="list-icon">
            <OtherHousesOutlinedIcon sx={iconStyle} />
          </span>
          <span className="d-none d-lg-inline sidemenu">Dashboard</span>
        </div>
      </div>
      <div className="list-item d-lg-inline  ">
        <div className="sidebar-option d-inline inventory-menu d-lg-block">
          <span className="list-icon  ">
            <InsertDriveFileOutlinedIcon sx={iconStyle} />
          </span>
          <span className="d-none  d-lg-inline sidemenu ">Inventory</span>
        </div>
      </div>
      <div className="list-item d-lg-inline  ">
        <div className="sidebar-option d-inline d-lg-block">
          <span className="list-icon  ">
            <ArticleIcon sx={iconStyle} />
          </span>
          <span className="d-none  d-lg-inline sidemenu ">Documents</span>
        </div>
      </div>
      <div className="list-item d-lg-inline  ">
        <div className="sidebar-option d-inline d-lg-block">
          <span className="list-icon  ">
            <SettingsOutlinedIcon sx={iconStyle} />
          </span>
          <span className="d-none  d-lg-inline sidemenu ">Settings</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
