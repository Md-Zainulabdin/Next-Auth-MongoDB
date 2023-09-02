"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";

const UploadImageBtn = () => {
  const imgRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    imgRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  return (
    <>
      <div className="image-box">
        {image ? (
          <Image
            src={URL.createObjectURL(image)}
            width={180}
            height={180}
            alt="Profile Image"
            priority
            className="rounded-full"
          />
        ) : (
          <Image
            src={"/profile.webp"}
            width={180}
            height={180}
            alt="Profile Image"
            priority
            className="rounded-full"
          />
        )}
      </div>
      <div onClick={handleImageClick}>
        <input
          type="file"
          ref={imgRef}
          onChange={handleImageChange}
          className="hidden"
        />
        <FiUpload size={25} />
      </div>
    </>
  );
};

export default UploadImageBtn;
