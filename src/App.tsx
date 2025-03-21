import About from "./compnents/About"
import Contact from "./compnents/Contact"
import Header from "./compnents/Header"
import Projects from "./compnents/Projects"
import Testimonials from "./compnents/Testimonials"

function App() {
    return (
        <div className="w-full overflow-hidden">
           <Header />

           <About />

           <Projects />

           <Testimonials />

           <Contact />
        </div>
    )
}

export default App
