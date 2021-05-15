import Head from 'next/head';

import Vegetable from '../components/Vegetables';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Sag SabjiWala</title>
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-2 mx-auto">
            <h1
              className="sm:text-3xl text-2xl font-medium title-font text-center text-green-700 mb-20 underline"
              itemProp="description"
            >
              Fresh Vegetables right at your door - &nbsp;
              <a href="tel:09931708803" itemProp="telephone">
                09931708803
              </a>
            </h1>
            <div className="flex flex-wrap -m-4" itemScope itemType="https://schema.org/ItemList">
              <Vegetable />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
