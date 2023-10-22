
class Folder {
  public static HOME_FOLDER_ID: string = "00000000-0000-0000-0000-000000000000";
  public id: string;
  public label: string;
  public description: string;
  public iconMediaId: string;
  public parentId: string;
  public contentId: string;
  public order: number;
  public icon: ArrayBuffer;

  constructor() {
    this.id = this.generateUUID();
    this.label = "";
    this.description = "";
    this.iconMediaId = "";
    this.parentId = "";
    this.contentId = "";
    this.order = 0;
    this.icon = new ArrayBuffer(0);
  }

  private generateUUID(): string {
    // Function to generate a time-based UUID
    // Implement your own logic to generate UUIDs in TypeScript
    return "";
  }
}
