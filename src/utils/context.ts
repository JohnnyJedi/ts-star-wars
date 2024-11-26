import {createContext} from "react";
import {SWContextValue} from "./types";



export const SWContext = createContext<SWContextValue>({
    hero: 'Luke Skywalker',
    changeHero:(name:string) => console.log(name),
});

