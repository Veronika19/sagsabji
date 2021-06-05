import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import Image from 'next/image';

import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let sliderInterval = setInterval(() => setNext(), 3000);
    return () => {
      clearInterval(sliderInterval);
    };
  }, [index]);

  const setNext = () => {
    setIndex((preVal) => {
      return preVal === people.length - 1 ? 0 : ++preVal;
    });
  };

  const setPrev = () => {
    setIndex((preVal) => {
      return preVal === 0 ? people.length - 1 : --preVal;
    });
  };

  return (
    <div className="shadow-2xl mt-1 mb-4 md:mt-8 h-32 md:h-60 bg-white max-w-screen-xl text-center relative flex overflow-hidden section-center">
      {people.map((item, itemIndex) => {
        const { id, image, name, price } = item;
        let position = itemIndex === index ? 'activeSlide' : 'nextSlide';
        if (itemIndex === index - 1 || (index === 0 && itemIndex === people.length - 1)) {
          position = 'lastSlide';
        }
        return (
          <article className={`${position} flex flex-row left-6 md:left-8 items-center`} key={id}>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-2/5">
              <Image
                width={200}
                height={150}
                src={image}
                alt={name}
                className="object-cover object-center rounded"
              />
            </div>
            <div className="-ml-6 md:-ml-10 lg:flex-grow w-3/5 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="-mt-2 title-font md:text-3xl text-base capitalize mb-1 font-medium text-green-700">
                {name}
                <br className="inline-block" />
                {price}
              </h1>

              {/* <p className="mb-8 leading-relaxed">Copper mug try-hard</p>*/}
            </div>
          </article>
        );
      })}
      <button
        onClick={() => setPrev()}
        className="top-16 md:top-32 prev bg-yellow-500 text-green-700 rounded-sm"
      >
        <FiChevronLeft />
      </button>
      <button
        onClick={() => setNext()}
        className="top-16 md:top-32 next bg-yellow-500 text-green-700 rounded-sm"
      >
        <FiChevronRight />
      </button>
    </div>
  );
}

export default App;
