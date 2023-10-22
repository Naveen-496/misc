
// import React, { useState } from "react";
// import { adminContent } from "./data/Content";
// import "./data/parent.css";
// import ChildComponent from "./childComponent";


// export type ParentComponentState = {
//   currentProviderParentFolderId: string;
//   showModal: boolean;
//   selectedAll: boolean;
// };

// export type ParentProps = {
//   handleChangeParentFolderId(id: string): void;
//   handleAddContentData(type: string, id: string): void;
//   handleAddAllContent(e: React.ChangeEvent<HTMLInputElement>): void;
// };

// const ParentComponent: React.FC<ParentProps> = (props) => {
//   const [currentProviderParentFolderId, setCurrentProviderParentFolderId] =
//     useState("00000");
//   const [showModal, setShowModal] = useState(false);
//   const [selectedAll, setSelectedAll] = useState(false);

//   const handleOpenShowModal = () => {
//     setShowModal(true);
//   };

//   const handleCloseShowModal = () => {
//     setShowModal(false);
//   };

//   const childProps: ParentProps = {
//     handleChangeParentFolderId: (id) => setCurrentProviderParentFolderId(id),
//     handleAddContentData: props.handleAddContentData,
//     handleAddAllContent: props.handleAddAllContent,
//   };

//   const handleAddAllContent = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setTimeout(() => {
//       setSelectedAll((prevState) => !prevState);
//     }, 1000);

//     const selected = e.currentTarget.checked;
//     setSelectedAll(selected);

//     adminContent.documentSections.forEach((section) => {
//       props.handleAddContentData("section", section.id);
//     });

//     adminContent.subFolderList.forEach((folder) => {
//       props.handleAddContentData("folder", folder.id);
//     });
//   };

//   return (
//     <div className="main-content">
//       <button onClick={handleOpenShowModal}>show Modal</button>
//       <div className="heading">
//         <h3>Provider Content</h3> {selectedAll && <p>{" "}</p>}
//       </div>

//       {showModal && (
//         <div className="browse-modal">
//           <div onClick={handleCloseShowModal} className="close-btn">
//             <img src="src/assets/close-window-512.png" alt="" />
//           </div>

//           <div className="modal-body">
//             <ChildComponent {...childProps} selectedAll={selectedAll} />
//             <ChildComponent {...childProps} selectedAll={selectedAll} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ParentComponent;
