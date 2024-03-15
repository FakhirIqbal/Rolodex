import React, { useState, useCallback } from "react";
import Image from "next/image";
import Button from "../ui/Button";
import { useDropzone } from "react-dropzone";
const ImageInput = ({
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
      className={`flex justify-between items-center flex-col gap-2 ${
        isDragging ? "border-blue-500" : ""
      }`}
    >
      <div
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`mt-4 border-dashed border-4 w-full h-[150px] px-4 p-1    flex flex-col items-center justify-center rounded-xl gap-2 ${
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
              className={"!rounded-full !text-sm"}
            >
              Upload photos
            </Button>
            <p>or drag them in</p>
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
      <div className="w-full mt-1">
        <label className={`block text-sm  font-semibold `}>
          {` Image ${index + 1} Description*`}
        </label>
        <textarea
          //  {...register("description", {
          //    required: `Description  is required`,
          //    maxLength: 8000,
          //    minLength: 4,
          //  })}
          name={"description"}
          placeholder="Image description..."
          className="border-2 text-sm my-1 w-full focus:ring-0 focus:border-primary   p-4 border-gray-200  rounded-xl resize-none"
          id=""
          cols={30}
          rows={2}
        ></textarea>
      </div>
    </div>
  );
};

export default ImageInput;
