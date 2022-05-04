import * as React from "react";


export default function DropdownSelect({name}) {


  return (
    <div class="dropdown me-1">
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
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
        <li>
          <a class="dropdown-item" href="#">
            Action
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Another action
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </li>
      </ul>
    </div>
  );
}
