import React from "react";
import Image from 'react-bootstrap/Image'



function Imageupload() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center"}} >
      <input type="file"accept="image/*"onChange={handleImageUpload}ref={imageUploader}style={{display: "none"}}/>
      <div
        style={{ height: "100px", width: "100px", border: "2px dashed black" }}
        onClick={() => imageUploader.current.click()}>
        <img ref={uploadedImage} style={{ width: "100%",height: "100%", position: "acsolute"}} />
      </div>
      Click to upload Image
    </div>
  );
}

export default Imageupload;