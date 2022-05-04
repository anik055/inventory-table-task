import React from "react";
import SearchBar from "./SearchBar";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import TableFooter from "./TableFooter";

const tableData = [
  {
    date: "11 nov 2019",
    title: "Hammer",
    details: "this is a hammer to work with",
    status: "Alright",
    quantity: "100",
    quantity1: "200",
    unitPrice: "$10",
    amount: "$2000.00",
    color: "#44C776",
  },
  {
    date: "11 nov 2019",
    title: "Hammer",
    details: "this is a hammer to work with",
    status: "Out of Stock",
    quantity: "200",
    quantity1: "350",
    unitPrice: "$10",
    amount: "$2000.00",
    color: "#F52828",
  },
  {
    date: "11 nov 2019",
    title: "Hammer",
    details: "this is a hammer to work with",
    status: "Out of Stock",
    quantity: "200",
    quantity1: "250",
    unitPrice: "$10",
    amount: "$2000.00",
    color: "#F52828",
  },
  {
    date: "11 nov 2019",
    title: "Hammer",
    details: "this is a hammer to work with",
    status: "Alright",
    quantity: "2",
    quantity1: "400",
    unitPrice: "$10",
    amount: "$2000.00",
    color: "#44C776",
  },


  {
    date: "11 nov 2019",
    title: "Hammer",
    details: "this is a hammer to work with",
    status: "In Progress",
    quantity: "20",
  quantity1: "300",
    unitPrice: "$10",
    amount: "$2000.00",
    color: "#F58A28",
  },
  {
    date: "11 nov 2019",
    title: "Hammer",
    details: "this is a hammer to work with",
    status: "In Progress",
    quantity: "200",
    quantity1: "300",
    unitPrice: "$10",
    amount: "$2000.00",
    color: "#F58A28",
  },
];

const dateStyle = { width: '80%' }

const arrowUpStyle = {
                      position: "absolute",
                      width: "10px",
                      height: "11.23px",
}

const circleIconStyle =  {
                          height: "8px",
                          width: "8px",
                          marginLeft: "8px",
                        }

const Table = () => {
  return (
    <div>
      <div className="title">Inventory</div>
      <hr />
      <div className="inventory-table">
        <div
          className="d-flex d-md-block justify-content-center"
          style={{ padding: "12px 16px" }}
        >
          <SearchBar />
        </div>
        <table className="tableData ">
          <thead style={{ backgroundColor: "#FDF4ED" }}>
            <tr style={{ paddingLeft: "19px", marginRight: "16px" }}>
              <th
                className="d-none d-md-inline-block"
                style={{ width: "17.5px" }}
              >
                <input className=" checkbox" type="checkbox" />
              </th>
              <th
                style={dateStyle}
                className="d-none d-md-inline-block text-end"
              >
                Date Updated{" "}
                <ArrowDownwardIcon sx={{ width: "10px", height: "11.23px" }} />{" "}
              </th>
              <th className="title-data" style={{ position: "relative" }}>
                Title{" "}
                <span className="px-2">
                  <ArrowUpwardIcon sx={arrowUpStyle} />
                  <ArrowDownwardIcon
                    sx={{
                      ...arrowUpStyle,
                      top: "17px",
                    }}
                  />{" "}
                </span>
              </th>
              <th className="d-none d-xl-block text-start">Details</th>
              <th>Status</th>
              <th className="text-end">Quantity</th>
              <th className="d-none d-lg-block text-end">Unit Price</th>
              <th className="amount-head"

              >
                Amount{" "}
                <span className="px-2">
                  <ArrowUpwardIcon sx={arrowUpStyle} />
                  <ArrowDownwardIcon
                    sx={{
                      ...arrowUpStyle,
                      top: "17px",
                    }}
                  />
                </span>
              </th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((rowData) => {
              return (
                <tr>
                  <td
                    className="d-none d-md-inline-block"
                    style={{ width: "17.5px" }}
                  >
                    <input className=" checkbox" type="checkbox" />
                  </td>
                  <td
                    style={dateStyle}
                    className="d-none d-md-inline-block text-end date-data"
                  >
                    {rowData.date}
                  </td>
                  <td className="title-data">{rowData.title}</td>
                  <td className="d-none d-xl-block">{rowData.details}</td>
                  <td>
                    <span>
                      <span className="d-none d-sm-inline ">
                        {rowData.status}
                      </span>
                      <CircleIcon
                        sx={{ ...circleIconStyle, color: `${rowData.color}` }}
                      />{" "}
                    </span>
                  </td>
                  <td className="text-end">
                    <span style={{ fontWeight: "bold" }}>
                      {rowData.quantity}
                    </span>
                    /{rowData.quantity1}
                  </td>
                  <td className="d-none d-lg-block text-end">
                    {rowData.unitPrice}
                  </td>
                  <td style={{ paddingRight: "16px" }} className="text-end">
                    {rowData.amount}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <TableFooter />
      </div>
    </div>
  );
};

export default Table;
