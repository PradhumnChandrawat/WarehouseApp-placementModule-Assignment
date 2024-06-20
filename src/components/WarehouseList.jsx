import React from "react";
import WarehouseItem from "./WarehouseItem";
import "./WarehouseList.css";

const WarehouseList = ({ warehouses }) => {
  return (
    <div className="warehouse-list">
      {warehouses.map((warehouse) => (
        <WarehouseItem key={warehouse.id} warehouse={warehouse} />
      ))}
    </div>
  );
};

export default WarehouseList;
