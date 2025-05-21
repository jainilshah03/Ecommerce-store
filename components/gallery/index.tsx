"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";

import { Image as ImageType } from "@/types";
import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col items-center gap-4">
      
      {/* Main Image */}
      <Tab.Panels className="w-full flex justify-center">
  {images.map((image) => (
    <Tab.Panel key={image.id}>
      <div className="w-full max-w-[700px] h-auto max-h-[630px] rounded-lg overflow-hidden border">
        <Image
          src={image.url}
          alt="Image"
          width={100000}  // increased from 500 to 700
          height={630} // increased from 450 to 630
          className="object-contain w-full h-full"
        />
      </div>
    </Tab.Panel>
  ))}
</Tab.Panels>


      {/* Thumbnails */}
      <Tab.List className="grid grid-cols-4 gap-6"> {/* ← Increase gap here */}
  {images.map((image) => (
    <GalleryTab key={image.id} image={image} />
  ))}
</Tab.List>


    </Tab.Group>
  );
};

export default Gallery;
