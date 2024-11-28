import {createContext} from "react";
import {SWContextValue} from "./types";



export const SWContext = createContext<SWContextValue>({
    hero: 'Luke Skywalker',
    changeHero:(name:string) => console.log(name),
    error:false,
    changeToError:(error)=>console.log(error),
});

