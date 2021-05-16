export default function Header() {
  return (
    <div className="2xl:mx-auto 2xl:container xl:px-0 bg-yellow-400">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex lg:w-1/3 flex-wrap order-first lg:order-none title-font font-medium items-center justify-center text-green-700 lg:items-center lg:justify-center">
            <span className="ml-3 text-4xl" itemProp="name">
              Sag SabjiWala
            </span>
            <br />
            <span className="mt-2 text-sm">Available in BTPS, Kathara, Jarangdih</span>
          </a>
          <div className="lg:w-2/3 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="inline-flex items-center bg-green-700 border-0 font-bold py-3 px-6 focus:outline-none hover:bg-green-800 rounded text-yellow-500 mt-4 md:mt-0">
              Order Now
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
