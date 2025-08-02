import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const FilterBox = () => {
  return (
    <section
      className="px-[6px] md:px-[30px] lg:px-[98px] py-6"
      aria-labelledby="filter-section"
    >
      <div className="max-w-7xl mx-auto bg-[#e3f6fc] p-[5px] md:px-[22px] md:py-[8px]">
        <FilterDropdowns />
      </div>
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#8ED5EC] to-[#00AFE3] px-[22px] py-5 flex justify-between items-center">
        <p className="text-white font-poppins text-[22px]">
          <span className="font-semibold text-[#FFF600]">Recommended:</span>{" "}
          Request replies from your{" "}
          <span className="font-semibold">top 5 matches</span> to hear back
          faster
        </p>
        <button className="hidden md:block rounded-sm cursor-pointer text-white px-[29px] py-[3px] font-poppins font-medium text-lg bg-black">
          Request your best matches here
        </button>
      </div>
      <div className="max-w-7xl mx-auto flex justify-center items-center mt-[18px]">
        <button className="rounded-sm cursor-pointer text-white px-[29px] py-[3px] font-poppins font-bold md:font-medium text-base md:text-lg bg-[#F74B00]">
          Request your best matches here
        </button>
      </div>
    </section>
  );
};

const FilterDropdowns = () => {
  const ratings = [
    "All Ratings",
    "1 Star",
    "2 Stars",
    "3 Stars",
    "4 Stars",
    "5 Stars",
  ];
  const locations = [
    "All Locations",
    "Bangalore",
    "Delhi",
    "Mumbai",
    "Hyderabad",
    "Chennai",
  ];
  const responseTimes = [
    "All Response Times",
    "Within 1 Hour",
    "Within 2 Hours",
    "Same Day",
    "1–2 Days",
    "Within a Week",
  ];
  const sortByOptions = [
    "Sort by: Location",
    "Sort by: Rating",
    "Sort by: Response",
  ];

  const [selectedRating, setSelectedRating] = useState(ratings[0]);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [selectedResponseTime, setSelectedResponseTime] = useState(
    responseTimes[0]
  );
  const [selectedSort, setSelectedSort] = useState(sortByOptions[0]);

  const Dropdown = ({ label, options, selected, setSelected }) => {
    const [open, setOpen] = useState(false);
    const id = label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="relative w-full md:w-auto">
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <button
          id={id}
          onClick={() => setOpen(!open)}
          aria-haspopup="listbox"
          aria-expanded={open}
          className="w-full flex items-center justify-between bg-white border border-[#d9d9d9] text-[9px] md:text-sm cursor-pointer font-poppins px-[4px] py-[2px] md:px-4 md:py-2 text-left"
        >
          {selected}
          <TiArrowSortedDown className="ml-0 md:ml-2 text-xl text-black" />
        </button>

        {open && (
          <ul
            role="listbox"
            aria-labelledby={id}
            className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg"
          >
            {options.map((item) => (
              <li key={item}>
                <button
                  role="option"
                  aria-selected={selected === item}
                  onClick={() => {
                    setSelected(item);
                    setOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-primary hover:text-white ${
                    selected === item ? "bg-gray-100" : ""
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="flex md:hidden flex-col justify-between">
        <h1 className="font-poppins font-semibold text-sm">5 matches</h1>
        <div className="flex items-center gap-2">
          <Dropdown
            label="Rating"
            options={ratings}
            selected={selectedRating}
            setSelected={setSelectedRating}
          />

          <Dropdown
            label="Sort By"
            options={sortByOptions}
            selected={selectedSort}
            setSelected={setSelectedSort}
          />

          <Dropdown
            label="Response Time"
            options={responseTimes}
            selected={selectedResponseTime}
            setSelected={setSelectedResponseTime}
          />
        </div>
      </div>
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Dropdown
            label="Rating"
            options={ratings}
            selected={selectedRating}
            setSelected={setSelectedRating}
          />
          <Dropdown
            label="Location"
            options={locations}
            selected={selectedLocation}
            setSelected={setSelectedLocation}
          />
          <Dropdown
            label="Response Time"
            options={responseTimes}
            selected={selectedResponseTime}
            setSelected={setSelectedResponseTime}
          />
          <h1 className="font-poppins font-semibold text-xl p-4">5 matches</h1>
        </div>
        <Dropdown
          label="Sort By"
          options={sortByOptions}
          selected={selectedSort}
          setSelected={setSelectedSort}
        />
      </div>
    </>
  );
};

export default FilterBox;
