import React from 'react'
import SingleItem from './SingleItem.jsx'
import { Link } from 'react-router-dom'
import { artistArray } from '../assets/database/artists.js'
const ItemList = ( { title, items, itemsArray, path, idPath} ) => {

  return (
    <div className="item-list">
            <div className="item-list__header">
              <h2>{title} populares</h2>
              <Link to={path} className="item-list__link" >
                Mostrar tudo
              </Link>
            </div>
    
            <div className="item-list__container">
            {itemsArray
            .filter((currentValue, index) => index < items)
            .map((currObj, index) => (
            <SingleItem 
            // id={currObj.id} 
            // name={currObj.name} 
            // image={currObj.image} 
            idPath={idPath}
            {...currObj}
            key={`${title}-${index}`}
            />
            ))}

            </div>
          </div>
  )
}

export default ItemList