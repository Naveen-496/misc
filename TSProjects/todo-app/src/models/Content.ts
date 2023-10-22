import ContentScope from "./ContentScope";
import UserRole from "./UserRole";
class Content {
  public id: string;
  public editorId: string;
  public contentScope: ContentScope;
  public version: number;
  public versionName: string;
  public userRole: UserRole;
  public isPublished: boolean;

  constructor(
    id: string,
    editorId: string,
    contentScope: ContentScope,
    version: number,
    versionName: string,
    userRole: UserRole,
    isPublished: boolean
  ) {
    this.id = id;
    this.contentScope = contentScope;
    this.version = version;
    this.editorId = editorId;
    this.versionName = versionName;
    this.userRole = userRole;
    this.isPublished = isPublished;
  }
}

export default Content;