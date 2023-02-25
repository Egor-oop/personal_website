import { Main } from "./components/main/Main"
import { Projects } from "./components/projects/Projects"
import { Navigation } from "./components/navigatioin/Navigation"
import { Skills } from "./components/skills/Skills"
import { Toggle } from "./components/navigatioin/Toggle"
import { Footer } from "./components/footer/Footer"
import { WorkExperience } from "./components/work/WorkExperience"

function App() {
    return (
        <>
            <Navigation />
            <Toggle />
            <Main />
            <Skills />
            <Projects />
            <WorkExperience />
            <Footer />
        </>
    )
}

export default App
