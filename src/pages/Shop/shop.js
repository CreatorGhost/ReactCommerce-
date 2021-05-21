import React from 'react';
import  SHOP_DATA from './shop-data'
import PreviewItems from '../../components/Item-Preview/item-preview';

class Shop extends React.Component {

    constructor()
    {
        super();
        this.state={
            componets:SHOP_DATA
        }
    }
    render(){
        return(
        <div className="shop-page">
            {this.state.componets.map(({id,...otherData})=>
            {
                return(
                <PreviewItems 
                key={id} 
                {...otherData}>
                </PreviewItems>)
            })}
        </div>);
    }

}
export default Shop;