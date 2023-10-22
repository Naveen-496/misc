import React from "react";
import ChildComponent from "./Child1";
import { providerContent, adminContent } from "./data/Content";
import "./data/parent.css";

export type Data = {
  contentId: string;
  documentSections: { id: string; section: string }[];
  subFolderList: { id: string; title: string }[];
};

export type ParentComponentState = {
  currentProviderParentFolderId: string;
  sourceContentId: string;
  contentMap: Map<string, Map<string, Set<string>>>;
  showModal: boolean;
  selectedAll: boolean;
  sample: any;
  data: Data;
};

export type ParentProps = {
  handleChangeParentFolderId(id: string): void;
  handleAddContentData(type: string, id: string): void;
  handleAddAllContent(e: React.ChangeEvent<HTMLInputElement>): void;
  handleSelectAll(e: React.ChangeEvent<HTMLInputElement>):void;
};

export type ChildProps = ParentComponentState & ParentProps & additionalProps;

export type additionalProps = {
  userRole: string;
  url: string;
};

export default class ParentComponent extends React.Component<
  {},
  ParentComponentState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentProviderParentFolderId: "00000",
      sourceContentId: "778757",
      contentMap: new Map(),
      showModal: false,
      selectedAll: false,
      sample: "Provider",
      data: providerContent,
    };
  }

  handleChangeParentFolderId = (id: string) => {
    console.log("called from child ");
    this.setState({ currentProviderParentFolderId: id });
  };

  handleAddContentData = (
    type: string,
    id: string,
    e?: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Example usage of contentMap
    const { contentMap } = this.state;
    // console.log(
    //   this.state.currentProviderParentFolderId + "---->" + id + " type: " + type
    // );
    if (!contentMap.has(this.state.currentProviderParentFolderId)) {
      contentMap.set(this.state.currentProviderParentFolderId, new Map());
    }

    const content = contentMap.get(this.state.currentProviderParentFolderId);
    if (content?.has(type) === false) {
      content.set(type, new Set());
    }
    // console.log(content);
    if (content?.get(type)?.has(id)) {
      content.get(type)?.delete(id);
    } else {
      content?.get(type)?.add(id);
    }

    this.setState({ contentMap });
    // console.log(contentMap);
    // Perform operations on contentMap based on 'type' and 'id'
  };

  handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
       let { sample} = this.state;
        if( sample === "Provider") {
          sample = "Admin";
        } else {
          sample = "Provider";
        }
       
       this.setState({ selectedAll: e.target.checked, sample});
  }

  handleAddAllContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setTimeout(() => {
    //   this.setState({ sample: "  "} );
    // }, 1000);
    this.setState({ selectedAll: e.target.checked });
    console.log("state selected ", this.state.selectedAll);
    const selected = e.currentTarget.checked;
    this.setState({ selectedAll: selected, sample: "      " });
    console.log("current selected ", selected);
    console.log(" current state selected", this.state.selectedAll);

    adminContent.documentSections.forEach((section) => {
      this.handleAddContentData("section", section.id);
    });

    adminContent.subFolderList.forEach((folder) => {
      this.handleAddContentData("folder", folder.id);
    });
  };

  handleOpenShowModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseShowModal = () => {
    this.setState({ showModal: false });
  };

  render(): React.ReactNode {
    const childProps: ParentProps = {
      handleChangeParentFolderId: this.handleChangeParentFolderId,
      handleAddContentData: this.handleAddContentData,
      handleAddAllContent: this.handleAddAllContent,
      handleSelectAll:this.handleSelectAll
    };

    const ch1: additionalProps = {
      url: "/content",
      userRole: "Provider",
    };

    const ch2: additionalProps = {
      url: "/admin-content",
      userRole: "Admin",
    };

    console.log(" parent component called ", this.state.selectedAll);

    return (
      <div className="main-content">
        <button onClick={this.handleOpenShowModal}>show Modal</button>
        <div className="heading">
          <h3>Provider Content</h3> {this.state.sample && <p> </p>}
        </div>
        {/* <div>
          <input type="checkbox" defaultChecked={this.state.selectedAll} /> <span>select all</span>
        </div> */}

        {this.state.showModal && (
          <div className="browse-modal">
            <div onClick={this.handleCloseShowModal} className="close-btn">
              <img src="src/assets/close-window-512.png" alt="" />
            </div>

            <div className="modal-body">
              <ChildComponent {...ch1} {...this.state} {...childProps} />
              <ChildComponent {...ch2} {...this.state} {...childProps} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

/**
 * 
 *  const childProps1: ChildProps = {
      useruserRole: "Provider",
      url: "/content",
      data: providerContent,
      handleChangeParentFolderId: this.handleChangeParentFolderId,
      handleAddContentData: this.handleAddContentData,
      handleAddAllContent: this.handleAddAllContent,
      selectedAll: this.state.selectedAll,
    };
  
     const childProps2: ChildProps = {
      useruserRole: "Admin",
      url: "/admin-content",
      data: adminContent,
      handleChangeParentFolderId: this.handleChangeParentFolderId,
      handleAddContentData: this.handleAddContentData,
      handleAddAllContent: this.handleAddAllContent,
      selectedAll: this.state.selectedAll,
    };






     constructor(props: any) {
    super(props);

    const contentMap: Map<string, Map<string, Set<string>>> = new Map();
    // const sectionMap: Map<string, Set<string>> = new Map();

    
    
  }

 * 
 * 
 */
