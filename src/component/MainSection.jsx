import React from "react";
import Sidebar from "./Sidebar";
import Table from "./Table";

const MainSection = () => {
  return (
    <div className="main-section">
      <div className="sidebar-section  col-lg-2 ">
        <Sidebar />
      </div>
      <div className="table-section col-lg-10">
        <Table />
      </div>
    </div>
  );
};

export default MainSection;
