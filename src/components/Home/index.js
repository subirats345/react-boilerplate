import React from "react";
import { withAuthorization } from "../Session";

const Home = () => (
  <div className="hero flex-grow bg-base-200">
    <div className="hero-content text-center">
      <div className="max-w-md">
        <h1 className="text-5xl font-bold">Home Page</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
    </div>
  </div>
);

const condition = (authUser) => authUser != null;

export default withAuthorization(condition)(Home);
