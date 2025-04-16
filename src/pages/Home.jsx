import Navbar from "../components/Navbar";

const Home = () => (
  <>
    <Navbar />
    <main className="pt-20 px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to Gigfloww</h1>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        Helping companies hire smart with interns & entry-level professionals.
      </p>
    </main>
  </>
);

export default Home;
