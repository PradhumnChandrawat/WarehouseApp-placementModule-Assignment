import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import warehousesData from "../data/warehousedata.json";
import "./WarehouseDetails.css";

const WarehouseDetails = () => {
  const { id } = useParams();
  const [warehouse, setWarehouse] = useState(null);

  useEffect(() => {
    const wh = warehousesData.find((w) => w.id === parseInt(id));
    setWarehouse(wh);
  }, [id]);

  return (
    <div>
      {warehouse ? (
        <form>
          <label>
            Name:
            <input type="text" value={warehouse.name} readOnly />
          </label>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WarehouseDetails;
