import React, { useState } from "react";
import Header from "./Header";
import ColorPalette from "./ColorPalette";
import SearchInputTitle from "./SearchInputTitle";
import ProgressBar from "./ProgressCreatives";
import { FaPlus } from "react-icons/fa6";
import NewCreative from "./NewCreative";
import useCreative from "../hooks/useCreative";

const CreativeContainer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const {
    filteredCreatives,
    currentCreatives,
    addCreative,
    filterCreativesByColor,
    filterCreativesBySearchTerm,
  } = useCreative(5);

  const handleColorSelection = (color) => {
    setSelectedColor(color);
    filterCreativesByColor(color);
  };

  const handleAddCreativeClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleNewCreativeSubmit = (newCreative) => {
    addCreative(newCreative, 5);
    setIsFormOpen(false);
  };

  const handleSearch = (searchTerm) => {
    filterCreativesBySearchTerm(searchTerm);
  };

  return (
    <section className="max-w-xl m-auto my-10 bg-white border-4 border-black rounded-lg lg:max-w-6xl">
      <Header />
      <div className={`flex ${isFormOpen ? "flex-row" : "flex-col"}  h-[80vh]`}>
        <div
          className={`p-5 ${
            isFormOpen ? "w-[65%] mr-2" : "w-full"
          } overflow-y-auto`}>
          <div className="max-w-md mb-16">
            <h1 className="text-xl font-bold">Filter By:</h1>
            <div className="flex justify-between mt-5">
              <ColorPalette
                onSelectColor={handleColorSelection}
                selectedColor={selectedColor}
                label="color"
              />
              <SearchInputTitle onSearch={handleSearch} />
            </div>
          </div>
          <ProgressBar current={currentCreatives} total={5} />{" "}
          <button
            onClick={handleAddCreativeClick}
            className={`flex items-center px-2 py-2 my-8 space-x-2 text-sm border-2 rounded-sm ${
              isFormOpen
                ? "border-gray-400 text-gray-400 cursor-not-allowed"
                : "border-slate-800"
            }`}
            disabled={isFormOpen}>
            <FaPlus />
            <span>Add Creative</span>
          </button>
          <div className="max-w-sm">
            {filteredCreatives.map((creative, index) => (
              <div
                key={index}
                className="flex flex-col h-32 p-10 mb-4 space-y-1 border-2 rounded-md border-slate-800"
                style={{ backgroundColor: creative.selectedColor }}>
                <h2 className="text-2xl font-bold">{creative.title}</h2>
                <p className="text-sm">{creative.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
        {isFormOpen && (
          <NewCreative
            onClose={handleCloseForm}
            onSubmit={handleNewCreativeSubmit}
          />
        )}
      </div>
    </section>
  );
};

export default CreativeContainer;
