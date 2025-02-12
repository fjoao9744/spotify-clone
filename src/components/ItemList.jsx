import React from 'react'
import SingleItem from './SingleItem.jsx'
import { artistArray } from '../assets/database/artists.js'
const ItemList = ( { title, items } ) => {


  return (
    <div className="item-list">
            <div className="item-list__header">
              <h2>{title} populares</h2>
              <a className="item-list__link" href="/">
                Mostrar tudo
              </a>
            </div>
    
            <div className="item-list__container">
            {artistArray
            .filter((currentValue, index) => index < items)
            .map((currObj, index) => (
            <SingleItem 
            id={currObj.id} 
            name={currObj.name} 
            image={currObj.image} 
            key={`${title}-${index}`} />
            ))}

            </div>
          </div>
  )
}

export default ItemList