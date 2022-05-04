import React from "react";
import Select from "react-select";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Dropdown = ({ customStyle, value }) => {
  return (
    <div className="dropdown">
      <Select styles={customStyle} options={options} value={value} />
    </div>
  );
};

export default Dropdown;
