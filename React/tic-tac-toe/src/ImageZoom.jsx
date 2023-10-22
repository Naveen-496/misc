import React, { useCallback, useRef, useState } from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const PinchZoomableMagnifier = () => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const imgRef = useRef();
  const onUpdate = useCallback(({ x, y, scale }) => {
    const { current: img } = imgRef;

    if (img) {
      const value = make3dTransformValue({ x, y, scale });

      img.style.setProperty("transform", value);
    }
  }, []);

  const openLightbox = () => {
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  return (
    <div>
      <QuickPinchZoom onUpdate={onUpdate}>
        <img
          src="https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_960_720.jpg"
          alt="My Image"
          onClick={openLightbox}
        />
      </QuickPinchZoom>
      {lightboxIsOpen && (
        <Lightbox
          image="https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_960_720.jpg"
          title="Image Title"
          onClose={closeLightbox}
          options={{ positionFromTop: "-20px" }}
        >
          <QuickPinchZoom onUpdate={onUpdate}>
            <img
              src="https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_960_720.jpg"
              alt="My Image"
              onClick={openLightbox}
            />
          </QuickPinchZoom>
        </Lightbox>
      )}
    </div>
  );
};

export default PinchZoomableMagnifier;

// Example usage:
{
  /* <div className="col-sm-9">
  <div
    className="sectionImage"
    id={"sectionImage" + section.id}
    style={{
      borderRadius: "10px",
      margin: "10px",
      padding: "6px",
      height: "auto",
      textAlign: "center",
      borderRadius: "12px",
      marginBottom: "10px",
    }}
  >
    <PinchZoomableMagnifier mediaUrl={IMG_URL} />
  </div>
</div> */
}
