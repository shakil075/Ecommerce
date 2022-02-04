import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/style.css";
import { DataContext } from "../../lib/Context";

const Select = ({ Arr }) => {
  const [state, setState] = useState({
    pass: "optionscontainer",
    arrow: "selected",
    productCat: "Select Products",
  });

  const context = useContext(DataContext);
  const { addData } = context;

  const navigate = useNavigate();

  const selectFunc = () => {
    if (state.pass == "optionscontainer active") {
      setState({
        pass: "optionscontainer",
        arrow: "selected",
        productCat: "Select Products",
      });
    } else {
      setState({
        pass: "optionscontainer active",
        arrow: "selected active",
        productCat: "Select Products",
      });
    }
  };

  const chnageName = (name) => {
    addData(name);
    navigate("/products");
    if (state.pass == "optionscontainer active") {
      setState({
        pass: "optionscontainer",
        arrow: "selected",
        productCat: name,
      });
    } else {
      setState({
        pass: "optionscontainer active",
        arrow: "selected active",
        productCat: name,
      });
    }
  };

  return (
    <div className="selectbox">
      <div className={state.arrow} onClick={selectFunc}>
        {state.productCat}
      </div>
      <div className={state.pass}>
        {Arr.map((item, index) => (
          <div
            key={index}
            onClick={(e) => chnageName(item.search)}
            className="option"
          >
            <input
              type="radio"
              className="radio"
              id={item.search}
              name="category"
            />
            <label htmlFor={item.search}>{item.search}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
