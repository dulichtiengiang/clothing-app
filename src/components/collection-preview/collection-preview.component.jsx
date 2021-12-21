import React from 'react';
//! comps
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = (props) => {
    const { title, items } = props;
    const size = 4;
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.slice(0, size).map((item) => (
                    <CollectionItem key={item.id} name={item.name} imageUrl={item.imageUrl} price={item.price} />
                ))}
            </div>
        </div>
    );
};

export default CollectionPreview;
