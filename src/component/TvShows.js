import React, {Fragment, useContext, useEffect, useState } from 'react'
import {AiFillPlayCircle,AiOutlineClose} from "react-icons/ai"
import { Container } from './NavBar'

import Tvtrailer from '../trailer/Tvtrailer'



const TvShows = () => {
    const imagePath = "https://image.tmdb.org/t/p/w500"
    const [showtv, setShowtv]=useState([])
    const [title,setTitle]= useState("")
    
    const {toggle,inputvalue}= useContext(Container)

    const [trailer,setTrailer]= useState(false)

    const tvCall = async()=>{
        const shown = inputvalue? "search": "discover"
        const api = await fetch(`https://api.themoviedb.org/3/${shown}/tv?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&query=${inputvalue}`)
        const data = await api.json()
       setShowtv(data.results)
       console.log(data.results)
    }

    useEffect(()=>{
        tvCall()
    },[inputvalue])
    const TvShowTitle = (movie)=>{
        setTitle(movie.name)
        setTrailer(!trailer)
    }
  return (
    
        <Fragment>
            <div className={toggle? "mainBgColor":"secondaryBgColor"}>
                <div className='movies-container'>
             
                {showtv.map(movie=>(
                    <div id={trailer?'container':"NoContainer"} key={movie.id}>
                        <div className='container-elem'>
                        <img src={movie.poster_path? `${imagePath}${movie.backdrop_path}`:""} onClick={()=>TvShowTitle(movie)} />
                        <AiFillPlayCircle className={trailer?'svg':"hide"} onClick={()=>TvShowTitle(movie)}/>
                        <h3 className={toggle?"darkTheme":"lightTheme"} id={trailer?"":"h33"} >{movie.name}</h3>
                        </div>
                    </div>
                ))}
            
            <AiOutlineClose id={trailer? "Nothing":"Exit1"} className={toggle?"darkTheme":"lightTheme"} onClick={()=>setTrailer(true)}/>
            {trailer?"":<Tvtrailer tvtrailer={title}/>}
                </div>
            </div>
        </Fragment>
      )
  
}


export default TvShows