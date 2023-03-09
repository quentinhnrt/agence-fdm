import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Services from "./Services/Services.jsx";
import About from "./About/About.jsx";
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
              </div>
          </div>
          <Footer />
      </main>
  )
}

export default App
