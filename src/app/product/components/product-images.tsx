"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  imagesUrls: string[];
}

export const ProductImages = ({ imagesUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imagesUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };
  return (
    <div className="flex flex-col lg:w-3/5 lg:min-h-full">
      <div className="flex h-[380px] lg:h-full w-full items-center justify-center bg-accent lg:rounded-lg">
        <Image
          src={currentImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        ></Image>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-4 px-5 lg:px-0">
        {imagesUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent ${imageUrl === currentImage ? "border-2 border-solid border-primary" : ""}`}
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
              style={{
                objectFit: "contain",
              }}
            ></Image>
          </button>
        ))}
      </div>
    </div>
  );
};
