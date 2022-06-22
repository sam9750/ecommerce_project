import React, { useEffect, Redirect } from 'react'
import Item from './Item'

function ItemsPage({items, user, authorized}) {

    if(!authorized) {
        return <Redirect to="/" />
    }
    return <div>If</div>

    useEffect(() => {

    }, [])

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




export default ItemsPage;
