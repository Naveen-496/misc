import SectionType from "./SectionType";


class Section {

  id: string;
  contentId: string;
  folderId: string;
  sectionType: SectionType;
  textContent: string;
  mediaId: string;
  order: number;
  mediaUrl: string;
  caption: string;

  constructor(id: string, contentId: string, folderId: string, sectionType: SectionType,
    textContent: string, mediaId: string, order: number, mediaUrl: string, caption: string ) {
         this.id = id;
         this.contentId = contentId;
         this.folderId = folderId;
         this.sectionType = sectionType;
         this.textContent = textContent;
         this.mediaId = mediaId;
         this.order = order;
         this.mediaUrl = mediaUrl;
         this.caption = caption;
    }
}

export default Section;