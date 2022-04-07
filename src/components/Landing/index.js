import React from "react";
import { Link } from "react-router-dom";
import * as ROUTE from "../../constants/routes";

const Landing = () => (
  <div className="hero flex-grow bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Hello there</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <Link to={ROUTE.SIGN_UP} className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </div>
  </div>
);

export default Landing;
