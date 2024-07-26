import React from "react";

const Testimonial = () => {
  const testimonialData = [
    {
      name: "Edwards Trump",
      image: " ",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis iure suscipit cumque.",
      aosdelay: "0",
    },
    {
      name: "Alex Ferguson",
      image: " ",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis iure suscipit cumque.",
      aosdelay: "300",
    },
    {
      name: "Donald Jr",
      image: " ",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis iure suscipit cumque.",
      aosdelay: "1000",
    },
  ];
  return (
    <div className="dark:bg-dark dark:text-white py-14 sm:pb-24">
      <div className="container">
        <div className="space-y-4 pb-12">
          <p
            data-aos="fade-up"
            className="text-3xl font-semibold font-serif sm:text-4xl text-center"
          >
            What our Clients say about Us?
          </p>
          <p data-aos="fade-up" className="text-center sm:px-44">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            dolorem fugiat repellat aperiam eos.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2 text-black dark:text-white">
          {testimonialData.map((data) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosdelay}
                key={data.name}
                className="text-center group card space-y-3 sm:space-y-6 p-4 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg"
              >
                <div className="grid place-items-center">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="h-20 2-20 rounded-full"
                  />
                </div>
                <div className="text-2xl"></div>
                <p>{data.description}</p>
                <p className="font-semibold text-center">{data.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
