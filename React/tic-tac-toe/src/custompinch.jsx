import React, { useCallback, useRef, useState } from "react";

const PinchZoomableMagnifier2 = () => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(
    "https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_960_720.jpg"
  );
  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const imgRef = useRef();
  const containerRef = useRef();
  const pinchStartDistance = useRef();
  const pinchStartScale = useRef(scale);
  const pinchStartTranslateX = useRef(translateX);
  const pinchStartTranslateY = useRef(translateY);

  const onImageLoad = useCallback((event) => {
    const img = event.target;
    const container = containerRef.current;
    const { width: imgWidth, height: imgHeight } = img;

    // calculate the initial scale to fit the image within the container
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const widthRatio = containerWidth / imgWidth;
    const heightRatio = containerHeight / imgHeight;
    const initialScale = Math.min(widthRatio, heightRatio);

    setScale(initialScale);
    setImageSrc(img.src);
  }, []);

  const onStartPinch = useCallback(
    (event) => {
      if (event.touches.length === 2) {
        event.preventDefault();

        // calculate the distance between the two touches
        const x1 = event.touches[0].clientX;
        const y1 = event.touches[0].clientY;
        const x2 = event.touches[1].clientX;
        const y2 = event.touches[1].clientY;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        pinchStartDistance.current = distance;
        pinchStartScale.current = scale;
        pinchStartTranslateX.current = translateX;
        pinchStartTranslateY.current = translateY;
      }
    },
    [scale, translateX, translateY]
  );

  const onMovePinch = useCallback((event) => {
    if (event.touches.length === 2) {
      event.preventDefault();

      // calculate the distance between the two touches
      const x1 = event.touches[0].clientX;
      const y1 = event.touches[0].clientY;
      const x2 = event.touches[1].clientX;
      const y2 = event.touches[1].clientY;
      const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

      // calculate the new scale based on the pinch distance and the initial scale
      const scaleDiff = distance / pinchStartDistance.current;
      const newScale = pinchStartScale.current * scaleDiff;
      setScale(newScale);

      // calculate the new translate values based on the pinch distance and the initial translate values
      const newTranslateX =
        pinchStartTranslateX.current +
        (x1 + x2) / 2 -
        containerRef.current.offsetLeft;
      const newTranslateY =
        pinchStartTranslateY.current +
        (y1 + y2) / 2 -
        containerRef.current.offsetTop;
      setTranslateX(newTranslateX);
      setTranslateY(newTranslateY);
    }
  }, []);

  const onEndPinch = useCallback(() => {
    pinchStartDistance.current = null;
  }, []);

  const openLightbox = (event) => {
    const img = event.target;
    setImageSrc(img.src);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <img
        ref={imgRef}
        src={imageSrc}
        onLoad={onImageLoad}
        onTouchStart={onStartPinch}
        onTouchMove={onMovePinch}
        onTouchEnd={onEndPinch}
        onClick={openLightbox}
        style={{
          transform: `{translate(${translateX}px, ${translateY}px) scale(${scale})}`,
          transformOrigin: "top left",
          cursor: "pointer",
        }}
      />
      {lightboxIsOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          }}
          onClick={closeLightbox}
        >
          <img
            src={imageSrc}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `{translate(-50%, -50%) scale(${scale})}`,
              transformOrigin: "top left",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default PinchZoomableMagnifier2;
