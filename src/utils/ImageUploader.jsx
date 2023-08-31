import React, { useState } from "react";
// import Dropzone from "react-dropzone";
import Minio from "minio";

const ImageUploader = () => {
  const [uploadedUrl, setUploadedUrl] = useState("");

  const handleDrop = async (acceptedFiles) => {
    const minioClient = new Minio.Client({
      endPoint: "your-minio-endpoint",
      port: 9000,
      useSSL: false,
      accessKey: "your-access-key",
      secretKey: "your-secret-key",
    });

    const bucketName = "your-bucket-name";
    const file = acceptedFiles[0];

    try {
      await minioClient.putObject(bucketName, file.name, file, {
        "Content-Type": file.type,
      });

      const imageUrl =
        minioClient.protocol +
        "//" +
        minioClient.host +
        "/" +
        bucketName +
        "/" +
        file.name;
      setUploadedUrl(imageUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Drag and drop an image here, or click to select one</p>
          </div>
        )}
      </Dropzone>
      {uploadedUrl && <img src={uploadedUrl} alt="Uploaded" />}
    </div>
  );
};

export default ImageUploader;
