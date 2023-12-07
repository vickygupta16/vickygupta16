import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import VG_3 from "../images/VG_3.png";
import Table from 'react-bootstrap/Table';
import "../App.css";

export function Personal() {
  return (
    <div id="personal" className="text-center">
      <Container>
        <h3 className="section-title">About me</h3>
        <Row>
          <Col>
            <Image src={VG_3} className="front-image" />
          </Col>
          <Col>
            <Card className="align-middle shadow-lg">
            <Card.Body>
            <Table className="personal-table" hover>
              <tbody>
                <tr className="personal-table-row">
                  <td colspan="2">Hi, I am an <span className="designation">A</span>ssociate <span className="designation">S</span>oftware <span className="designation">E</span>ngineer, working full time in FinTech organization since Jan 2022</td>
                </tr>
                <tr className="personal-table-row">
                  <td className="personal-content-title">Name</td>
                  <th className="personal-content-values">Vicky Gupta</th>
                </tr>
                <tr className="personal-table-row">
                  <td className="personal-content-title">Email</td>
                  <th className="personal-content-values"><a href="mailto:vickygupta16599@gmail.com" className="mail-link">vickygupta16599@gmail.com</a></th>
                </tr>
                <tr className="personal-table-row">
                  <td className="personal-content-title">Mobile</td>
                  <th className="personal-content-values"><a href="tel:+91 8879835947" className="mob">+91 8879835947</a></th>
                </tr>
                <tr className="personal-table-row">
                  <td className="personal-content-title">Date of Birth</td>
                  <th className="personal-content-values">16<sup>th</sup> May 1999</th>
                </tr>
                <tr className="personal-table-row">
                  <td className="personal-content-title">Location</td>
                  <th className="personal-content-values">Mumbai, India</th>
                </tr>
                <tr className="personal-table-row">
                  <td className="personal-content-title">Nationality</td>
                  <th className="personal-content-values">Indian</th>
                </tr>
              </tbody>
            </Table>
            </Card.Body>
            </Card>
          </Col>
        </Row>
        <br/><br/><br/>
        <hr/>
      </Container>
    </div>
  );
}
