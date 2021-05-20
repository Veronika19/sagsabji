import List from '../vegatables.json';
import Image from 'next/image';
import { FiPlusSquare, FiMinusSquare } from 'react-icons/fi';

export default function Vegetable() {
  const vegList = List.map((each, index) => {
    return (
      <div
        key={index}
        className="w-1/2 px-2 mb-8 lg:w-1/4 md:w-3/4"
        itemScope
        itemType="https://schema.org/Product"
      >
        <a className="block relative h-auto overflow-hidden">
          <Image
            itemProp="image"
            alt={each.name}
            width={300}
            height={250}
            className="object-center rounded-2xl w-full h-full block"
            src={each.image}
          />
        </a>
        <div className="flex flex-col bg-yellow-400 rounded-2xl">
          <div className="flex text-base justify-between mb-1">
            <button
              // onClick={() => setPrev()}
              className="px-3 py-1 text-lg bg-green-700 text-yellow-400 rounded-sm"
            >
              <FiMinusSquare />
            </button>
            <h3 className="text-gray-900 title-font font-bold">1 kg</h3>
            <button
              // onClick={() => setNext()}
              className="px-3 py-1 text-lg bg-green-700 text-yellow-400 rounded-sm"
            >
              <FiPlusSquare />
            </button>
          </div>
          <div className="flex justify-around text-base">
            <h2 className="text-gray-900 title-font font-bold" itemProp="name">
              {each.name}
            </h2>
            <p className="font-medium text-green-800">
              <span itemProp="priceCurrency" content="Indian rupee">
                Rs.
              </span>
              <span itemProp="price" content={each.price}>
                {each.price}
              </span>
              {/* <span className="text-lg ml-1 font-normal text-gray-500">/{each.quantity}</span> */}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return <>{List && vegList}</>;
}
