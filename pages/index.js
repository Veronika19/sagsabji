import Head from 'next/head';
import Image from 'next/image';

import Vegetable from '../components/Vegetables';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-2 mx-auto">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-green-700 mb-20 underline">
              Fresh Vegetables right at your door
            </h1>
            <div className="flex flex-wrap -m-4">
              <Vegetable />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
