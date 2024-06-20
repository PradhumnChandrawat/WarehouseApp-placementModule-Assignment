import React from "react";
import { Link } from "react-router-dom";
import "./WarehouseItem.css";

const WarehouseItem = ({ warehouse }) => {
  return (
    <Link to={`/details/${warehouse.id}`} className="warehouse-item">
      <div>
        <h3>{warehouse.name}</h3>
        <p>{warehouse.city}</p>
      </div>
    </Link>
  );
};

export default WarehouseItem;
