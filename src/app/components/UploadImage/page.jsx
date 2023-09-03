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

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
  };
  return (
    <>
      <div className="image-box">
        <Image
          src={image ? URL.createObjectURL(image) : "/profile.webp"}
          width={180}
          height={180}
          alt="Profile Image"
          priority
          className="rounded-full"
        />
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


function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}