import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

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
    <section className="section">
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title } = person;
          console.log(index);
          let position = personIndex === index ? 'activeSlide' : 'nextSlide';
          if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
            position = 'lastSlide';
          }
          return (
            <article className={`${position}`} key={id}>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Image
                  width={600}
                  height={250}
                  src={image}
                  alt={name}
                  className="object-cover object-center rounded"
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  {name}
                  <br className="hidden lg:inline-block" />
                  {title}
                </h1>

                <p class="mb-8 leading-relaxed">
                  Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
                  cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage
                  hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                </p>
              </div>
            </article>
          );
        })}
        <button onClick={() => setPrev()} className="prev">
          <FiChevronLeft />
        </button>
        <button onClick={() => setNext()} className="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
