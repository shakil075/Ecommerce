import React from "react";
import { useParams } from "react-router-dom";
import ProductShop from "./ProductShop";

const PassParams = () => {
  const { id } = useParams();
  return (
    <div>
      <ProductShop id={id} />
    </div>
  );
};

export default PassParams;
