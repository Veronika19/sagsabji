export default function Header() {
  return (
    <div className="2xl:mx-auto 2xl:container xl:px-0 bg-yellow-400">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex lg:w-1/3 flex-wrap order-first lg:order-none title-font font-medium items-center justify-center text-green-700 lg:items-center lg:justify-center">
            <span className="text-4xl tracking-widest font-bold" itemProp="name">
              Sag SabjiWale
            </span>
            <br />
            <span className="mt-2 text-sm">Available in BTPS, Kathara, Jarangdih</span>
          </a>
        </div>
      </header>
    </div>
  );
}
