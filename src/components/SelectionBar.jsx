import React from "react";
import photos from "../data/photos";
import { useCurrentPhoto } from "../context/Context";
function SelectionBar() {
  const { setCurrentPhoto } = useCurrentPhoto();
  return (
    <div className='bg-black/30 backdrop-blur-md no-scroll fixed bottom-0 py-2 w-full px-4 flex items-center gap-2 overflow-x-scroll'>
      {photos.map((photo) => {
        return (
          <img
            onClick={() => setCurrentPhoto(photo)}
            className='cursor-pointer h-12 w-12 rounded'
            src={photo.thumbnailUrl}
            alt={photo.title}
            key={photo.id}
          />
        );
      })}
    </div>
  );
}

export default SelectionBar;
