import React from 'react';
import ItemList from './ItemList';

const Main = () => {
  return (
    <div className="main">
        {/* item itens de artistas */}
        <ItemList title="Artistas" items={5}/>

        {/* item itens de musicas */}
        <ItemList title="Musicas" items={10}/>
    </div>
  )
}

export default Main