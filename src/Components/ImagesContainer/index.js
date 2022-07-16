import React from 'react'
import './ImagesContainer.css'
import bigPicture1 from '../../assets/images/image1.jpg'
import bigPicture2 from '../../assets/images/image-product-2.jpg'
import bigPicture3 from '../../assets/images/image-product-3.jpg'
import bigPicture4 from '../../assets/images/image-product-4.jpg'

import image1 from '../../assets/images/image-product-1-thumbnail.jpg';
import image2 from '../../assets/images/image-product-2-thumbnail.jpg';
import image3 from '../../assets/images/image-product-3-thumbnail.jpg';
import image4 from '../../assets/images/image-product-4-thumbnail.jpg';

function ImagesContainer({ children }) {
  return (
    <div className='Images__container'>
      <figure className='Big__container-mobile'>
        <img src={bigPicture1} alt='' className='Big__picture'/>
        <img src={bigPicture2} alt='' className='Big__picture'/>
        <img src={bigPicture3} alt='' className='Big__picture'/>
        <img src={bigPicture4} alt='' className='Big__picture'/>
        
      </figure>


      {/* display none */}
      <figure className='Thumbnail__container'>
        <img src={image1} alt='thumbnail' />
        <img src={image2} alt='thumbnail' />
        <img src={image3} alt='thumbnail' />
        <img src={image4} alt='thumbnail' />
      </figure>
    </div>
  )
}

export default ImagesContainer
