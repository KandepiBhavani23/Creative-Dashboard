import { useState } from "react";

const useFormData = () => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return [formData, handleInputChange];
};

export default useFormData;
