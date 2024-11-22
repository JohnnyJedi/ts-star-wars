import './App.css'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {SWContext} from "./utils/context.ts";
import {useState} from "react";
import {characters, defaultHero} from "./utils/constants.ts";


function App() {
    const [heroName, setHeroName] = useState(characters[defaultHero].name);

    return (
        <>
            <SWContext.Provider value={{heroName, changeName: setHeroName}}>
                <Header/>
                <Main/>
            </SWContext.Provider>

            <Footer/>
        </>
    )
}

export default App
