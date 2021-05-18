import React from 'react';
import './menu_items.scss'
export const MenuItem=({ title ,imageUrl,size})=>{
    console.log(imageUrl)
    return(
        <div className={`${size} menu-item`}>
        <div
          className='background-image'
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>);
}