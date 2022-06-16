import React from 'react'
import Item from './Item'

function ItemsContainer({items}) {

    return (
        <div >
            <p> Hello! </p>
            <p> All Items</p>
        
            <ul className="cards" style={{ display: 'flex' }}>
                {items.map(item => <Item key={Item.id} Item={Item}/>)}
            </ul>
        </div>
    );
}

export default ItemsContainer;
