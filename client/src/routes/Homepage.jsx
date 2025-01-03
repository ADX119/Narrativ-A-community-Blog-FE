import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4 font-semibold">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-[#1F3A6F] font-semibold">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        {/* titles */}
        <div className="">
          <h1 className="text-gray-800 text-xl md:text-2xl lg:text-4xl font-bold">
            Unfold the narrative within.
          </h1>
          <p className="mt-6 text-md md:text-xl">
            When ideas are shared, they grow. Like a lamp lighting another,
            wisdom only increases
          </p>
        </div>
        {/* animated button */}
        <Link to="write" className="hidden md:block relative mx-40">
          <svg
            className="text-lg tracking-widest animate-spin ml-40"
            viewBox="0 0 200 200"
            width="200"
            height="200"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150, 0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your Story
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your Idea
              </textPath>
            </text>
          </svg>
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#1F3A6F] rounded-full flex items-center justify-center ml-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      {/* CATEGORIES */}
      <MainCategories />
      {/* FEATURED POSTS */}
      <FeaturedPosts />
      {/* POST LIST */}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600 font-medium">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;
