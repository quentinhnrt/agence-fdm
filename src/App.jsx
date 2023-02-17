import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import Services from "./Services/Services.jsx";

function App() {

  return (
      <main>
          <Header />
          <div className="max-w-[1440px] mx-auto">
              <div className={"max-w-[1280px] h-fit mx-auto px-8"}>
                <Services />
              </div>
          </div>
          <Footer />
      </main>
  )
}

export default App
