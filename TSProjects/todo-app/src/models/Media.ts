

class Media {
  public id: string;
  public mimeType: string;
  public icon: ArrayBuffer;

  constructor(id: string, mimeType: string, icon: ArrayBuffer){
    this.id = id;
    this.mimeType = mimeType;
    this.icon = icon;
  }
}

export default Media;