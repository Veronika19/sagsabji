export default function Header() {
  return (
    <div className="2xl:mx-auto 2xl:container xl:px-0 bg-yellow-400">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center font-medium">
          <a className="flex lg:w-1/3 flex-wrap order-first lg:order-none title-font items-center justify-center text-green-700 lg:items-center lg:justify-center">
            <span className="ml-3 text-4xl" itemProp="name">
              Sag SabjiWale
            </span>
          </a>
          <div className="lg:w-2/3 inline-flex justify-center ml-5 lg:ml-0 text-green-700">
            <span className="mt-2 text-md">Available in BTPS, Kathara, Jarangdih</span>
          </div>
        </div>
      </header>
    </div>
  );
}
