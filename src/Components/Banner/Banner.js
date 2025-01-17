import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { imageUrl, API_KEY } from '../../constants/constants'


function Banner() {
  const [movie, setMovie] = useState()
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((res)=>{
      setMovie(res.data.results[0])
    })
  },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ''})`}}>
      <div className='content'>
        <h1 className='title'>{movie ? movie.name : ""}</h1>
        <div className='banner-buttons'>
            <button className='button'>Play</button>
            <button className='button'>My list</button>
        </div>
        <h1 className='discription'>{movie ? movie.overview : ""}</h1>
        
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
