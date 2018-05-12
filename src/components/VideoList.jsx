import React from 'react';
import VDLI from './VideoListItem.jsx'




const VDL = (props) => {
  const videoWithLI =  props.videos.map( vid => { return <VDLI onVideoSelect= {props.onVideoSelect} key={vid.etag} vid={vid}/>   } ); 


 return <ul className='col-md-6 list-group' > {videoWithLI} </ul>

}

export default VDL;