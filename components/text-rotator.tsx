import React from "react";

function TextRotator() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden text-center rounded-md ">
      <span className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">
        <ul className="block text-lg sm:text-3xl leading-tight [&_li]:block animate-text-slide text-center space-y-1">
          <li className="text-[#2f7df4] text-3xl font-bold">
            Frontend Engineer
          </li>
          <li className="text-[#2f7df4] text-3xl font-bold">Gamer</li>
          <li className="text-[#2f7df4] text-3xl font-bold">Contributer</li>
          <li className="text-[#2f7df4] text-3xl font-bold">
            Frontend Engineer
          </li>
          <li className="text-[#2f7df4] text-3xl font-bold">Gamer</li>
          <li className="text-[#2f7df4] text-3xl font-bold">Contributer</li>
        </ul>
      </span>
    </div>
  );
}

export default TextRotator;
