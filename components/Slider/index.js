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
    <div className="shadow-2xl rounded-tl-lg rounded-br-lg mt-1 mb-4 md:mt-8 h-40 md:h-80 bg-green-600 max-w-screen-xl text-center relative flex overflow-hidden section-center">
      {people.map((person, personIndex) => {
        const { id, image, name, title } = person;
        // console.log(index);
        let position = personIndex === index ? 'activeSlide' : 'nextSlide';
        if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
          position = 'lastSlide';
        }
        return (
          <article className={`${position} flex flex-row left-6 md:left-8 items-center`} key={id}>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-2/5">
              <Image
                width={400}
                height={300}
                src={image}
                alt={name}
                className="object-cover object-center rounded"
              />
            </div>
            <div className="-ml-6 md:-ml-10 lg:flex-grow w-3/5 md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="-mt-2 title-font sm:text-4xl md:text-3xl text-base capitalize mb-4 font-medium text-yellow-400">
                {name}
                <br className="inline-block" />
                {title}
              </h1>

              <p className="hidden md:block mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
              </p>
            </div>
          </article>
        );
      })}
      <button
        onClick={() => setPrev()}
        className="top-20 md:top-40 prev bg-yellow-400 text-green-700 rounded-sm"
      >
        <FiChevronLeft />
      </button>
      <button
        onClick={() => setNext()}
        className="top-20 md:top-40 next bg-yellow-400 text-green-700 rounded-sm"
      >
        <FiChevronRight />
      </button>
    </div>
  );
}

export default App;
