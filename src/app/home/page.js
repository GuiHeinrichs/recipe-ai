import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-800 h-screen w-full">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}