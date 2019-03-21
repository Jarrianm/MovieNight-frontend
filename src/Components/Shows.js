import React from 'react'

const Shows = (props) =>{
 
  console.log(props.show.poster_img)
   return (
       
     <div className="showCard">
       <img src={`http://image.tmdb.org/t/p/w500/${props.show.poster_img}`} alt=''/>
     </div>
   )
 }



export default Shows

