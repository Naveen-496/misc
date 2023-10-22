import React from "react";
import ParentComponentState, { ChildProps, ParentProps } from "./Parent1";

// export interface ChildProps {
 
//   handleChangeParentFolderId(id: string): void;
//   handleAddContentData(type: string, id: string): void;
//   handleAddAllContent(e: React.ChangeEvent<HTMLInputElement>): void;
// }

export default class ChildComponent extends React.Component<ChildProps> {
  // constructor(props: ParentProps & ParentComponentState) {
  //   super(props);

  // }

  constructor( props:ChildProps) {
     super(props);
     console.log("constructor called");
  }

  componentDidMount(): void {
    // console.log( this.props.data);
    console.log(" mounted and the state is ", this.props.selectedAll);
  }

  componentDidUpdate(prevProps: Readonly<ChildProps>, prevState: Readonly<{}>, snapshot?: any): void {
     // console.log("updated state: ", this.props.selectedAll);
  }

 

  render(): React.ReactNode {
    const { userRole, selectedAll} = this.props;
    console.log("child render called", selectedAll);
    return (
      <div className="modal">
      
        <div>{this.props.userRole}</div>
        <br />
        {userRole === "Admin" && (
          <div className="input-span">
            <input key={this.props.userRole} 
            type="checkbox"
            checked={selectedAll}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.handleSelectAll(e)} />
            <span>select all</span>
            <div>{this.props.sample}</div>
          </div>
        )}

        <div className="section-items">
          {this.props.data.documentSections?.map((section: any) => (
            <div key={section.id} className="section-item">
              {userRole === "Admin" && (
                <input
                  type="checkbox"
                  key={section.id}
                   checked={selectedAll}
                  onClick={() =>
                    this.props.handleAddContentData("section", section.id)
                  }
                ></input>
              )}
              <div className="section">
                <div>{section.section}</div>
                <br />
              </div>
            </div>
          ))}
        </div>

        <div>
          <div>
            {this.props.data.subFolderList.map((folder: any) => {
              return (
                <div key={folder.id} className="folder-items">
                  {userRole === "Admin" && (
                    <input
                      type="checkbox"
                      key={folder.id}
                       checked={selectedAll}
                      onClick={() =>
                        this.props.handleAddContentData("folders", folder.id)
                      }
                    ></input>
                  )}
                  <div>
                    {folder.title}
                    <br />
                    <div></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
