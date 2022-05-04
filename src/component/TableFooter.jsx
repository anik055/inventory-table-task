import React from 'react'
import Dropdown from './Dropdown';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { customStyle } from './CustomStyle';



const TableFooter = () => {
  return (
    <div className="table-footer d-flex  justify-content-between">
      <div className="  d-none d-md-block" style={{ margin: "4.5px 0px 0px 16px" }}>
        <Dropdown
          customStyle={customStyle}
          value={{ label: "10 items per page", value: 1 }}
        />
      </div>
      <div className="d-flex justify-content-between">
        <div style={{ margin: "4.5px 16px 0px 0px" }}>
          <Dropdown
            value={{ label: "page 1 of 5", value: 1 }}
            customStyle={{
              ...customStyle,
              control: (provided, state) => ({
                ...provided,
                minHeight: "32px",
                height: "32px",
                borderRadius: "4px",
                width: "160px",
                border: "1px solid #B2B2B6",
                boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.07)",
                // backgroundColor: "#F2F2F7",
              }),
            }}
          />
        </div>
        <div style={{ paddingRight: "16px" }}>
          <ArrowBackIosIcon
            sx={{
              width: "40px",
              margin: "4.5px 10px 0px 0px",
              height: "32px",
              border: "1px solid #B2B2B6",
              color: "#88898E",
              padding: "4px 9px 4px 12px",
              alignItems: "center",
              justifyContent: "center",
              //   display: "flex",
              borderRadius: "4px",
              boxShadow:
                "0px 5px 4px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)",
            }}
          />{" "}
          <ArrowForwardIosIcon
            sx={{
              width: "40px",
              height: "32px",
              margin: "4.5px 0px 0px 0px",
              border: "1px solid #B2B2B6",
              color: "#88898E",
              padding: "4px 9px 4px 12px",
              alignItems: "center",
              justifyContent: "center",
              //   display: "flex",
              borderRadius: "4px",
              boxShadow:
                "0px 5px 4px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default TableFooter