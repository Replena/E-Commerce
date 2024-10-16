import React from "react";
import BlogProducts from "./BlogProducts";
import data from "../data/data.json";
const BlogSection = () => {
  return (
    <section className="py-16 px-8 lg:pl-60 lg:pr-60 lg:pb-60">
      <div className="text-center mb-10">
        <h2 className="text-blue-500 font-bold text-sm">
          {data.blogCard.muted}
        </h2>
        <h1 className="text-4xl font-bold mt-2">{data.blogCard.title}</h1>
        <p className="text-gray-500 mt-2">{data.blogCard.subtitle}</p>
      </div>
      <BlogProducts />
    </section>
  );
};

export default BlogSection;
