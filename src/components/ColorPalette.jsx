import React from "react";
const colors = [
  "#c5bc8e",
  "#e94e77",
  "#e08e79",
  "#f88f79",
  "#033649",
  "#e8bf56",
  "#f2f26f",
];

const ColorCircle = ({ color, selected, onSelectColor, label }) => {
  return (
    <div
      className={`w-6 h-6 rounded-full cursor-pointer ${
        selected
          ? "ring-black ring-0.5 p-[2px] border-2 border-black"
          : "border-2 border-black"
      }`}
      onClick={() => onSelectColor(color)}>
      <div
        className="w-full h-full rounded-full"
        style={{
          backgroundColor: color,
          border: selected ? "2px solid black" : "none",
          boxSizing: "border-box",
        }}></div>
      {label && <p className="text-xs text-gray-600">{label}</p>}
    </div>
  );
};

const ColorPalette = ({ onSelectColor, selectedColor, label }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-2 text-base font-bold">{label}</label>}
      <div className="max-w-36">
        <div className="grid grid-cols-4 gap-4">
          {colors?.map((color, index) => (
            <ColorCircle
              key={index}
              color={color}
              selected={color === selectedColor}
              onSelectColor={onSelectColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
