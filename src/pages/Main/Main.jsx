import { Container, Row, Col } from "react-bootstrap";
import Dashboard from '../Dashboard'
import Bell from "../../components/Icons/Bell";

const Main = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={2} data-testid="side_navigation" className="side-nav">
          <div data-testid="profile-user" className="user-profile">
            <img className="image-profile" src="" alt="" />
            <div className="details-profile">
              <p>
                Jhon Doe <span>Icon</span>
              </p>
              <p>New York</p>
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
