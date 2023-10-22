import mongoose, { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: String,
  role: String,
  email: String,
});

const ContentSchema = new Schema({
  title: String,
  editorId: String,
  scopeGroupId: String,
  editorRole: String,
});

const FolderSchema = new Schema({
  label: String,
  homeFolderId: String,
  contentId: String,
  parentId: String,
  cloneFolderId: String,
});

const SectionSchema = new Schema({
  label: String,
  folderId: String,
  clonedSectionId: String,
  contentId: String,
});

export const User2 = model("User2", UserSchema);

export const Content = model("Content", ContentSchema);

export const Folder = model("Folder", FolderSchema);

export const Section = model("Section", SectionSchema);
