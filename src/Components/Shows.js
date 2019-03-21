import React from 'react'
import '../Shows.css'

const Shows = (props) =>{
 
  console.log(props.show.poster_img)
   return (
     
       <div className="tile">
       <img src={`http://image.tmdb.org/t/p/w500/${props.show.poster_img}`} alt=''/>
     </div> 
   
   
   )
 }



export default Shows

{/* <div className="showCard">
       <img src={`http://image.tmdb.org/t/p/w500/${props.show.poster_img}`} alt=''/>
     </div> */}