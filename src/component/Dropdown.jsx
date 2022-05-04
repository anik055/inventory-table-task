import React from "react";
import Select from "react-select";
const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
];

const Dropdown = ({ customStyle, value }) => {
  return (
    <div className="dropdown">
      <Select styles={customStyle} options={options} value={value} />
    </div>
  );
};

export default Dropdown;
