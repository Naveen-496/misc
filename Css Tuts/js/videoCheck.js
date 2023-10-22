
const mediaUrl = ""

fetch(mediaUrl)
  .then(response => {
    return response.blob();
  })
  .then(blob => {
    // Process the blob file here
    console.log(blob);
  })
  .catch(error => {
    console.error(error);
  });










function getFileExtensionFromBinaryData(binaryData) {
  if (binaryData.length < 12) {
    return "";
  }

  // Check for audio files
  if (binaryData[0] === 0x52 && binaryData[1] === 0x49 && binaryData[2] === 0x46 && binaryData[3] === 0x46) {
    // "RIFF" in ASCII
    if (binaryData[8] === 0x57 && binaryData[9] === 0x41 && binaryData[10] === 0x56 && binaryData[11] === 0x45) {
      // "WAVE" in ASCII
      return "wav";
    } else if (binaryData[8] === 0x41 && binaryData[9] === 0x56 && binaryData[10] === 0x49 && binaryData[11] === 0x20) {
      // "AVI " in ASCII
      return "avi";
    } else if (binaryData[8] === 0x66 && binaryData[9] === 0x74 && binaryData[10] === 0x79 && binaryData[11] === 0x70) {
      // "ftyp" in ASCII
      if (binaryData[12] === 0x4D && binaryData[13] === 0x34 && binaryData[14] === 0x41 && binaryData[15] === 0x20) {
        // "M4A " in ASCII
        return "m4a";
      } else if (binaryData[12] === 0x4D && binaryData[13] === 0x34 && binaryData[14] === 0x56 && binaryData[15] === 0x20) {
        // "M4V " in ASCII
        return "m4v";
      } else if (binaryData[12] === 0x4D && binaryData[13] === 0x34 && binaryData[14] === 0x41 && binaryData[15] === 0x20) {
        // "MP4 " in ASCII
        return "mp4";
      } else if (binaryData[12] === 0x4D && binaryData[13] === 0x34 && binaryData[14] === 0x41 && binaryData[15] === 0x20) {
        // "M4B " in ASCII
        return "m4b";
      } else if (binaryData[12] === 0x4D && binaryData[13] === 0x34 && binaryData[14] === 0x50 && binaryData[15] === 0x20) {
        // "MP4 " in ASCII
        return "mp4";
      } else if (binaryData[12] === 0x4F && binaryData[13] === 0x67 && binaryData[14] === 0x67 && binaryData[15] === 0x53) {
        // "OggS" in ASCII
        return "ogg";
      } else if (binaryData[12] === 0x66 && binaryData[13] === 0x6C && binaryData[14] === 0x61 && binaryData[15] === 0x63) {
        // "flac" in ASCII
        return "flac";
      }
    }
  }
}