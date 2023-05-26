import React, { Fragment,  useState } from 'react'
import {FaSearch} from "react-icons/fa"
import "../styles/Navbar.css"
import { Routes,Route, NavLink } from 'react-router-dom'
import Movies from './Movies'
import Pricing from './Pricing'
import Trending from './Trending'
import TvShows from './TvShows'

export const Container = React.createContext()
const NavBar = () => {
    const[toggle,setToggle] = useState(true)
    const [inputvalue,setInputvalue]= useState("")
  return (
      <Fragment>
        <Container.Provider value={{toggle,inputvalue}}>
        <nav className={toggle? "":"navBarColor"}>
            <div className='nav-options'>
                <NavLink to={"/"}>
                <h1 id={toggle?"":"heading"}>REACTFLIX</h1>
                </NavLink>
                <NavLink to={"/"}>
                <span id={toggle?"Movies":"MoviesLight"}>Movies</span>
                </NavLink>
                <NavLink to={"/tvshows"}>

                <span id={toggle?"Movies":"MoviesLight"}>Tv Shows</span>
                </NavLink>
                <NavLink to={"/trending"}>

                <span id={toggle?"Movies":"MoviesLight"}>Trending</span>
                </NavLink>
                <NavLink to={"/pricing"}>

                <span id={toggle?"Movies":"MoviesLight"}>Pricing</span>
                </NavLink>
            </div>
            <div className='input-group'>
                <input type='txt' placeholder='search movie' onChange={(e)=>setInputvalue(e.target.value)}/>
                <FaSearch />
                <div id='Color-switcher' onClick={()=>setToggle(!toggle)}>
                    <div id={toggle?"Color-switcher-mover":'Color-switcher-moved'}></div>
                </div>
            </div>
        </nav>
        <Routes>
            <Route path='/' element={<Movies/>}/>
            <Route path='/tvshows' element={<TvShows/>}/>
            <Route path='/trending' element={<Trending/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
        </Routes>
    </Container.Provider>
    </Fragment>
  )
}
//{}[]
export default NavBar