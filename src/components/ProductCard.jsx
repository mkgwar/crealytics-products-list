import React, { useState } from "react";

const image_link = "https://picsum.photos/id/200/400/225";

const additional_image_link = [
  image_link,
  "https://picsum.photos/id/201/400/225",
  "https://picsum.photos/id/202/400/225",
  "https://picsum.photos/id/203/400/225",
];

export const ProductCard = ({ data }) => {
  const [currImgLink, setCurrImgLink] = useState(image_link);

  return (
    <div
      className="h-[300px] w-full rounded overflow-hidden bg-white shadow"
      data-testid="product-card"
    >
      <div className="relative image-background bg-gray-200 w-full aspect-video">
        <div
          className="bg-black py-1 px-2 text-xs-white absolute right-0"
          data-testid="product-gender"
        >
          {data.gender}
        </div>
        <img
          src={currImgLink}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>
      <h1
        className="uppercase text-xs font-bold mt-2 ml-2"
        data-testid="product-title"
      >
        {data.title}
      </h1>
      <div className="font-semibold mt-3 ml-2">
        {parseFloat(data.sale_price?.split(" ")[0]) <
        parseFloat(data.price?.split(" ")[0]) ? (
          <>
            <span className="line-through mr-2 text-gray-600">
              {data.price}
            </span>
            <span className="text-red-600" data-testid="product-onSale">
              {data.sale_price}
            </span>
          </>
        ) : (
          <span>{data.price}</span>
        )}
      </div>
      <div className="flex gap-1 mt-4 ml-2">
        {additional_image_link.map((link) => {
          return (
            <div
              key={link}
              className={`h-8 aspect-square bg-gray-200 cursor-pointer ${
                currImgLink === link ? "border-2 border-red-500" : ""
              }`}
            >
              <img
                src={link}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                onClick={() => setCurrImgLink(link)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
