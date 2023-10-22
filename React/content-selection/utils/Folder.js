class Folder extends AbstractEntity {
  static HOME_FOLDER_ID = "00000000-0000-0000-0000-000000000000";

  constructor() {
    super();
    this.id = this.generateUUID();
    this.label = "";
    this.description = "";
    this.iconMediaId = null;
    this.parentId = null;
    this.contentId = null;
    this.order = 0;
    this.icon = null;
  }

  generateUUID() {
    // Function to generate a time-based UUID
    // Implement your own logic to generate UUIDs in JavaScript
  }
}
