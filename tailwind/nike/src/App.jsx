import Navbar from "./Components/Navbar";
import {
  Hero,
  CustomerReviews,
  Services,
  Subscribe,
  SuperQuality,
  SpecialOffers,
  PopularProducts,
  Footer,
} from "./sections";

const App = () => (
  <main className="relative">
    <Navbar />
     <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
     </section>
    <Footer />
  </main>
);

export default App;
