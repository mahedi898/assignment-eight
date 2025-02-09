import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
  const categories = useLoaderData()
    return (
    <div className="text-center">
      <Banner></Banner>
      <div className="mb-9 text-4xl font-bold text-[#9538E2]">Explore Cutting-Edge Gadgets</div>
      <div className="flex flex-col md:flex-row md:justify-around justify-center">
      <Categories categories={categories}></Categories>
      <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
