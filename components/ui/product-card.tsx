"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import { MouseEventHandler, useEffect } from "react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-card";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ 
  data 
}) => {
  const cart = useCart();
  const previewModal = usePreviewModal();
  const router = useRouter();
  const handleClick = () => {
    router.push(`/product/${data?.id}`);  
  }
  useEffect(() => {
    console.log("Product data:", data);
  }, [data]);

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  }

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  } 

  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border border-gray-100 p-3 space-y-4 w-[230px] mx-auto">
      {/* Image and Actions */}
      <div className="relative w-full h-[200px] bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
        <Image
          src={data?.images?.[0]?.url}
          alt="Product Image"
          fill
          className="object-contain p-4"
          unoptimized
        />
        {/* Overlay Icons */}
        <div className="opacity-0 group-hover:opacity-100 transition absolute bottom-4 w-full flex justify-center gap-x-4">
          <IconButton 
            onClick={onPreview}
            icon={<Expand size={20} className="text-gray-600" />}
          />
          <IconButton 
            onClick={onAddToCart}
            icon={<ShoppingCart size={20} className="text-gray-600" />}
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="font-semibold text-lg">
          {data.name}
        </p>
        <p className="text-sm text-gray-500">
          {data.category?.name}
        </p>
      </div>
      {/* Price */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  );
}

export default ProductCard;
