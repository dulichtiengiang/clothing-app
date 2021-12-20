import React, { useState } from 'react';
import MenuItem from '../menu-item/menu-item.component';

import img_babydoll from '../../assets/images/img_babydoll.png';
import img_dam from '../../assets/images/img_dam.png';
import img_quanjean from '../../assets/images/img_quanjean.png';
import img_christmas from '../../assets/images/img_christmas.png';
import img_trending from '../../assets/images/img_trending.png';

const Directory = () => {
    const [state, setstate] = useState({
        sections: [
            {
                title: 'Baby Doll',
                size: 'large',
                imageUrl: img_babydoll,
            },
            {
                title: 'Áo Đầm',
                size: 'large',
                imageUrl: img_dam,
            },
            {
                title: 'Quần Jean',
                size: 'large',
                imageUrl: img_quanjean,
            },
            {
                title: 'Giáng Sinh',
                size: 'large',
                imageUrl: img_christmas,
            },
            {
                title: 'Xu hướng',
                size: 'large',
                imageUrl: img_trending,
            },
        ],
    });
    return (
        <div className="directory-menu">
            {state.sections.map((section, index) => (
                <MenuItem key={index} title={section.title} size={section.size} imageUrl={section.imageUrl} />
            ))}
        </div>
    );
};

export default Directory;
