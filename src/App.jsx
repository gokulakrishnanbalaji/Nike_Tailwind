import CustomerReviews from "./sections/CustomerReviews"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import PopularProducts from "./sections/PopularProducts"
import Services from "./sections/Services"
import SpecialOffers from "./sections/SpecialOffers"
import Subscribe from "./sections/Subscribe"
import SuperQuality from "./sections/SuperQuality"

const App = () => (
  <main className="relative">
    Nav 
    <section className="xl:padding-1 wide:padding-r padding-b">
      Hero
    </section>

    <section className="padding">
      Popular Products
    </section>

    <section className="padding">
      SuperQuality
    </section>

    <section className="padding-x py-10">
      Services
    </section>

    <section className="padding">
      SpecialOffers
    </section>

    <section className="padding bg-pale-blue">
      CustomerReviews
    </section>

    <section className="padding-x sm:py-32 py-16">
      Subscribe
    </section>

    <section className="padding-t bg-black ">
      Footer
    </section>
  </main>
)

export default App