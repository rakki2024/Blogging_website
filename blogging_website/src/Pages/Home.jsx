import React from "react";
import Banner from "../Components/Banner";
import TrendingBlog from "../Components/TrendingBlog";
import blogs from "../Utils/Mockdata";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Banner />
      <div className="container mt-5">
        <h1 className="mb-4">Read blogs from</h1>
        <div
          className="d-flex flex-row gap-8"
          style={{ overflowX: "auto", whiteSpace: "nowrap" }}
        >
          <Link to={"/Blogs/Programming"} className="me-4 text-decoration-none">
            <div className="card col" style={{ width: "18rem" }}>
              <img
                src="/assets/Programming.jpg"
                className="card-img-top"
                alt="Programming"
              />
              <div className="card-body">
                <h5 className="card-title">Programming</h5>
              </div>
            </div>
          </Link>
          <Link to={"/Blogs/Cooking"} className="me-4 text-decoration-none">
            <div className="card col" style={{ width: "18rem" }}>
              <img
                src="/assets/Cooking.jpg"
                className="card-img-top"
                alt="Programming"
              />
              <div className="card-body">
                <h5 className="card-title">Cooking</h5>
              </div>
            </div>
          </Link>
          <Link to={"/Blogs/Workouts"} className="me-4 text-decoration-none">
            <div className="card col" style={{ width: "18rem" }}>
              <img
                src="/assets/Fitness.jpg"
                className="card-img-top"
                alt="Programming"
              />
              <div className="card-body">
                <h5 className="card-title">Fitness</h5>
              </div>
            </div>
          </Link>
          <Link to={"/Blogs/Travelling"} className="me-4 text-decoration-none">
            <div className="card col" style={{ width: "18rem" }}>
              <img
                src="/assets/Travelling.jpg"
                className="card-img-top"
                alt="Travelling"
              />
              <div className="card-body">
                <h5 className="card-title">Travelling</h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="trending-blogs mt-5 d-flex justify-content-between flex-wrap row-gap-4">
        {blogs.map((blog) => (
          <div className="col-md-3">
            <TrendingBlog blog={blog} />
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
}

export default Home;
