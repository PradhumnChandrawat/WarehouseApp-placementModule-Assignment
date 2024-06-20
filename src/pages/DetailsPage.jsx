import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import warehousesData from "../data/warehousedata.json";
import "./DetailsPage.css";

const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [warehouse, setWarehouse] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const foundWarehouse = warehousesData.find((w) => w.id === parseInt(id));
    if (foundWarehouse) {
      setWarehouse(foundWarehouse);
      setEditData(foundWarehouse);
    } else {
      navigate("/"); // Redirect if no warehouse found
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", editData);
    navigate("/");
  };

  if (!warehouse) return <div className="loading">Loading...</div>;

  return (
    <div className="details-container">
      <h1 className="details-title">Edit Warehouse Details</h1>
      <form onSubmit={handleSubmit} className="details-form">
        <div className="form-group">
          <label className="form-label">
            Name:
            <input
              type="text"
              name="name"
              className="form-input"
              value={editData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            City:
            <input
              type="text"
              name="city"
              className="form-input"
              value={editData.city}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Space Available:
            <input
              type="number"
              name="space_available"
              className="form-input"
              value={editData.space_available}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Cluster:
            <input
              type="text"
              name="cluster"
              className="form-input"
              value={editData.cluster}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Is Live:
            <input
              type="checkbox"
              name="is_live"
              className="form-checkbox"
              checked={editData.is_live}
              onChange={(e) =>
                handleChange({
                  target: { name: e.target.name, value: e.target.checked },
                })
              }
            />
          </label>
        </div>
        <button type="submit" className="form-button">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default DetailsPage;
