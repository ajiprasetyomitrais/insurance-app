import React, { useEffect, useState } from "react";
import Card from "../../components/core/Card";
import InputField from "../../components/core/InputField";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const listInsurances = useSelector((state) => state.DashboardReducer.value);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [typeInsurance, setTypeInsurance] = useState("");

  const handleSearch = (e) => {
    setTypeFilter("search");
    setQuery(e.target.value);
  };

  const handleSelectType = (e) => {
    setTypeFilter("selectType");
    setQuery(e.target.value);
    setTypeInsurance(e.target.value);
  }

  return (
    <div>
      <div className="insurance-filter">
        <InputField
          name="searchInput"
          type="text"
          placeholder="Search insurance..."
          handleChange={handleSearch}
        />
        <div className="filter-group">
          <div className="dropdown">
            <select className="select-type-dropdown" value={typeInsurance} onChange={handleSelectType} name="typeInsurance" id="typeInsurance">
              <option value="syariah">syariah</option>
              <option value="non syariah">non syariah</option>
            </select>
          </div>
        </div>
      </div>
      <h5 className="total-insurance">8 Insurance</h5>
      <div className="list-insurance">
        {listInsurances
          .filter((data) => {
            if (query === "") {
              return data;
            } else if (
              typeFilter === "search" &&
              data.name.toLowerCase().includes(query.toLowerCase())
            ) {
              return data;
            } else if (
              typeFilter === "selectType" &&
              data.type.toLowerCase().includes(query.toLowerCase())
            ) {
              return data;
            }
          })
          .map((data, index) => (
            <Card key={index} value={data} />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
