import './App.css';
import {
  Route,
  Routes
} from "react-router-dom";
import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { yScrollContext } from "./components/yScroll";
import { history } from "./components/customRouter";
import { Page1 } from "./screens/page1";
import { Page2 } from "./screens/page2";
import { Page3 } from "./screens/page3";
import { Page4 } from "./screens/page4";
import { Navbar } from "./screens/navbar";

function App() {
  const {yScroll, setYscroll} = useContext(yScrollContext)
  const location = useLocation()
  const [currHist, setCurrHist] =useState({
    action: "",
    location: {},
    currentKey: ""
  })

    useEffect(()=>{
      sessionStorage.setItem('key',location.key)
    }, [location])

    useState(()=>{
      const scrolled = () => setYscroll(prev=>window.scrollY )
      window.addEventListener('scroll', scrolled)
      return() => {
        window.removeEventListener('scroll', scrolled)
      } 
    },[])
  
    useEffect(()=>{
      return () => {
        sessionStorage.setItem('yvalue',JSON.stringify(yScroll))
      }
    }, [yScroll])

  useEffect(() => { 
    return history.listen(({ location, action }) => {
      if(action === "POP"){
        const fwdKey = sessionStorage.getItem('key')
        const yscroll = sessionStorage.getItem('yvalue')
        location = {
                          ...location,
                          state: {
                                  forward:{
                                    key: fwdKey,
                                    yscroll: yscroll
                                  },
                                  ...location.state
                                }
                          }
      }
      setCurrHist({
        ...currHist,
        action: action,
        location: {
          ...location
        },
        currentKey: location.key        
      })
      console.log(action, location.pathname, location.state, location.key);
    });

 }, [])


  useLayoutEffect(()=>{
    const {action, location, currentKey} = currHist
    if(action && action === "POP"){
      if(location.state.hasOwnProperty('forward')){
          if(currentKey === location.state.forward.key){
              console.log(`forward ${location.state.forward.yscroll}`)
          }
      }else if(location.state.hasOwnProperty('backward')){
          if(currentKey === location.state.backward.key){
              console.log(`backward ${location.state.backward.yscroll}`)
              window.scrollTo(0, parseFloat(location.state.backward.yscroll))
          }
      }else{
          window.scrollTo(0, 0)
      }
  }else{
      window.scrollTo(0, 0)
  }
  console.log(location)
  }, [currHist])

  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
        <Route path="/page3" element={<Page3 />}></Route>
        <Route path="/page4" element={<Page4 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
