import React, { useEffect, useState } from "react";
import axios from "axios";

const ImageUploader = ({ setNewImage_url, showUpdateImage }) => {
  const [imageSrc, setImageSrc] = useState();

  useEffect(() => {
    if (showUpdateImage) {
      setImageSrc(showUpdateImage);
    }
  }, [showUpdateImage]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => setImageSrc(reader.result);
      reader.readAsDataURL(file);

      const formData = new FormData();
      formData.append("profile_picture", file);

      try {
        const response = await axios.post(
          "http://localhost:4000/students/upload",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        setNewImage_url(
          `http://localhost:4000/STUDENT_PORTAL/images/students/${response?.data?.file?.filename}`
        );
        console.log("File uploaded successfully:", response.data);
      } catch (error) {
        console.error("File upload error:", error);
      }
    }
  };

  return (
    <div>
      <img
        className="w-full object-cover"
        style={{ height: "200px", width: "200px" }}
        src={imageSrc || "../../profile.png"}
        alt="Preview"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mt-2"
      />
    </div>
  );
};

export default ImageUploader;
