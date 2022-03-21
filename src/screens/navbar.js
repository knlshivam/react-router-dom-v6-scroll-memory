import { yScrollContext } from "../components/yScroll";
import { useLocation, Link } from "react-router-dom";
import { useContext } from "react";

export const Navbar = () => {
    const {yScroll, setYscroll} = useContext(yScrollContext)
    const location = useLocation()

    return(
        <div className="navbar-main">
            <div className="navbar-item"><Link to= {"/"} state= {{backward: {key: location.key, yscroll: yScroll}}}>page1</Link></div>
            <div className="navbar-item"><Link to= {"page2"} state= {{backward: {key: location.key, yscroll: yScroll}}}>page2</Link></div>
            <div className="navbar-item"><Link to= {"page3"} state= {{backward: {key: location.key, yscroll: yScroll}}}>page3</Link></div>
            <div className="navbar-item"><Link to= {"page4"} state= {{backward: {key: location.key, yscroll: yScroll}}}>page4</Link></div>
        </div>
    )
}
