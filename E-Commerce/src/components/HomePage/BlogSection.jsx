import React from "react";
import BlogProducts from "./BlogProducts";
import data from "../../data/data.json";
const BlogSection = () => {
  return (
    <section className="container">
      <div className="text-center mb-10">
        <h2 className="text-primary font-bold text-sm">
          {data.blogCard.muted}
        </h2>
        <h1 className="text-4xl font-bold mt-2">{data.blogCard.title}</h1>
        <p className="text-text-secondary mt-2">{data.blogCard.subtitle}</p>
      </div>
      <BlogProducts />
    </section>
  );
};

export default BlogSection;
