import React from "react";
import whitecar from "../../assets/white-car.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car6.png";
const CarList = () => {
  const CarListD = [
    {
      name: "BMW-UX",
      price: "100",
      image: whitecar,
      aosdelay: "0",
    },
    {
      name: "KIA-UX",
      price: "100",
      image: car2,
      aosdelay: "500",
    },
    {
      name: "bmw-ux-",
      price: "100",
      image: car3,
      aosdelay: "1000",
    },
  ];
  return (
    <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
      <div className="container">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Lorem, ipsum dolor.
        </h1>
        <p data-aos="fade-up" className="text-sm pb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          veritatis debitis hic?
        </p>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {CarListD.map((car) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={car.aosdelay}
                  className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
                >
                  <div className="w-full h-[120px]">
                    <img
                      className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700"
                      src={car.image}
                      alt=""
                    />
                  </div>
                  <div className="space-y-2">
                    <h1 className="text-primary font-semibold ">{car.name}</h1>
                    <div>
                      <p className="flex justify-between items-center text-xl font-semibold ">
                        ${car.price}/Day
                      </p>
                      <a href="#">Details</a>
                    </div>
                  </div>
                  <p className="text-xl font-semibold absolute top-0 left-3 ">
                    12km
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid place-content-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
