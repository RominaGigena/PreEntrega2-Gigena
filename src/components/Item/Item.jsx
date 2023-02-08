import React from 'react';

export const Item = ({item}) => {
    return (
      <div className="card" style={{width: '18rem'}}>
      <img src={`../img/${item.img}`} className="card-img-top" alt={"producto"} />
      <div className="card-body">
        <h5 className="card-title">{item.nombre}</h5>
        <p className="card-text">{item.subtitulo}</p>
        <p className="card-text">$ {new Intl.NumberFormat('de-DE').format (item.precio)}</p>
        <a href="#" className="btn btn-primary">Comprar</a>
      </div>
    </div> 
    )
}

export default Item;
