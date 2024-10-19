import { useState } from 'react';

const useDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  return { dropdownOpen, handleMouseEnter, handleMouseLeave };
};

export default useDropdown;
