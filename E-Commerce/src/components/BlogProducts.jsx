import React from "react";
import BlogProduct from "./BlogProduct";
import data from "../data/data.json";
const BlogProducts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.blogSection.map((blog, index) => (
        <BlogProduct key={index} blog={blog} />
      ))}
    </div>
  );
};

export default BlogProducts;
