import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-background h-screen w-full">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}