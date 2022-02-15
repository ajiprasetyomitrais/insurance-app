import { Container, Row, Col } from "react-bootstrap";
import Dashboard from '../Dashboard'
import Bell from "../../components/Icons/Bell";
import ChevronDown from "../../components/Icons/ChevronDown";
import Home from "../../components/Icons/Home";

const Main = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={2} data-testid="side_navigation" className="side-nav">
          <div data-testid="profile-user" className="profile-user">
            <img className="image-profile" src="images/elon.jpg" alt="" />
            <div className="details-profile">
              <p>
                Jhon Doe <ChevronDown />
              </p>
              <p>New York</p>
            </div>
          </div>
          <div className="group-nav">
            <div className="dashboard-nav">
              <Home />
              <span className="title-nav">Dashboard</span>
            </div>
          </div>
        </Col>
        <Col lg={10} className="right-content">
          <div className="top-nav">
            <h5>Prodigi</h5>
            <Bell />
          </div>
          <Dashboard />
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
