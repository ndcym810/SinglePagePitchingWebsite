import Chat from "./Sections/Chat";
import What from "./Sections/What";
import How from "./Sections/How";
import Why from "./Sections/Why";
import Private from "./Sections/Private";
import Help from "./Sections/Help";
import Footer from "./Sections/Footer";

function App() {
  return (
    <main className="relative flex h-full w-full flex-col bg-red-500 text-white">
      <section className="flex w-full flex-col items-center bg-green-700 p-2 max-sm:h-screen">
        <Chat />
      </section>
      <section className="flex w-full flex-col items-center bg-green-700">
        <What />
      </section>
      <section className="flex w-full flex-col items-center bg-green-900">
        <How />
      </section>
      <section className="flex w-full flex-col items-center bg-green-700">
        <Why />
      </section>
      <section className="flex w-full flex-col items-center bg-green-900">
        <Private />
      </section>
      <section className="flex w-full flex-col items-center bg-green-700">
        <Help />
      </section>
      <section className="flex w-full flex-col items-center bg-green-700">
        <Footer />
      </section>
    </main>
  );
}

export default App;
