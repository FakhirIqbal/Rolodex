import React, { useState, useCallback } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { IoMdImages } from "react-icons/io";
import { useDropzone } from "react-dropzone";
const ProductImageInput = ({
  index,
  selectedImage,
  handleImageClick,
  fileInputRef,
  handleFileChange,
  setSelectedImage,
  items,
}: any) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setIsDragging(false);

    // Handle the dropped files
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileChange(
        { target: { files: [files[0]] } } as any,
        setSelectedImage
      );
    }
  };

  return (
    <div
      className={`flex justify-between flex-col gap-2 ${
        isDragging ? "border-blue-500" : ""
      }`}
    >
      <div
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`mt-4 border-2  w-50 sm:w-60 h-[150px] px-4 p-1 flex flex-col items-center justify-center gap-2 ${
          isDragging ? "border-primary" : ""
        }`}
      >
        {selectedImage ? (
          <Image
            src={selectedImage}
            width={0}
            height={0}
            sizes="100vw"
            className="cursor-pointer w-[fit-content] h-full "
            alt="Selected Image"
            onClick={() => {
              handleImageClick(fileInputRef);
            }}
          />
        ) : (
          <div className="cursor-pointer space-y-4 rounded-full w-full flex items-center flex-col justify-center">
            <Button
              type={"button"}
              onClick={() => {
                handleImageClick(fileInputRef, selectedImage);
              }}
              className={"!rounded-full !bg-none !text-sm bg-white flex items-center flex-col justify-center"}
            >
              <span className="text-black">Drag a photo here</span>
              <span className="text-black font-semibold">OR</span>
            <span className="text-black text-md text-center flex items-center font-semibold">
            <IoMdImages className="text-4xl text-black me-2" /> Select a photo
            </span>
            </Button>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            handleFileChange(e, setSelectedImage);
          }}
        />
      </div>
    </div>
  );
};

export default ProductImageInput;
