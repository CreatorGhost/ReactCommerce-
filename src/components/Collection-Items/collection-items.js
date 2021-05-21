import "./collection-items.scss"

const CollectionsItems=({ imageUrl ,name,price })=>{
    console.log(name+"  ___  "+imageUrl)
    return(
    <div className="collection-item" >
       <div
        className="image"
        style={{
        backgroundImage: `url(${imageUrl})`
      }}/>
        <div className="collection-footer">
            <span className="name"> {name}</span>
            <span className="price"> {price}</span>
        </div>
    </div>
    );
}

export default CollectionsItems;