import React from 'react';
import { useNavigate } from 'react-router-dom';

const MenuItem = (props) => {
    const { title, size, imageUrl, linkUrl, subtitle, location } = props;
    const navigate = useNavigate();

    return (
        <div className={`${size} menu-item`} onClick={() => navigate(`${location.pathname}${linkUrl}`)}>
            <div className="background-item" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">XEM NGAY</span>
            </div>
        </div>
    );
};

export default MenuItem;
