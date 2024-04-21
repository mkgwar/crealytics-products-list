import React from "react";

// {
//     "title": "Pepe Jeans ZINC Jeans Tapered Fit ga4",
//     "gtin": "8434341886214",
//     "gender": "male",
//     "sale_price": "74.95 EUR",
//     "price": "99.95 EUR",
//     "image_link": "https://mosaic01.ztat.net/vgs/media/large/PE/12/2G/06/KK/11/PE122G06K-K11@12.jpg",
//     "additional_image_link": "https://mosaic01.ztat.net/vgs/media/large/PE/12/2G/06/KK/11/PE122G06K-K11@11.jpg, https://mosaic01.ztat.net/vgs/media/large/PE/12/2G/06/KK/11/PE122G06K-K11@10.jpg, https://mosaic01.ztat.net/vgs/media/large/PE/12/2G/06/KK/11/PE122G06K-K11@9.jpg, https://mosaic01.ztat.net/vgs/media/large/PE/12/2G/06/KK/11/PE122G06K-K11@8.jpg, https://mosaic01.ztat.net/vgs/media/large/PE/12/2G/06/KK/11/PE122G06K-K11@7.jpg"
//   }

export const ProductCard = ({ data }) => {
  return (
    <div className="md:h-[300px] h-[225px] w-full rounded overflow-hidden">
      <div className="relative image-background bg-gray-200 w-full aspect-video">
        <div className="bg-black py-1 px-2 text-xs-white absolute right-0">
          {data.gender}
        </div>
        <img src={data.image_link} />
      </div>
      <h1 className="uppercase text-xs font-bold mt-2">{data.title}</h1>
      <div className="font-semibold mt-3">
        {data.price === data.sale_price ? (
          <span>{data.price}</span>
        ) : (
          <>
            <span className="line-through mr-2 text-gray-600">
              {data.price}
            </span>
            <span className="text-red-600">{data.sale_price}</span>
          </>
        )}
      </div>
    </div>
  );
};
