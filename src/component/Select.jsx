import * as React from "react";
export default function DropdownSelect({ name, options }) {

  return (
    <div className="dropdown me-1">
      <button
        type="button"
        className="btn dropdownButton dropdown-toggle"
        id="dropdownMenuOffset"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        data-bs-offset="10,20"
      >
        <span style={{ marginRight: "11px" }}>{name}</span>
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
        {options.map((option) => {
          return (
            <li className="dropdown-item">
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
