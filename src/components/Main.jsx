import React from 'react';
import ItemList from './ItemList';
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';


const Main = () => {
  return (
    <div className="main">
        {/* item itens de artistas */}
        <ItemList title="Artistas" items={5} itemsArray={artistArray} path='/artists' idPath='/artist' />

        {/* item itens de musicas */}
        <ItemList title="Musicas" items={10} itemsArray={songsArray} path='/songs' />
    </div>
  )
}

export default Main