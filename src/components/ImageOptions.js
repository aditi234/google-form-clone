import React from "react";
import { GrFormTrash } from "react-icons/gr";

function ImageOptions({ URL, imageOption, setImageOption, im }) {
  const deleteHandler = () => {
    setImageOption(imageOption.filter((el) => el.imageId !== im.imageId));
  };
  
  return (
    <div className="ImageOption">
      <input type="radio" id="option1"></input>
      <img
        src={`${URL}` || "http://via.placeholder.com/400x300"}
        alt="imageUnknown"
      />
      <button onClick={deleteHandler}>
        <GrFormTrash size="20px" />
      </button>
    </div>
  );
}

export default ImageOptions;
