import * as React from "react";
import ProductOrdered from "./ProductOrdered";

interface IActiveOrdersProps {}

const ActiveOrders: React.FunctionComponent<IActiveOrdersProps> = (props) => {
  return (
    <>
      <ProductOrdered status="canceled" />
      <ProductOrdered status="packaging" />
      <ProductOrdered status="delivered" />
    </>
  );
};

export default ActiveOrders;
