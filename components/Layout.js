import Header from './Header';

export default function Layout(props) {
  return (
    <div className="bg-gray-200" itemScope itemType="https://schema.org/LocalBusiness">
      <Header />

      <main>
        {props.children}
        <footer className="flex items-center justify-center w-full h-14 border-t">
          <p className="flex items-center justify-center">
            Designed and Developed by&nbsp;
            <a
              className="text-red-800 font-bold"
              href="tel:9555199044"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pankaj
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}
