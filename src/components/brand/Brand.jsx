import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css'

const Brand = () => {
  let brandImgs = [
    google, slack, atlassian, dropbox, shopify
  ]

  return (
    <div className='brand section__padding'>
      {
        brandImgs.map((brandImg, id) => {
          return <div className='brand__img' id={id}>
            <img src={brandImg} alt='brandImg'/>
          </div>
        })
      }
    </div>
  )
}

export default Brand