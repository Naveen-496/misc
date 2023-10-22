// import { useState } from "react";
// import Lightbox from "react-images";
// import PinchZoom from "react-pinch-zoom";

// const Pinchzoom = () => {
//   const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

//   const openLightbox = () => {
//     setLightboxIsOpen(true);
//   };

//   const closeLightbox = () => {
//     setLightboxIsOpen(false);
//   };

//   return (
//     <div>
//       <PinchZoom>
//         <img
//           src="https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_960_720.jpg"
//           alt="My Image"
//           onClick={openLightbox}
//         />
//       </PinchZoom>

//       {lightboxIsOpen && (
//         <Lightbox
//           images={[
//             {
//               src: "https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_960_720.jpg",
//               alt: "My Image",
//             },
//           ]}
//           onClose={closeLightbox}
//         />
//       )}
//     </div>
//   );
// };

// export default Pinchzoom;
