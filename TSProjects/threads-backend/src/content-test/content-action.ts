import { connectToDB } from "../dbConfig/mongoose";
import { User2, Content, Folder, Section } from "./content-models";

async function saveUsers() {
  try {
    await connectToDB();
    const user = new User2({
      name: "John",
      email: "john@gmail.com",
      role: "provider",
    });

    const saveUser = await user.save();
    console.log(saveUser);
  } catch (error: any) {}
}

async function saveContents() {
  try {
    await connectToDB();
    const content = new Content({
      title: "John Content",
      editorId: "64d6eca2d3dbec163b435fd1",
      editorRole: "provider",
      scopeGroupId: "brst-12345",
    });

    const savedContent = await content.save();
    console.log(savedContent);
  } catch (error: any) {
    console.log(error.message);
  }
}

async function saveFolders() {
  try {
    await connectToDB();
    const folder = new Folder({
      label: "admin l3 f2",
      contentId: "64d6eda7eb5a917245ebbf83",
      //  homeFolderId: "0000",
      parentId: "64d6efd9a7b2772426f2f951",
    });

    const savedFolder = await folder.save();
    console.log(savedFolder);
  } catch (error: any) {
    console.log(error.message);
  }
}

async function saveSections() {
  try {
    await connectToDB();
    const section = new Section({
      label: "A l2 f2 s2",
      contentId: "64d6eda7eb5a917245ebbf83",
      folderId: "64d6f1ae65256e74ca9ab070",
    });

    const savedSection = await section.save();
    console.log(savedSection);
  } catch (error: any) {
    console.log(error.message);
  }
}

// saveFolders();
// saveSections();

async function cursorIterator() {
  try {
    await connectToDB();
    const cursor = Folder.find().cursor();

    for (
      let doc = await cursor.next();
      doc != null;
      doc = await cursor.next()
    ) {
      console.log(doc.label);
    }
  } catch (error: any) {
    console.log(error.message);
  }
}

async function asyncIterator() {
  try {
    await connectToDB();

    for await (const doc of Folder.find()) {
      console.log(doc.label);
    }
  } catch (error: any) {
    console.log(error.message);
  }
}

async function cloneContent() {
  try {
    await connectToDB();
    const contents = await Content.find({
      editorId: "64d6ec26d41b0bf177702184",
    });

    console.log(contents);
  } catch (error: any) {
    console.log(error.message);
  }
}

asyncIterator();
