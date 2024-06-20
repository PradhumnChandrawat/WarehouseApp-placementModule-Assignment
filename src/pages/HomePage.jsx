import React, { useState, useEffect } from "react";
import WarehouseList from "../components/WarehouseList";
import warehousesData from "../data/warehousedata.json";
import "./HomePage.css";

const HomePage = () => {
  const [warehouses, setWarehouses] = useState(warehousesData);
  const [filters, setFilters] = useState({
    name: "",
    city: "",
    cluster: "",
    spaceAvailable: "",
  });

  // Function to extract unique values for select dropdowns
  const getUniqueValues = (key) => {
    const keySet = new Set(warehousesData.map((item) => item[key]));
    return Array.from(keySet);
  };

  useEffect(() => {
    const filteredWarehouses = warehousesData.filter((warehouse) => {
      return (
        warehouse.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        warehouse.city.toLowerCase().includes(filters.city.toLowerCase()) &&
        warehouse.cluster
          .toLowerCase()
          .includes(filters.cluster.toLowerCase()) &&
        (filters.spaceAvailable
          ? warehouse.space_available <= parseInt(filters.spaceAvailable)
          : true)
      );
    });
    setWarehouses(filteredWarehouses);
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div className="filter-container">
        {/* Dropdown for names */}
        <select name="name" value={filters.name} onChange={handleFilterChange}>
          <option value="">Select a warehouse</option>
          {getUniqueValues("name").map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>

        {/* Dropdown for cities */}
        <select name="city" value={filters.city} onChange={handleFilterChange}>
          <option value="">Select a city</option>
          {getUniqueValues("city").map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        {/* Dropdown for clusters */}
        <select
          name="cluster"
          value={filters.cluster}
          onChange={handleFilterChange}
        >
          <option value="">Select a cluster</option>
          {getUniqueValues("cluster").map((cluster) => (
            <option key={cluster} value={cluster}>
              {cluster}
            </option>
          ))}
        </select>

        {/* Input for space available */}
        <input
          type="number"
          name="spaceAvailable"
          placeholder="Max space available"
          value={filters.spaceAvailable}
          onChange={handleFilterChange}
        />
      </div>
      <WarehouseList warehouses={warehouses} />
    </div>
  );
};

export default HomePage;
