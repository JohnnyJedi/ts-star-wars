import {characters, defaultHero, starWarsInfo} from "../utils/constants.ts";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "./ErrorPage.tsx";
import {useParams} from "react-router-dom";


const StarWars = () => {
    const {heroId = defaultHero} = useParams();

    const {changeHero} = useContext(SWContext)

    useEffect(() => {
        if(!characters[heroId]){
            return;
        }
        changeHero(heroId)
    }, [heroId]);

    return characters[heroId] ? (
        <div className={'text-[2em] text-justify tracking-[.2em] leading-normal'}>
            {starWarsInfo}
        </div>
    ) : <ErrorPage/>;
};

export default StarWars;