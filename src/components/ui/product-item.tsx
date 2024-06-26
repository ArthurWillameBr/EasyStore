import { ProductWithTotalPrice } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";
import { DiscountBadge } from "./discount-badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex flex-col  gap-4 ">
        <div className="relative lg:h-[200px] aspect-square flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            alt="produtos com desconto"
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{
              objectFit: "contain",
            }}
          />
          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-3 top-3">
              {product.discountPercentage}
            </DiscountBadge>
          )}
        </div>

        <div className="flex flex-col gap-1 ">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm lg:text-base ">
            {product.name}
          </p>
          <div className="flex items-center gap-3">
            {product.discountPercentage > 0 ? (
              <>
                <p className="truncate text-sm font-semibold lg:text-lg">
                  R$ {product.totalPrice.toFixed(2)}
                </p>
                <p className="truncate text-xs lg:text-sm line-through opacity-60">
                  R$ {Number(product.basePrice).toFixed(2)}
                </p>
              </>
            ) : (
              <p className="text-sm font-semibold lg:text-lg">
                R$ {product.basePrice.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
