import React from "react";
import ServiceCard from "./ServiceCard";

const vendors = [
  {
    name: "Starlink pvt. ltd",
    distance: "8.6 miles away",
    image: "/assets/image1.png",
    tags: ["Full website design", "Banner design", "New pages"],
    rating: 5,
    ratingCount: 125,
    description: "Lorem ipsum is dummy text...",
    profileUrl: "/profile/starlink",
  },
  {
    name: "Digital web pvt. ltd",
    distance: "Multiple Locations",
    image: "/assets/image2.png",
    tags: ["Full website design", "Banner design", "New pages"],
    rating: 4,
    ratingCount: 124,
    description: "Lorem ipsum is dummy text...",
    profileUrl: "/profile/digitalweb",
  },
  {
    name: "Digital web pvt. ltd",
    distance: "Multiple Locations",
    image: "/assets/image3.png",
    tags: ["Full website design", "Banner design", "New pages"],
    rating: 4,
    ratingCount: 124,
    description: "Lorem ipsum is dummy text...",
    profileUrl: "/profile/digitalweb",
  },
  {
    name: "Digital web pvt. ltd",
    distance: "Multiple Locations",
    image: "/assets/image4.png",
    tags: ["Full website design", "Banner design", "New pages"],
    rating: 4,
    ratingCount: 124,
    description: "Lorem ipsum is dummy text...",
    profileUrl: "/profile/digitalweb",
  },
  {
    name: "Digital web pvt. ltd",
    distance: "Multiple Locations",
    image: "/assets/image5.png",
    tags: ["Full website design", "Banner design", "New pages"],
    rating: 4,
    ratingCount: 124,
    description: "Lorem ipsum is dummy text...",
    profileUrl: "/profile/digitalweb",
  },
];

const ServiceList = () => {
  return (
    <section className="px-[6px] md:px-[30px] lg:px-[98px]">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between">
        {vendors.map((vendor, index) => (
          <ServiceCard key={index} vendor={vendor} />
        ))}

         <button
            className="flex items-center rounded-sm cursor-pointer text-white px-[29px] py-[3px] my-9 xl:my-13 font-poppins font-medium text-sm md:text-lg bg-primary"
            aria-label="See More Professionals"
          >
            See More Professionals
          </button>
      </div>
    </section>
  );
};

export default ServiceList;
