import Image from "next/image";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";
import { Image as ImageType } from "@/types";

interface GalleryTabProps {
  image: ImageType;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
<Tab
  className={({ selected }) =>
    cn(
      "relative h-24 w-20 flex items-center justify-center overflow-hidden rounded-md",
      "border-2 transition",
      selected ? "border-black" : "border-transparent"
    )
  }
>
  <div className="relative h-20 w-16">
    <Image
      src={image.url}
      alt=""
      fill
      className="object-cover object-center"
    />
  </div>
</Tab>

  );
};

export default GalleryTab;
