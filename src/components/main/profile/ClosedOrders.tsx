import * as React from "react";
import ProductOrdered from "./ProductOrdered";

interface IClosedOrdersProps {}

const ClosedOrders: React.FunctionComponent<IClosedOrdersProps> = (props) => {
  return (
    <>
      <ProductOrdered status="canceled" />
      <ProductOrdered status="delivered" />
    </>
  );
};

export default ClosedOrders;
