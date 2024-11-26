import {Item} from "../utils/types";
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

const navStyle = `bg-red-color  border-2 rounded-[5px] px-3 py-2 
           cursor-pointer hover:text-white hover:bg-red-500`

interface Props {
    item: Item
}

const NavItem = ({item}: Props) => {
    const {hero} = useContext(SWContext)


    return (
        <NavLink to={`/${item.path}/${hero}`}
                 className={({isActive}) => isActive ? `${navStyle} border-white` : `${navStyle} border-black`}>
            {item.title}
        </NavLink>

    );
};

export default NavItem;
