import Banner from "../Components/Banner";
import { useState, useEffect } from "react";
import blogs from "../Utils/Mockdata";
import { useParams } from "react-router-dom";

function DedicatedBlock() {
  const { id } = useParams();
  const [blogToDisplay, setBlogToDisplay] = useState(null);

  useEffect(() => {
    if (id) {
      const numericId = parseInt(id);
      const foundBlog = blogs.find((blog) => blog.id === numericId);
      setBlogToDisplay(foundBlog);
    }
  }, [id]);

  if (!blogToDisplay) {
    return (
      <>
        <Banner />
        <div className="container mt-5">
          <h2>Blog not found or loading...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Banner />
      <div className="container mt-5">
        <h1>{blogToDisplay.title}</h1>
        <h6>{blogToDisplay.category}</h6>
        <p>{blogToDisplay.content}</p>
      </div>
    </>
  );
}

export default DedicatedBlock;
