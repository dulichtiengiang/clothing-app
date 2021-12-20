import React from 'react';

const MenuItem = (props) => {
    const { title, imageUrl, subtitle, size } = props;
    return (
        <div className={`${size} menu-item`}>
            <div className="background-item" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">XEM NGAY</span>
            </div>
        </div>
    );
};

export default MenuItem;
