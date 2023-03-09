import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Services from "./Services/Services.jsx";
import About from "./About/About.jsx";
import Contact from "./Contact/Contact.jsx";
import Landing from "./Landing/Landing.jsx";

function App() {

  return (
      <main className={"overflow-x-hidden"}>
          <Header />
          <div className="max-w-[1440px] mx-auto">
              <div className={"max-w-[1280px] h-fit mx-auto px-8"}>
              <Landing />
                <Services />
                <About />
                <Contact />
              </div>
          </div>
          <Footer />
      </main>
  )
}

export default App
