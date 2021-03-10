import React from 'react'

//image needs an URL
const Album = (props) => {
    return (
      <div className="album">

        <a className="url-link" href={props.url}>
          <img className="album-image" src={props.imgsrc}></img>
        </a>
        <div className="album-information-container">
          <h3 className="album-name">{props.name}</h3>
          <a className="url-link" href={props.urlArtist}>
            {props.artist}
          </a>
        </div>
        
        
        
      </div>
    );
  }

  export default Album