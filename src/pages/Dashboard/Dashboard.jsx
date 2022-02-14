import React, { useEffect, useState } from "react";
import Card from "../../components/core/Card";
import InputField from "../../components/core/InputField";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

const Dashboard = () => {
  const listInsurances = useSelector((state) => state.DashboardReducer.value);
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
  }

  useEffect(() => {

  })
  return (
    <div>
      <div className="insurance-filter">
        <InputField name="searchInput" type="text" placeholder="Search insurance..." handleChange={handleSearch}/>
        <div className="filter-group">
          <div className="dropdown">Health Insurance</div>
          <div className="dropdown">Popular</div>
        </div>
      </div>
      <h5 className="total-insurance">8 Insurance</h5>
      <div className="list-insurance">
        {
          listInsurances.filter(data => {
            if (query === "") {
              return data;
            } else if(data.name.toLowerCase().includes(query.toLowerCase())) {
              return data;
            }
          }).map((data, index) => (
            <Card key={index} value={data} />
          ))
        }
      </div>
     
    </div>
  );
};

export default Dashboard;
