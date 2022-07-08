import React from "react";
import "./assets/about.css";

const About = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1 className="aboutme">About Me: </h1>
          <div className="px-4 py-5 my-6 text-center colorr">
            <h1 className="display-5 fw-bold">
              Hi<span className="wave">👋</span>
            </h1>
            <div className="col-lg-9 mx-auto">
              <p className="lead mb-4">
                I am D.Jaya Shankar Kumar, I am currently pursuing my MCA Post
                Graduartion degree from Gayatri Vidya Parishad College of
                Engineering, Visakhapatnam. I have Pursuied My CEH(Certified
                Ethical Hacker) Certificate from EC-Council and I am actively
                participating in bug bounty programs in Hackerone and intigriti.
                Currently, I am working on my full stack web developement and
                machine learning skills.
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <a
                  href="/projects"
                  className="btn btn-primary btn-lg active"
                  role="button"
                >
                  My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
