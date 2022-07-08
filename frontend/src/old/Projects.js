import React from "react";
import axios from "axios";

class Projects extends React.Component {
  state = {
    details: [],
  };

  componentDidMount() {
    let data;

    axios
      // .get("http://localhost:8000/api/con/")
      .get(`${process.env.REACT_APP_API_URL}api/con/`)
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
      <div>
        {this.state.details.map((detail, id) => (
          <div key={id}>
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  <div className="col">
                    <div className="card shadow-sm">
                      <img
                        class="card-img-top"
                        src={detail.thumbnail}
                        alt="Card image cap"
                      />

                      <div className="card-body">
                        <h5 class="card-title">{detail.title}</h5>
                        <p className="card-text">{detail.shortdis}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <a
                              href={`/projects/${detail.slug}`}
                              class="btn btn-primary"
                            >
                              Know More
                            </a>
                          </div>
                          <small className="text-muted">
                            {detail.created_at}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Projects;
