import { Main } from "./components/main/Main"
import { Projects } from "./components/projects/Projects"
import { Navigation } from "./components/navigatioin/Navigation"
import { Skills } from "./components/skills/Skills"

function App() {
    return (
        <>
            <Navigation />
            <Main />
            <Skills />
            {/* <Projects /> */}
        </>
    )
}

export default App
