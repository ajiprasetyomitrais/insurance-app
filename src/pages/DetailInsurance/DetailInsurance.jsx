import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../utils/listDataInsurance";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useNavigate } from "react-router-dom";

const DetailInsurance = (props) => {
  let params = useParams();
  let navigate = useNavigate();

  const currentInsurance = data.filter((data) => {
    if (data.id.includes(params.id)) {
      return data;
    }
  });
  currentInsurance.map((data) => {
    console.log(data.name);
  });
  return (
    <div className="details-insurance">
      <Breadcrumb>
        <Breadcrumb.Item onClick={() => navigate(`/`)}>Home</Breadcrumb.Item>
        <Breadcrumb.Item active >
          Details
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="content">
        <img
          className="details-insurance-img"
          src="/images/bg_insurance.jpg"
          alt="bg_insurance"
        />
        <div className="details-content">
          <div>
            <h5 className="details-content-title">Health Insurance</h5>
            <p>
              Traditional Life Insurance Protection until the age of 99 years
              with premium payment options as a valuable inheritance for loved
              ones.
            </p>
            <span className="insurance-type">Syariah</span>
          </div>
          <div>
            <h5>Rp.300.000 - Rp.1.000.000/month</h5>
            <button className="btn-request">Request</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailInsurance;
