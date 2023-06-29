import React from "react";
import CatSprite from "./CatSprite";
import { useSelector } from "react-redux";

export default function PreviewArea() {
  const character = useSelector((store) => store.character);
  return (
    <div className="flex-none h-full w-full overflow-y-auto p-2 space-y-10">
      <div className="w-20 rounded-lg h-10 bg-gray-200 text-center py-2">
        Sidebar
      </div>
      <div className="relative w-full">
        {character.sprites.map((char, i) => {
          return (
            <div className="absolute" id={char} key={`${char}-${i}`}>
              <CatSprite />
            </div>
          );
        })}
      </div>
    </div>
  );
}
