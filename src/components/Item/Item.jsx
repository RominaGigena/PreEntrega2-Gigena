import React from 'react';

export const Item = ({item}) => {
    return (
        <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{item.nombre}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{item.subtitulo}</h6>
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div> 
    )
}

export default Item;
