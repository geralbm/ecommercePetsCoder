import React from "react";
import CardHome from "./CardHome";


const ItemList = ({data}) => {
    return (
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'justify'}}>
            {data.map((producto) => 
            <CardHome 
            key = {producto.id}
            producto={producto}
            />)}
        </div>
    )
}
export default ItemList;
