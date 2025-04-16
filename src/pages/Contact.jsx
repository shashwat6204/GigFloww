import Navbar from "../components/Navbar";

const Contact = () => (
  <>
    <Navbar />
    <main className="pt-20 px-4 text-center">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-4 text-gray-600 max-w-xl mx-auto">
        Email us at <a href="mailto:hello@gigfloww.com" className="text-blue-600">hello@gigfloww.com</a>
      </p>
    </main>
  </>
);

export default Contact;
