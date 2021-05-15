import List from '../vegatables.json';
import Image from 'next/image';

export default function Vegetable() {
  const vegList = List.map((each, index) => {
    return (
      <div
        key={index}
        className="w-1/2 px-2 mb-8 lg:w-1/4 md:w-3/4 w-full"
        itemScope
        itemType="https://schema.org/Product"
      >
        <a className="block relative h-auto overflow-hidden">
          <Image
            itemProp="image"
            alt={each.name}
            width={300}
            height={250}
            className="object-center rounded-3xl w-full h-full block"
            src={each.image}
          />
        </a>
        <div className="mt-1">
          <h2 className="text-gray-900 title-font text-lg font-bold" itemProp="name">
            {each.name}
          </h2>
          <p className="font-medium bg-yellow-400  text-green-800">
            <span itemprop="priceCurrency" content="Indian rupee">
              Rs.
            </span>
            <span itemProp="price" content={each.price}>
              {each.price}
            </span>
            {/* <span className="text-lg ml-1 font-normal text-gray-500">/{each.quantity}</span> */}
          </p>
        </div>
      </div>
    );
  });

  return <>{List && vegList}</>;
}
