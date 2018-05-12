import React from 'react';


const VDLI =  ({vid , onVideoSelect}) => { 
 const ImgURL = vid.snippet.thumbnails.default.url;


 return (
        
        
        <li onClick={()=> onVideoSelect(vid)}  className='list-group-item'> 
      <div className=" video-list media" > 
      <div className ='media-left'>
       <img className='media-object' src={ImgURL} />
       </div>

      <div className="media-body">
      <div className = 'media-heading' > { vid.snippet.title}  </div>
      </div>
     </div> 
     
     </li>
      ) ; }
     
export  default VDLI;