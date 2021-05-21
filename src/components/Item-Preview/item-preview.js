import React from 'react';
import './item-preview.scss';
import CollectionsItems from "../Collection-Items/collection-items"
const PreviewItems =({ title,items })=>{
    //console.log(title, items);
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
             {items
             .filter((item,idx)=>idx<4)
             .map(({id,...otherItems})=>
             (<CollectionsItems key={id}{...otherItems}/>)
             )}
             </div>
        </div>
    )

}

export default PreviewItems;