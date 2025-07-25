import React from "react";
function Banner() {
  return (
    <div className="banner">
      <div className="overlay">
        <h1 id="banner-title">Welcome to our blogs website</h1>
      </div>
      <img src="/assets/Banner.jpg" alt="" width={"100%"} height={"400px"} style={{objectFit:"cover"}}/>
    </div>
  );
}

export default Banner;
