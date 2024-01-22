import React from 'react'
import Swal from 'sweetalert2';
  
const ImageCard = ({image}) => {

  const viewImage = (img, name, ancho ,alto) => {
    console.log(image)
    Swal.fire({
      imageUrl: img,
      imageWidth: ancho,
      imageHeight: alto,
      imageAlt: name,
    })
  }

  return (
    <div className="card-image">
      <div className="card-image-image">
        {/* <a href={image.largeImageURL} rel="noopener noreferrer" target="_blank"> <img className="card-image-img" src={image.largeImageURL} alt={image.tags}/></a> */}
        <img className="card-image-img" src={image.largeImageURL} alt={image.tags} onClick={() => viewImage(image.largeImageURL, image.tags, image.imageWidth, image.imageHeight )}/>
      </div>
      <div className="content-tags">
        <p>{image.tags} </p>
        <span>♥ { image.likes }</span>
      </div>   
    </div>
  )
}

export default ImageCard
