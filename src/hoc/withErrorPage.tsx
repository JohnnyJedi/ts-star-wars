import {characters, defaultHero} from "../utils/constants.ts";
import {useParams} from "react-router-dom";
import React, {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";
import ErrorPage from "../components/ErrorPage.tsx";


export const withErrorPage = <P extends object> (ComponentForSet:React.ComponentType<P>) => (props:P) => {
    const {heroId = defaultHero} = useParams();
    const {changeHero,changeToError} = useContext(SWContext)

    useEffect(() => {
        if (!characters[heroId]) {
            return;
        }
        changeToError(false)
        changeHero(heroId)
    }, [heroId]);
    return (characters[heroId]) ? (<ComponentForSet  heroId={heroId} {...props}/>) : <ErrorPage/>
}