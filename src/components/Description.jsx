
import React from 'react';
const VDLD = ( {video}  ) => { 
 if (!video) {
     return <div> Loading .. . </div>
 }
 


const videoId = video.id.videoId;
const Url = 'https://www.youtube.com/embed/' + videoId;




    return (
        <div className='video-detail col-md-8' >
        <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={Url}> </iframe>
        </div>

         <div className='details'>
         <div> {video.snippet.title}  </div>
         <div> {video.snippet.description} </div>
         </div>
       </div> 
    ) ;

}


export default VDLD;