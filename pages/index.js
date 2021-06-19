import { useState } from 'react';
import Head from 'next/head';
import Vegetable from '../components/Vegetables';

import Vegetables from '../vegatables.json';
import Fruit from '../fruits.json';
import DryFruits from '../dry-fruits.json';
import Slider from '../components/Slider';
import Cart from '../components/Cart';

export default function Home() {
  const [prodType, setProdType] = useState(Vegetables);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Sag SabjiWale</title>
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <section className="text-gray-600 body-font">
          <div className="container py-2 md:px-5 mx-auto">
            <h1
              className="text-sm font-medium title-font text-center text-green-700 mb-2 px-5"
              itemProp="description"
            >
              Fresh green Vegetables, Fruits & Dry Fruits delivered directly from farm to home.
              &nbsp; Call/WhatsApp -{' '}
              <a href="tel:09931708803" itemProp="telephone" className="underline">
                09931708803
              </a>
              /
              <a href="tel:08271700921" itemProp="telephone" className="underline">
                08271700921
              </a>
              <p className="bg-red-300 text-xs">
                Note: Price may vary as per market &#38; availability
              </p>
            </h1>
            <Slider />
            <div className="flex flex-wrap justify-evenly py-2 mb-4 text-lg sticky top-2 z-20 bg-gray-100">
              <button
                onClick={() => setProdType(Vegetables)}
                className={
                  prodType == Vegetables ? 'set_prod_type_btn_active' : 'set_prod_type_btn'
                }
              >
                Vegetables
              </button>
              <button
                onClick={() => setProdType(Fruit)}
                className={prodType == Fruit ? 'set_prod_type_btn_active' : 'set_prod_type_btn'}
              >
                Fruits
              </button>
              <button
                onClick={() => setProdType(DryFruits)}
                className={prodType == DryFruits ? 'set_prod_type_btn_active' : 'set_prod_type_btn'}
              >
                Dry Fruits
              </button>
            </div>
            <div className="flex flex-wrap" itemScope itemType="https://schema.org/ItemList">
              <Vegetable lists={prodType} />
            </div>
            <Cart />
          </div>
        </section>
      </main>
    </div>
  );
}
