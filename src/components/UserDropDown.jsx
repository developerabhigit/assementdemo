import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";

const UserDropDown = ({ userName = "Name" }) => {
  const items = [userName, "Our Services"];
  const [selected, setSelected] = useState(userName);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Trigger Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 pl-2 rounded-md cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="User menu"
      >
        {/* Avatar */}
        {selected === items[0] && (
          <div className="flex justify-center items-center w-7 h-7 rounded-full bg-primary relative mr-2">
            <span className="uppercase text-white text-center w-full absolute">
              {userName.charAt(0)}
            </span>
          </div>
        )}
        {selected}
        <TiArrowSortedDown className="text-primary text-[20px] md:text-[32px]" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul
          className="absolute z-10 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg"
          role="menu"
          aria-label="User dropdown"
        >
          {items.map((item) => (
            <li key={item} role="none">
              <button
                onClick={() => handleSelect(item)}
                className="block w-full text-left px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
                role="menuitem"
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

export default UserDropDown;
