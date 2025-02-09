import Header from "../components/Header"
import Categories from "../components/HomeContent/Categories"
import Footer from "../components/HomeContent/Footer"
import Hero from "../components/HomeContent/Hero"

import Service from "../components/HomeContent/Service"

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <Service />
      {/* <MainContent /> */}

      <Footer />
    </div>
  )
}

export default HomePage
