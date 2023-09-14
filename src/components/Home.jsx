import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h1 className="wel-text">Welcome To My Todolist</h1>
      <Link to="/TodolistForm">
        <button className="home-btn">Start Now</button>
      </Link>
    </div>
  );
};

export default Home;
