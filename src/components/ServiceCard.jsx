import { FaSquareCheck } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import ResponseIcon from "../assets/response_icon.svg";

const ServiceCard = ({ vendor }) => {
  return (
    <article className="flex flex-col xl:flex-row w-full shadow-custom-sm xl:shadow-none px-2 py-4 xl:p-0 xl:border-b xl:border-[#D9D9D9] mb-3 xl:mb-2">
      <div className="flex xl:items-center xl:justify-center">
        <img
          src={vendor.image}
          alt={`Office view of ${vendor.name}`}
          className="xl:ml-[22px] xl:my-7 w-[130px] h-[93px] md:w-[260px] md:h-[187px]  xl:w-[260px] xl:h-[187px] object-cover"
        />
        <div className="flex xl:hidden flex-col justify-center pl-2 md:pl-4 w-full">
          <div className="flex items-center">
            <FaCircleCheck className="text-[#1cdd0a] text-lg" />
            {vendor.name && (
              <h2 className="font-poppins font-semibold text-base md:text-xl text-[#1E2A2E] ml-[7px]">
                {vendor.name}
              </h2>
            )}
          </div>
          <div className="flex items-center text-[#1E2A2E] text-sm py-1">
            <IoLocationSharp className="mr-1" />
            <span className="font-poppins font-semibold text-xs">
              {vendor.distance}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between py-5 xl:hidden">
        <span className="font-poppins font-semibold text-[10px] border border-[#B3B3B3] text-[#B3B3B3] rounded-xl py-[5px] px-[10px]">
          Patio Services
        </span>

        <div>
          <span className="text-[17px] text-[#FFD633]">
            {"★".repeat(vendor.rating)}
          </span>
          <span className="text-black font-poppins font-semibold mt-1 ml-2 text-xs">
            {vendor.ratingCount}
          </span>
        </div>
      </div>

      <div className="flex-1 flex flex-col xl:px-4 justify-center">
        <div className="hidden xl:flex justify-between items-center">
          <div className="flex items-center">
            <FaCircleCheck className="text-[#1cdd0a] text-lg" />
            {vendor.name && (
              <h2 className="font-poppins font-semibold text-xl text-[#1E2A2E] ml-[7px]">
                {vendor.name}
              </h2>
            )}
          </div>
          <div className="flex items-center">
            <span className="text-[34px] text-[#FFD633]">
              {"★".repeat(vendor.rating)}
            </span>
            <span className="text-black font-poppins font-semibold mt-1 ml-2 text-[22px]">
              {vendor.ratingCount}
            </span>
          </div>
        </div>
        <div className="hidden xl:flex items-center text-[#1E2A2E] text-sm mt-[-6px]">
          <IoLocationSharp className="mr-1" />
          <span className="font-poppins font-semibold text-xs">
            {vendor.distance}
          </span>
        </div>

        <div className="hidden xl:flex flex-wrap gap-2 mt-5">
          {vendor.tags.map((tag, i) => (
            <span
              key={i}
              className="font-poppins font-semibold text-sm border border-[#B3B3B3] text-[#B3B3B3] rounded-2xl py-[5px] px-[10px]"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="font-poppins font-medium text-sm xl:text-xs text-[#828282]  mt-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div className="flex justify-between items-center mt-4">
          <a
            href={vendor.profileUrl}
            className="font-poppins font-semibold text-xs text-primary inline-block"
          >
            View Profile →
          </a>
          <span className="flex items-center text-[10px] text-white bg-[#AAC9D2] rounded-full py-[5px] px-[10px] font-poppins font-semibold">
            <img
              src={ResponseIcon}
              alt="Response Icon"
              className="h-[14px] w-[14px] mr-1"
              loading="lazy"
            />
            Quick to respond
          </span>
        </div>
      </div>

      <div className="pt-7 pb-4 xl:p-0">
        <div className="bg-[#E3F6FC] p-5 xl:p-9 flex flex-row xl:flex-col items-center justify-center gap-2 h-[100%] mx-auto max-w-[225px] xl:max-w-none">
          <FaSquareCheck className="text-[#1cdd0a] text-2xl xl:text-lg" />
          <button
            className="flex items-center rounded-sm cursor-pointer text-white px-[20px] xl:px[29px] py-[3px] font-poppins font-medium text-lg bg-primary"
            aria-label="Request reply"
          >
            Request reply
          </button>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
