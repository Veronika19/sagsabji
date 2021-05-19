import Head from 'next/head';
import Vegetable from '../components/Vegetables';

export default function Home() {
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
              Fresh green Vegetables, Fruits, Milk, Egg delivered directly from farm to home. &nbsp;
              Call/WhatsApp -{' '}
              <a href="tel:09931708803" itemProp="telephone" className="underline">
                09931708803
              </a>
              /
              <a href="tel:08271700921" itemProp="telephone" className="underline">
                08271700921
              </a>
            </h1>
            <Slider />
            <div className="flex flex-wrap" itemScope itemType="https://schema.org/ItemList">
              <Vegetable />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
