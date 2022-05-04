export const customStyle = {
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  control: (provided, state) => ({
    ...provided,
    minHeight: "32px",
    height: "32px",
    width: "200px",
    border: "1px solid #B2B2B6",
    boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.07)",
  }),

  input: (provided, state) => ({
    ...provided,
    margin: "0px",
    paddingTop: "8px",
    color: "#88898E",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "30px",
    color: "#88898E",

  }),
  option: (provided, { isDisabled, isFocused, isSelected }) => ({
    ...provided,
    fontWeight: 500,
    fontSize: 12,
    lineHeight: "18px",
    letterSpacing: 0.1,
    paddingLeft: 18,
    zIndex: 99999999,

  }),
  valueContainer: (provided, state) => ({
    ...provided,
    height: "30px",
    padding: "0 6px",

  }),
  valueOption: (provided, state) => ({
    ...provided,
    zIndex: 999999,

  }),
  singleValue: (provided, state) => ({
    ...provided,
    fontSize: "13px",
    color: "#88898E",
    fontWeight: "500",
    lineHeight: "20px",
    marginBottom: "3px",

  }),
  placeholder: (provided, state) => ({
    ...provided,
    textOverflow: "ellipsis",
    maxWidth: "95%",
    whiteSpace: "nowrap",
    overflow: "hidden",

  }),
};
