import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import {SWContext} from "./utils/context.ts";
import {useState} from "react";
import {defaultHero} from "./utils/constants.ts";


function App() {
    const [hero, setHero] = useState(defaultHero);
    const [error, setError] = useState(false);

    return (
        <>
            <SWContext.Provider value={{hero, changeHero: setHero, error, changeToError: setError}}>
                <Header/>
                <Main/>
                <Footer/>
            </SWContext.Provider>
        </>
    )
}

export default App
