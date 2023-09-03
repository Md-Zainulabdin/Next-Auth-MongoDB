"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { FiUpload } from "react-icons/fi";

const UploadImageBtn = () => {
  const { data: session } = useSession();
  const imgRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    imgRef.current.click();
  };

  const handleImageChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImage(base64);

    try {
      const res = await fetch("http://localhost:3000/api/postImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: session?.user?.email,
          image: base64,
        }),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("Error from server");
    }
  };

  return (
    <>
      <div className="image-box">
        <Image
          src={image || "/profile.webp"}
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

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
