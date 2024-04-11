"use client";
import ActiveOrders from "@/components/main/profile/ActiveOrders";
import ClosedOrders from "@/components/main/profile/ClosedOrders";
import * as React from "react";

interface IOrdersProps {}

const Orders: React.FunctionComponent<IOrdersProps> = (props) => {
  // USE STATES
  const [activeOrderComp, setActiveOrderComp] = React.useState("active_orders");

  // FUNCTIONS
  const handleActiveOrdersComp = (prop: string) => {
    setActiveOrderComp(prop);
  };

  return (
    <div className="w-[80%] left-[20%] pt-2 relative flex items-center justify-center flex-col">
      <div className="grid grid-cols-2">
        <button
          className={`text-md capitalize px-6 ${
            activeOrderComp === "active_orders" && "text-pantoneOrange"
          } border-r border-gray-400`}
          onClick={() => handleActiveOrdersComp("active_orders")}
        >
          active orders <span>(3)</span>
        </button>
        <button
          className={`text-md capitalize px-6 ${
            activeOrderComp === "closed_orders" && "text-pantoneOrange"
          }`}
          onClick={() => handleActiveOrdersComp("closed_orders")}
        >
          closed orders <span>(2)</span>
        </button>
      </div>

      <div className="flex flex-col gap-y-10 mt-8 h-[509px] overflow-auto">
        {activeOrderComp === "active_orders" ? (
          <ActiveOrders />
        ) : (
          <ClosedOrders />
        )}
      </div>
    </div>
  );
};

export default Orders;
