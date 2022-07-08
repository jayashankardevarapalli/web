import React from "react";
import "./assets/project.css";
import axios from "axios";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";

class Projects extends React.Component {
  state = {
    details: [],
  };

  componentDidMount() {
    let data;

    axios
      .get("http://localhost:8000/api/con/")
      // .get(`${process.env.REACT_APP_API_URL}api/con/`)
      .then((res) => {
        data = res.data;
        this.setState({
          details: data,
        });
      })
      .catch((err) => {});
  }

  render() {
    return (
      <>
        <div className="container cls">
          <h1 className="projects">Projects: </h1>
        </div>
        {this.state.details.map((detail, id) => (
          <div key={id}>
            <div className="container">
              <div className="pro">
                <MDBCard
                  style={{ maxWidth: "1024px" }}
                  shadow="0"
                  border="light"
                  background="white"
                  className="mb-3"
                >
                  <MDBRow className="g-3">
                    <MDBCol md="4">
                      <MDBCardImage src={detail.thumbnail} alt="..." fluid />
                    </MDBCol>
                    <MDBCol md="8">
                      <MDBCardBody>
                        <MDBCardTitle>{detail.title}</MDBCardTitle>
                        <MDBCardText>{detail.shortdis}</MDBCardText>
                        <MDBBtn
                          outline
                          rounded
                          className="m-1"
                          href={detail.giturl}
                        >
                          <MDBIcon fab icon="github" />
                          &nbsp;&nbsp;Github
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
                <br />
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}
export default Projects;
