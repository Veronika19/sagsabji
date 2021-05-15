import Header from './Header';

export default function Layout(props) {
  return (
    <div className="bg-gray-200">
      <Header />

      <main>
        {props.children}
        <footer className="flex items-center justify-center w-full h-24 border-t">
          <a
            className="flex items-center justify-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Sabji Wala
          </a>
        </footer>
      </main>
    </div>
  );
}
