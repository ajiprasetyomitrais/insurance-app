import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../utils/listDataInsurance";

const DetailInsurance = (props) => {
  let params = useParams();
  const currentInsurance = data.filter((data) => {
    if (data.id.includes(params.id)) {
      return data;
    }
  });
  currentInsurance.map((data) => {
    console.log(data.name);
  })
  return (
    <div className="details-insurance">
      <img className="insurance-img" src="/images/bg_insurance.jpg" alt="bg_insurance" />
      <div>
        <h5>Health Insurance</h5>
        <p>Traditional Life Insurance Protection until the age of 99 years with premium payment options as a valuable inheritance for loved ones.</p>
        <span className="insurance-type">Syariah</span>
        <div>
          <h5>Rp.300.000 - Rp.1.000.000/month</h5>
          <button>Request</button>
        </div>
      </div>
    </div>
  )
};

export default DetailInsurance;
