import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <h2>Contuso Car Parts Store</h2>
      <br />
      <br />
      <Link className="btn" to="/books">
        View All Car Parts
      </Link>
    </section>
  );
};

export default Hero;
