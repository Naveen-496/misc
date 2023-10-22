import React from "react";
import { useState } from "react";
import FsLightbox from "fslightbox-react";

const Fslight = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div>
     
      <>
        <button onClick={() => setToggler(!toggler)}>Toggle Lightbox</button>
        <FsLightbox
          toggler={toggler}
          sources={[
            "https://i.imgur.com/fsyrScY.jpg",
            "https://www.youtube.com/watch?v=xshEZzpS4CQ",
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          ]}
        />
      </>
     
    </div>
  );
};

export default Fslight;
