import { useState } from "react";

const useColorSelection = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return [selectedColor, handleColorSelect];
};

export default useColorSelection;
