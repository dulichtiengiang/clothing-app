import React, { useState } from 'react';
//! data
import SHOP_DATA from './shop.data.js';
//! comps
import CollectionPreview from '../../components/collection-preview/collection-preview.component'


const ShopPage = () => {
    const [data, setData] = useState({ collections: SHOP_DATA });
    const { collections } = data;
    return <div className="shop-page">
        {collections.map(collection => <CollectionPreview key={collection.id} title={collection.title} items={collection.items}/>)}
    </div>;
};

export default ShopPage;
