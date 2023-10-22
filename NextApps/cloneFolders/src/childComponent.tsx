

// import React from "react";
// import  ChildProps  from "./ParentComponent";

// const ChildComponent: React.FC<ChildProps & { selectedAll: boolean }> = (
//   props
// ) => {
//   React.useEffect(() => {
//     // console.log(props.data);
//   }, []);

//   return (
//     <div className="modal">
//       <div>{props.userRole}</div>
//       <br />
//       {props.userRole === "Admin" && (
//         <div className="input-span">
//           <input
//             type="checkbox"
//             defaultChecked={props.selectedAll}
//             onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//               props.handleAddAllContent(e)
//             }
//           />
//           <span>select all</span>
//         </div>
//       )}

//       <div className="section-items">
//         {props.data.documentSections?.map((section: any) => (
//           <div key={section.id} className="section-item">
//             {props.userRole === "Admin" && (
//               <input
//                 type="checkbox"
//                 defaultChecked={props.selectedAll}
//                 onClick={() =>
//                   props.handleAddContentData("section", section.id)
//                 }
//               ></input>
//             )}
//             <div className="section">
//               <div>{section.section}</div>
//               <br />
//             </div>
//           </div>
//         ))}
//       </div>

//       <div>
//         <div>
//           {props.data.subFolderList.map((folder: any) => {
//             return (
//               <div key={folder.id} className="folder-items">
//                 {props.userRole === "Admin" && (
//                   <input
//                     type="checkbox"
//                     defaultChecked={props.selectedAll}
//                     onClick={() =>
//                       props.handleAddContentData("folders", folder.id)
//                     }
//                   ></input>
//                 )}
//                 <div>
//                   {folder.title}
//                   <br />
//                   <div></div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChildComponent;
