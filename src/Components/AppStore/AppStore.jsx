import React from "react";
import pattern from "../../assets/website/pattern.jpeg";
import logo from "../../assets/website/play_store.png";
import logo2 from "../../assets/website/app_store.png";
const AppStore = () => {
  const banner = {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "Center",
    height: "100%",
    width: "100%",
  };
  return (
    <div className="container pb-14">
      <div
        className="text-black py-10 sm:min-h-[400px] sm:grid rounded-xl sm:place-items-center"
        style={banner}
      >
        <div>
          <div className="space-y-6 max-w-xl mx-auto">
            <h1
              data-aos="fade-up"
              className="text-2xl text-center font-semibold sm:text-4xl font-serif"
            >
              Get Started with our app!
            </h1>
            <p data-aos="fade-up" className="text-center sm:px-20">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium beatae deserunt vero assumenda.
            </p>
            <div
              data-aos="fade-up"
              className="flex flex-wrap justify-center items-center gap-4"
            >
              <a href="#">
                <img
                  src={logo}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
              <a href="#">
                <img
                  src={logo2}
                  alt=""
                  className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;
