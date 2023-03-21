import React from 'react'

const Hero = () => {
  return (
    <div
      className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column"
      style={{ height: "40vh" }}
    >
      <h1 style={{ fontSize: "60px", color: "orangered", padding:"70px 10px 5px 20px" }}>The Headline Hub</h1>
      <h6>Stay informed, stay ahead with The Headline Hub</h6>
    </div>
  );
}

export default Hero