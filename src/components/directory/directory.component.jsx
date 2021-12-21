import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import MenuItem from '../menu-item/menu-item.component';

import img_babydoll from '../../assets/images/img_babydoll.png';
import img_dam from '../../assets/images/img_dam.png';
import img_quanjean from '../../assets/images/img_quanjean.png';
import img_christmas from '../../assets/images/img_christmas.png';
import img_trending from '../../assets/images/img_trending.png';

const Directory = () => {
    const location = useLocation();
    const [data, setData] = useState({
        sections: [
            {
                title: 'Baby Doll',
                size: 'large',
                imageUrl: img_babydoll,
                linkUrl: 'babydoll',
            },
            {
                title: 'Áo Đầm',
                size: 'large',
                imageUrl: img_dam,
                linkUrl: 'aodam',
            },
            {
                title: 'Quần Jean',
                size: 'large',
                imageUrl: img_quanjean,
                linkUrl: 'quanjean',
            },
            {
                title: 'Giáng Sinh',
                size: 'large',
                imageUrl: img_christmas,
                linkUrl: 'giangsinh',
            },
            {
                title: 'Xu hướng',
                size: 'large',
                imageUrl: img_trending,
                linkUrl: 'xuhuong',
            },
        ],
    });
    const { sections } = data;
    return (
        <div className="directory-menu">
            {sections.map((section, index) => (
                <MenuItem
                    key={index}
                    title={section.title}
                    size={section.size}
                    imageUrl={section.imageUrl}
                    linkUrl={section.linkUrl}
                    location={location}
                />
            ))}
        </div>
    );
};

export default Directory;
