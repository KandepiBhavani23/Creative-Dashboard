const useSubmitForm = (formData, selectedColor, onSubmit) => {
  const handleDoneClick = () => {
    if (!formData.title || !formData.subtitle || !selectedColor) {
      return;
    }

    onSubmit({ ...formData, selectedColor });
  };

  return handleDoneClick;
};

export default useSubmitForm;
