import React from "react";

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;
  return (
    <div className="flex items-center space-x-3">
      <div className="relative w-full h-4 max-w-md border-2 border-gray-800 rounded-full">
        <div
          className="absolute h-full bg-gray-800 rounded-full"
          style={{ width: `${progress}%` }}></div>
      </div>
      <div>
        {current} / {total} Creatives
      </div>
    </div>
  );
};

export default ProgressBar;
