// import List from '../vegatables.json';
import Image from 'next/image';
import Counter from './Counter';
import isEmpty from '../utils/is-empty';

export default function Vegetable({ lists }) {
  const vegList = lists.map((each, index) => {
    if (each.status === '1') {
      console.log('eacheach====', each.ProductOption.price);
      return (
        <div
          key={each.id}
          className="w-1/2 px-2 mb-8 lg:w-1/4 md:w-3/4"
          itemScope
          itemType="https://schema.org/Product"
        >
          <a className="block relative h-auto overflow-hidden">
            <Image
              itemProp="image"
              alt={each.name}
              width={150}
              height={120}
              quality={45}
              className="object-center rounded-2xl w-full h-full block"
              src={each.image}
            />
          </a>
          <div className="flex flex-col bg-yellow-400 rounded-tl-2xl rounded-tr-2xl">
            <Counter {...each} />
            <div className="flex justify-around text-base">
              <h2 className="text-gray-900 title-font font-bold" itemProp="name">
                {each.name}
              </h2>
              {each.ProductOption.showPrice === 'No' ? (
                <p></p>
              ) : (
                <p className="font-medium text-green-800">
                  <span itemProp="priceCurrency" content="Indian rupee">
                    Rs.
                  </span>
                  <span itemProp="price" content={each.ProductOption.price}>
                    {each.ProductOption.price.slice(0, -3)}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      );
    }
  });

  return <>{vegList}</>;
}
