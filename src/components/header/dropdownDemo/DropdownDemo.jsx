import React, { useState } from "react";
import DropdownDemoStyles from "./DropdownDemo.style";
import { BsGrid } from "react-icons/bs";

const DropdownDemo = () => {
  const [isDropdownDemoActive, setIsDropdownDemoActive] = useState(false);
  const handleDropdownDemo = () => {
    setIsDropdownDemoActive(!isDropdownDemoActive);
  };

 
};

export default DropdownDemo;
