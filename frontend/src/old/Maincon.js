import "./assets/maincon.css";
import { React } from "react";
import Projects from "./Projects";

const Maincon = () => {
  return (
    <>
      <div className="introt">
        <u>Intro: </u>
      </div>
      <div class="px-4 py-5 my-6 text-center colorr">
        <h1 class="display-5 fw-bold">
          Hi<span class="wave">👋</span>
        </h1>
        <div class="col-lg-6 mx-auto ">
          <p class="lead mb-4">
            I am D.Jaya Shankar Kumar, I am currently pursuing my MCA Post
            Graduartion degree from Gayatri Vidya Parishad College of
            Engineering, Visakhapatnam. I have Pursuied My CEH(Certified Ethical
            Hacker) Certificate from EC-Council and I am actively participating
            in bug bounty programs in Hackerone and intigriti currently, I am
            working on my full stack web developement and machine learning
            skills.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a
              href="/projects"
              class="btn btn-primary btn-lg active"
              role="button"
            >
              Projects
            </a>
            <a
              href="/contact"
              class="btn btn-primary btn-lg active"
              role="button"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maincon;
