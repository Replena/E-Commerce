import { Button } from "./ui/button.jsx";

import {
  ChevronRightIcon,
  CalendarIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
const BlogProduct = ({ blog }) => {
  return (
    <div className="">
      <div className="relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full object-cover "
        />
        <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-3 py-2 rounded">
          {blog.cardInfo}
        </span>
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-400 space-x-2">
          <span>{blog.category1}</span>
          <span>{blog.category2}</span>
          <span>{blog.category3}</span>
        </div>
        <h3 className="font-bold text-xl mt-2">{blog.title}</h3>
        <p className="text-gray-600 mt-2">{blog.description}</p>
        <div className="mt-4 text-sm text-gray-400 flex justify-between">
          <div className="flex items-center space-x-1">
            <span>
              <CalendarIcon className="size-6" />
            </span>
            <span>{blog.date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>
              <ChartBarIcon className="size-6" />
            </span>
            <span>
              {blog.commentCount} {blog.comments}
            </span>
          </div>
        </div>
        <Button href="#" variant="ghost" className="px-0">
          {blog.more}
          <ChevronRightIcon className="size-5 items-center my-auto" />
        </Button>
      </div>
    </div>
  );
};

export default BlogProduct;
