import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

import React from "react";

const lightboxes = () => {
  return (
    <div>
      <Lightbox
        image="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg"
        title="Image Title"
      ></Lightbox>
    </div>
  );
};

export default lightboxes;
