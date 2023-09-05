import React, { useState } from 'react';
import { Image } from 'cloudinary-react';
import axios from 'axios';

const CloudinaryUpload = ({ onSuccess }) => {
  const [image, setImage] = useState(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {
      // Create a FormData object to send the file to the server
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'bjroofqw'); // Replace with your Cloudinary upload preset

      // Make an HTTP POST request to Cloudinary's upload endpoint
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/axle-cartage/image/upload',
        formData
      );

      if (response.data && response.data.secure_url) {
        // Set the uploaded image URL
        setImage(response.data.secure_url);

        // Trigger the onSuccess callback with the image URL
        onSuccess(response.data.secure_url);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
      />
      {image && <Image cloudName="your_cloud_name" publicId={image} />}
    </div>
  );
};

export default CloudinaryUpload;
