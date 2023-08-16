export default function ProductList(){
    return(
        <div className='seller-product-container'>
        <div className="seller-product-list">
                <div className="seller-header-bar">
                    <button>Add more product</button>
                    <input type="search" placeholder='search for product'/>
                </div>
                <div className="product-item">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180"className="product-img"/>
                    <div className="product-item-middle">
                        <p>product name</p>
                        <p>product description</p>
                    </div>
                    <div className="product-item-right">
                        <p>product prize</p>
                        <p>product category</p>
                    </div>
                    <div className="seller-item-button">
                        <button className="item-edit">Edit</button>
                        <button className="item-delete">Delete</button>
                    </div>
                </div>
        </div>
        </div>
    )
}