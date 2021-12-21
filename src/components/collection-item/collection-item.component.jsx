import React from 'react';

const CollectionItem = (props) => {
    const { name, imageUrl, price } = props;
    return (
        <div className="collection-item">
            <div className="collection-item__image">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="collection-item__footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    );
};

export default CollectionItem;
