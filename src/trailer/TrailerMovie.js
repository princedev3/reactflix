import React, { Fragment,useEffect,useState } from 'react'
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import "../styles/MovieTrailer.css"

const TrailerMovie = ({movieTrailers}) => {
    const [video, setVideo] = useState("");
    const [videoURL, setVideoURL] =useState("");
    
    function handleSearch() {
        setVideo(movieTrailers)
        movieTrailer(video).then((res) => {
        setVideoURL(res);
        });
    }

   useEffect(()=>{
    handleSearch()
   },[videoURL])

  return (
    <Fragment>
    <div className='Container'>

    </div>
    <div className='player'>
    <ReactPlayer url={videoURL} controls={true}/>
    </div>
    </Fragment>
  )
}

export default TrailerMovie