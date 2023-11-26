import Header from "./common/Header";
import Heroes from "../user/components/Heroes";
import Features from "../user/components/Features";
import MainContent from "./components/MainContent";
import NewsLetter from "./components/NewsLetter";
import Footer from "./common/Footer";
// import HaversineCalculator from "./common/HaversineCalculator";

function Home() {
  return (
    <>
      {/* <HaversineCalculator /> */}
      {/* Header */}
      <Header />

      {/* Heroes */}
      <Heroes />

      {/* Features */}
      <Features />

      {/* Main Content */}
      <MainContent />

      {/* News Letter */}
      <NewsLetter />

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
