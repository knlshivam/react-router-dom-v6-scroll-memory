import { yScrollContext } from "../components/yScroll";
import { CustomLink } from "../components/customLink";
import { useLocation } from "react-router-dom";
import { useContext } from "react";


export const Navbar = () => {
    const {yScroll, setYscroll} = useContext(yScrollContext)
    const location = useLocation()

    return(
        <div className="navbar-main">
            <div className="navbar-item"><CustomLink to= {"/"} state= {{backward: {key: location.key, yscroll: yScroll}}}>page1</CustomLink></div>
            <div className="navbar-item"><CustomLink to= {"page2"} state= {{backward: {key: location.key, yscroll: yScroll}}}>page2</CustomLink></div>
            <div className="navbar-item"><CustomLink to= {"page3"} state= {{backward: {key: location.key, yscroll: yScroll}}}>page3</CustomLink></div>
            <div className="navbar-item"><CustomLink to= {"page4"} state= {{backward: {key: location.key, yscroll: yScroll}}}>page4</CustomLink></div>
        </div>
    )
}