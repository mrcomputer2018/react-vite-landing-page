import About from "./compnents/About"
import Header from "./compnents/Header"
import Projects from "./compnents/Projects"

function App() {
    return (
        <div className="w-full overflow-hidden">
           <Header />

           <About />

           <Projects />
        </div>
    )
}

export default App
