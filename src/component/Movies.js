import React, { Fragment, useContext, useEffect, useState } from 'react'
import img from "../../src/no-image.png"
import {AiFillPlayCircle,AiOutlineClose} from "react-icons/ai"
import {Container} from "./NavBar"
import "../styles/Movies.css"
import TrailerMovie from '../trailer/TrailerMovie'

const Movies = () => {

    const {toggle,inputvalue} =useContext(Container)
    const [title,setTitle]= useState("")
    const [trailer,setTrailer] =useState(false)

    const imagePath = "https://image.tmdb.org/t/p/w500"
    const[movieData,setMovieData] =useState([])

    const MovieCall = async()=>{
        const shown = inputvalue?"search":"discover"
        const api = await fetch(`https://api.themoviedb.org/3/${shown}/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&query=${inputvalue}`)
        const data = await api.json()
        setMovieData(data.results)
       
    }
    useEffect(()=>{
        MovieCall()
    },[inputvalue])

    const movieTrailer = (movie)=>{
        setTitle(movie.title)
        setTrailer(!trailer)
    }
  return (
    <Fragment>
        <div className={toggle? "mainBgColor":"secondaryBgColor"}>
            <div className='movies-container' id={trailer?'container':"NoContainer"} >
         
            {movieData.map(movie=>(
                <div id='container' key={movie.id}>
                    <div className='container-elem'>
                    <img src={movie.poster_path? `${imagePath}${movie.backdrop_path}`:""} onClick={()=>movieTrailer(movie)}/>
                    <AiFillPlayCircle className={trailer?'svg':"hide"} onClick={()=>movieTrailer(movie)}/>
                    <h3 className={toggle?"darkTheme":"lightTheme"}>{movie.title}</h3>
                    </div>
                </div>
            ))}
             <AiOutlineClose id={trailer? "Nothing":"Exit1"} className={toggle?"darkTheme":"lightTheme"} onClick={()=>setTrailer(true)}/>
            </div>
                {trailer?"":<TrailerMovie movieTrailers={title}/>}
        </div>
    </Fragment>
  )
}


export default Movies