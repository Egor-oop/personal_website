import { Main } from "./components/main/Main"
import { Projects } from "./components/projects/Projects"
import { Navigation } from "./components/navigatioin/Navigation"
import { Skills } from "./components/skills/Skills"
import { Toggle } from "./components/navigatioin/Toggle"

function App() {
    return (
        <>
            <Navigation />
            <Toggle />
            <Main />
            <Skills />
            <Projects />
        </>
    )
}

export default App
