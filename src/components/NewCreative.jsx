import { IoClose } from "react-icons/io5";
import useFormData from "../hooks/useFormData";
import useColorSelection from "../hooks/useColorSelection";
import useSubmitForm from "../hooks/useSubmitForm";
import ColorPalette from "./ColorPalette";

const NewCreative = ({ onClose, onSubmit }) => {
  const [formData, handleInputChange] = useFormData();
  const [selectedColor, handleColorSelect] = useColorSelection();
  const handleDoneClick = useSubmitForm(formData, selectedColor, onSubmit);

  return (
    <section className="relative w-[35%] border-l-4 h-[80vh] border-black p-5 pl-9">
      <div className="">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-bold">Creative Creation</h1>
          <button onClick={onClose}>
            <IoClose className="w-6 h-6" />
          </button>
        </div>
        <form className="space-y-7 max-w-72">
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-bold text-gray-900">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="block w-full p-2 text-sm text-gray-900 border border-gray-800 rounded-md shadow-sm outline-none bg-gray-50"
              placeholder="Enter title"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subtitle"
              className="block mb-2 text-sm font-bold text-gray-900">
              Subtitle
            </label>
            <input
              type="text"
              id="subtitle"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleInputChange}
              className="block w-full p-2 text-sm text-gray-900 border border-gray-800 rounded-md shadow-sm outline-none bg-gray-50"
              placeholder="Enter subtitle"
              required
            />
          </div>
          <div className="mb-5">
            <ColorPalette
              onSelectColor={handleColorSelect}
              selectedColor={selectedColor}
              label="Background Color"
            />
          </div>
        </form>
      </div>
      <button
        className={`absolute px-2 py-1 text-sm border-2 rounded-sm bottom-1 sm:bottom-2 xl:bottom-9 lg:bottom-5 left-9 w-28 ${
          !formData.title || !formData.subtitle || !selectedColor
            ? "border-gray-400 text-gray-400"
            : "border-slate-800"
        }`}
        disabled={!formData.title || !formData.subtitle || !selectedColor}
        onClick={handleDoneClick}>
        Done
      </button>
    </section>
  );
};

export default NewCreative;
