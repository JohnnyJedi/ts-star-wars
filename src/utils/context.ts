import {createContext} from "react";
import {SWContextValue} from "./types";



export const SWContext = createContext<SWContextValue>({
    heroName: 'Luke Skywalker',
    changeName:(name:string) => console.log(name),
});

