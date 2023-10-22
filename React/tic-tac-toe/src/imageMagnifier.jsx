import React, { useCallback, useRef, useState } from "react";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const PinchZoomableMagnifier3 = () => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [mediaUrl, setMediaUrl] = useState(
    "https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429_960_720.jpg"
  );
  const imgRef = useRef();
  const zoomerRef = useRef();
  const signalPool = {};
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

  const onZoomStart = () => {
    console.log("Zoom start called");
    var img = imgRef.current;
    img.style.width = "auto";
    img.style.maxWidth = "99vw";
    img.style.height = "63vh";
    var parentDiv = img.parentElement;
    parentDiv.style.position = "fixed";
    parentDiv.style.top = "7.5vh";
    parentDiv.style.left = "0vw";
    parentDiv.style.height = "100vh";
    parentDiv.style.width = "100vw";
    parentDiv.style.zIndex = 9;
    parentDiv.style.backgroundColor = "#333";

    if (signalPool.timeoutHandle) {
      clearTimeout(signalPool.timeoutHandle);
    }
  };

  const onDragStart = () => {
    if (signalPool.timeoutHandle) {
      clearTimeout(signalPool.timeoutHandle);
    }
  };

  const onZoomEnd = () => {
    console.log("Zoom end called");
    var img = imgRef.current;
    if (signalPool.timeoutHandle) {
      clearTimeout(signalPool.timeoutHandle);
    }

    signalPool.timeoutHandle = setTimeout(() => {
      zoomerRef.current.scaleTo({ x: 0, y: 0, scale: 1 });
      img.style.maxWidth = "63vw";
      img.style.height = "auto";
      var parentDiv = img.parentElement;
      parentDiv.style.position = "relative";
      parentDiv.style.top = "auto";
      parentDiv.style.left = "auto";
      parentDiv.style.height = "auto";
      parentDiv.style.width = "auto";
      parentDiv.style.zIndex = "auto";
      parentDiv.style.backgroundColor = "auto";
    }, 2000);
  };

  return (
    <>
      <img
        src={mediaUrl}
        alt=""
        onClick={openLightbox}
        style={{ width: "63vw" }}
      />
      {lightboxIsOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                position: "absolute",
                top: "13px",
                right: "20px",
                backgroundColor: "navajowhite",
              }}
            >
              <img
                src="assets/plus-2-24.png"
                alt=""
                style={{
                  rotate: "45deg",
                  cursor: "pointer",
                  width: "25px",
                  height: "25px",
                }}
                onClick={closeLightbox}
              />
            </div>
            <div style={{ width: "98vw", padding: "10px" }}>
              <QuickPinchZoom
                onUpdate={onUpdate}
                // onZoomStart={onZoomStart}
                // onZoomEnd={onZoomEnd}
                // onZoomChange={(zoom) => console.log("zoom changed", zoom)}
                // onDragEnd={onZoomEnd}
                // onDragStart={onDragStart}
                ref={zoomerRef}
              >
                <img
                  ref={imgRef}
                  src={mediaUrl}
                  // style={{ position: "absolute" }}
                  inertia={false}
                />
              </QuickPinchZoom>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PinchZoomableMagnifier3;
