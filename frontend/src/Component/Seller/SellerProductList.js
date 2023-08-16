export default function ProductList(){
    return(
        <>
        <div className="seller-product-list">
                <div className="seller-header-bar">
                    <button>Add more product</button>
                    <input type="search" placeholder='search for product'/>
                </div>
                <div className="product-item">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ACat_img.jpg&psig=AOvVaw3Uy-qjuM6Bc4Q15nU-9Fui&ust=1692170995050000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJCBs6uS3oADFQAAAAAdAAAAABAE"className="product-img"/>
                    <div>
                        <p>product name</p>
                        <p>product description</p>
                    </div>
                    <div>
                        <p>product prize</p>
                        <p>product category</p>
                    </div>
                    <div className="seller-item-button">
                        <button className="item-edit">Edit</button>
                        <button className="item-delete">Delete</button>
                    </div>
                </div>
        </div>
        </>
    )
}