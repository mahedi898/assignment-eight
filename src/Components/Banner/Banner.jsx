import bannerIG from '../../assets/Rectangle 1.png'

const Banner = () => {
  return (
    <div className='max-h-auto md:max-h-[900px]'>
        <div  style={{ backgroundColor: "rgb(149, 56, 226)" }} className="hero text-white rounded-2xl pt-5 mt-4 -z-10 pb-56">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
          <p className="py-6">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
          </p>
          <button className="btn btn-soft btn-primary rounded-4xl">Shop Now</button>
        </div>
      </div>
    </div>
    <div className=" bg-gradient-to-r z-[1000] border-white border shadow-lg w-4/5 mx-auto rounded-[26px] p-3  relative transform -translate-y-52">
        <img src={bannerIG} alt="" />
    </div>
    </div>
  );
};

export default Banner;
