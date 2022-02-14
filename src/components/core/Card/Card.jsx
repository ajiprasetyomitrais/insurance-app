import React from 'react';
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { value } = props;
  const navigate = useNavigate();

  return (
    <div className="insurance-card">
      <img className="insurance-img" src="/images/bg_insurance.jpg" alt="background-img" />
      <div className="insurance-details">
        <h5 className="insurance-title" onClick={() => navigate(`/details/${value.id}`)}>{value.name}</h5>
        <p className="insurance-sub">{value.description}</p>
        <p className="insurance-price">{`${value.price}/month`}</p>
        <span className="insurance-type">{value.type}</span>
      </div>
    </div>
  )
}

export default Card