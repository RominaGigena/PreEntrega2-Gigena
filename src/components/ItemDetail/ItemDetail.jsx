import {ItemCount} from '../ItemCount/ItemCount'

export const ItemDetail = ({item}) => {
    return (
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={'../img/${item.img}'} alt={`Imagen de ${item.nombre}`}/>
            </div>
            <div className='col-md-8'>
                <div className='card-body'>
                    <h5 className='card-title'>{item.nombre}{item.subtitulo}</h5>
                    <p className='card-text'>Marca: {item.marca}</p>
                    <p className='card-text'>Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                    <p className='card-text'>Stock: {item.stock}</p>
                    <ItemCount valInicial={1} stock={item.stock}/>
                    <button className='btn btn-secondary'>Finalizar compra</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
