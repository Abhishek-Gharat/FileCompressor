import { useState } from "react";
import "./Content.css"; // Import the CSS file

const Content = () => {
  const [images, setImages] = useState([]);

  const handleImageDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleImages(files);
  };

  const handleImageSelect = (e) => {
    const files = e.target.files;
    handleImages(files);
  };

  const handleImages = (files) => {
    const allowedTypes = [
      "image/png",
      "image/jpeg",
      "image/gif",
      "image/svg+xml",
      "image/webp",
      "image/heic",
    ];
    const selectedImages = [];
    for (let i = 0; i < files.length; i++) {
      if (allowedTypes.includes(files[i].type)) {
        selectedImages.push(files[i]);
      }
    }
    setImages(selectedImages);
  };

  const compressImages = () => {
    // Logic to compress images
    console.log("Images compressed!");
  };

  return (
    <div className="content-container">
      <h2>Drag and drop your image here</h2>
      <p>Or use the button below to select an image from your computer</p>
      <label htmlFor="file-upload" className="file-upload-button">
        Select Image
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleImageSelect}
      />

      <p>Supported image formats: PNG, JPEG, GIF, SVG, WEBP, HEIC</p>
      <div className="image-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={URL.createObjectURL(image)}
            alt={`Image ${index + 1}`}
            className="grid-image"
          />
        ))}
      </div>
      {images.length > 0 && (
        <button className="compress-button" onClick={compressImages}>
          Compress Images
        </button>
      )}
    </div>
  );
};

export default Content;