import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import Image from 'next/image';

import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // let sliderInterval = setInterval(() => setNext(), 3000);
    // return () => {
    //   clearInterval(sliderInterval);
    // };
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
    <div className="mt-8 h-20 md:h-80 max-w-screen-xl text-center relative flex overflow-hidden section-center">
      {people.map((person, personIndex) => {
        const { id, image, name, title } = person;
        console.log(index);
        let position = personIndex === index ? 'activeSlide' : 'nextSlide';
        if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
          position = 'lastSlide';
        }
        return (
          <article className={`${position} flex flex-row left-6 md:left-8`} key={id}>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image
                width={350}
                height={250}
                src={image}
                alt={name}
                className="object-cover object-center rounded"
              />
            </div>
            <div className="md:-ml-10 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {name}
                <br className="hidden lg:inline-block" />
                {title}
              </h1>

              <p className="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
              </p>
            </div>
          </article>
        );
      })}
      <button onClick={() => setPrev()} className="prev bg-yellow-400 text-green-700 rounded-lg">
        <FiChevronLeft />
      </button>
      <button onClick={() => setNext()} className="next bg-yellow-400 text-green-700 rounded-lg">
        <FiChevronRight />
      </button>
    </div>
  );
}

export default App;
