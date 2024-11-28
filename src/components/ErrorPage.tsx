
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";




const ErrorPage = () => {
    const {changeToError} = useContext(SWContext)


    useEffect(() => {
        changeToError(true)
    }, []);




    return (
        <div className={'text-[2em] text-center tracking-[.2em] leading-normal'}>
            O-o-ops, something went wrong!
        </div>
    );
};

export default ErrorPage;