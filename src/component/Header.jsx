import React from "react";
import DropdownSelect from "./Select";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
import avater from "../images/profile.jpg";
import SearchBar from "./SearchBar";

const notificationIconStyle = {
  width: "17.54px",
  height: "20px",
  color: "#3E3F48",
  marginTop: "22px",
  marginRight: "19px",
};

const avaterStyle = { width: "32px", height: "32px", marginTop: "16px" };

const dropdownStyle = {
  marginTop: "16px",
  marginRight: "19px",
  paddingLeft: "4px",
};

const coffeeHouse = [ 'KFC', 'CFC', 'BFC'];
const person = ['Watson', 'Alison', 'Tomas'];


const Header = () => {
  return (
    <div style={{}} className="header">
      <div className="rowView">
        <div className="starbucks">
          <DropdownSelect name="Starbucks" options={coffeeHouse} />
        </div>
        <div className="d-none d-md-block">
          <SearchBar />
        </div>
      </div>
      <div className="rowView">
        <div>
          <NotificationsNoneOutlinedIcon sx={notificationIconStyle} />
        </div>
        <div>
          <Avatar sx={avaterStyle} src={avater} />
        </div>
        <div style={dropdownStyle}>
          <DropdownSelect name="John Doe" options={person} />
        </div>
      </div>
    </div>
  );
};

export default Header;
