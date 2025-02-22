import Header from "./components/layout/Header";
import HeroHomeContainer from "./components/containers/HeroHomeContainer";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-background h-screen w-full">
      <Header />
      <HeroHomeContainer />
      <Footer />
    </div>
  );
}
