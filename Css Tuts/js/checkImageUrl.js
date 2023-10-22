

const imageUrl = "https://source.unsplash.com/user/c_v_r/100x100";

// Fetch the image
fetch(imageUrl)
  .then(response => response.arrayBuffer())
  .then(buffer => {
    // Get the file extension based on the image format
    const uintArray = new Uint8Array(buffer);
    let fileExtension = '';
    if (uintArray[0] === 0x89 && uintArray[1] === 0x50 && uintArray[2] === 0x4e && uintArray[3] === 0x47 && uintArray[4] === 0x0d && uintArray[5] === 0x0a && uintArray[6] === 0x1a && uintArray[7] === 0x0a) {
      fileExtension = 'png';
    } else if (uintArray[0] === 0xff && uintArray[1] === 0xd8) {
      fileExtension = 'jpg';
    } else if (uintArray[0] === 0x47 && uintArray[1] === 0x49 && uintArray[2] === 0x46 && uintArray[3] === 0x38 && (uintArray[4] === 0x37 || uintArray[4] === 0x39) && uintArray[5] === 0x61) {
      fileExtension = 'gif';
    }
    console.log(fileExtension); // Output: "jpg"
  })
  .catch(error => console.error(error));
