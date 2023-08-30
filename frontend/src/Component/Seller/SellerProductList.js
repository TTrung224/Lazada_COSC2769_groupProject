import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

var productList = [
    { _id: "1", name: "fppple", img: "https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180", description: "eifjghsfuighuifghfdffgrgergwerg", prize: 7000000, category: "fruit,red", addedDate: "1/1/2012" },
    { _id: "2", name: "cppple", img: "https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180", description: "eifjghsfuighuifghfdffgrgergwerg", prize: 8000000, category: "fruit,red", addedDate: "1/2/2012" },
    { _id: "3", name: "dppple", img: "https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180", description: "eifjghsfuighuifghfdffgrgergwerg", prize: 5000000, category: "fruit,red", addedDate: "1/3/2012" },
    { _id: "4", name: "appple", img: "https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180", description: "eifjghsfuighuifghfdffgrgergwerg", prize: 4000000, category: "fruit,red", addedDate: "1/4/2012" },
    { _id: "5", name: "eppple", img: "https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180", description: "eifjghsfuighuifghfdffgrgergwerg", prize: 9000000, category: "fruit,red", addedDate: "1/5/2012" },
    { _id: "6", name: "ippple", img: "https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180", description: "eifjghsfuighuifghfdffgrgergwerg", prize: 2000000, category: "fruit,red", addedDate: "1/6/2012" },
    { _id: "7", name: "dppple", img: "https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180", description: "eifjghsfuighuifghfdffgrgergwerg", prize: 1000000, category: "fruit,red", addedDate: "1/7/2012" },
    { _id: "8", name: "wppple2", img: "https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180", description: "eifjghsfuighuifghfdffgrgergwerg", prize: 3000000, category: "fruit,red", addedDate: "1/1/2016" },
    { _id: "9", name: "wppple", img: "https://tse4.mm.bing.net/th?id=OIP.YwA6xGkFItqFcdN8eHm-aAAAAA&pid=Api&P=0&h=180", description: "eifjghsfuighuifghfdffgrgergwerg", prize: 6000000, category: "fruit,red", addedDate: "1/1/2015" }
]

export default function SellerProductList() {
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProduct] = useState(productList)
    const [search, setSearch] = useState("")
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [minDate, setMinDate] = useState("")
    const [maxDate, setMaxDate] = useState("")


    const handleDelete = (id) => {
        setProduct(products => products.filter(product => product._id !== id))
    }
    function handleSearch(product) {

        if (search.toLowerCase() === "") {
            return product
        } else if (product.name?.toLowerCase().includes(search)) {
            return product
        }
    }

    function handlePriceFilter(product) {
        if (product.prize >= Number.parseInt(minPrice) && product.prize <= Number.parseInt(maxPrice)) {
            return product
        } else if (minPrice == "" && maxPrice == "") {
            return product
        }
    }

    function handleDateFilter(product) {
        if (product.addedDate >= minDate && product.addedDate <= maxDate) {
            return product
        } else if (minDate === "" && maxDate === "") {
            return product
        }
    }
    var currentSort = useRef("")
    function handleSort() {
        if (currentSort.current.value === "name") {
            const newProducts = [...products].sort((a, b) => a.name > b.name ? 1 : -1)
            setProduct(newProducts)
        } else if (currentSort.current.value === "price") {
            const newProducts = [...products].sort((a, b) => a.prize > b.prize ? 1 : -1)
            setProduct(newProducts)
        } else if (currentSort.current.value === "date") {
            const newProducts = [...products].sort((a, b) => a.addedDate.split('/').reverse().join().localeCompare(b.addedDate.split('/').reverse().join()))
            setProduct(newProducts)
        } else {
            setProduct(productList)
        }
    }


    return (
        <div className='seller-product-container'>
            <div className="mx-4">
                <div className="seller-header-bar">
                    <Link className='btn btn-primary me-2' to="/seller/product/addproduct">Add Product</Link>
                    <label for="seller-sort"><b>Sort by:</b></label>
                    <select id="seller sort" className='seller-select-sort' ref={currentSort} onChange={() => handleSort()}>
                        <option value="null">None</option>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                        <option value="date">Added date</option>
                    </select>
                    <input type="text" placeholder='search by name' onChange={(e) => setSearch(e.target.value)} className='product-name-search' />
                    <div className='seller-filter'>
                        <p><b>Price:</b></p>
                        <input type="number" placeholder='Min price' onChange={(e => setMinPrice(e.target.value))} />
                        <input type="number" placeholder='Max price' onChange={(e => setMaxPrice(e.target.value))} />
                    </div>
                    <div className='seller-filter'>
                        <p><b>Date:</b></p>
                        <input type="number" placeholder='Min date' onChange={(e => setMinDate(e.target.value))} />
                        <input type="number" placeholder='Max date' onChange={(e => setMaxDate(e.target.value))} />
                    </div>
                    {/*  */}
                </div>

                <div className="container">
                    {products.filter(product => handleSearch(product))
                        .filter(product => handlePriceFilter(product))
                        .filter(product => handleDateFilter(product)).map(product => {
                            return (
                                <div className="row my-3 py-2 shadow" key={product._id}>
                                    <div className="col-lg-3">
                                        <img src={product.img} className="product-img mx-auto d-block img-fluid" alt='product img' />
                                    </div>

                                    <div className="col-lg-6 text-lg-start text-center  my-auto">
                                        <h2 ><b>{product.name}</b></h2>
                                        <h4><b>{product.prize} VND</b></h4>
                                        <p className='fs-6 mb-0'>Category: <b>{product.category}</b></p>
                                        <p className='fs-6 mb-2'>Added Date: <b>{product.addedDate}</b></p>
                                    </div>
                                    <div className="col-lg-3 my-auto px-5">
                                        <Link className="btn btn-primary d-block mb-2" to={`/seller/product/edit/${product._id}`}><b>Edit</b></Link>
                                        <button className="btn btn-danger d-block w-100" type="button" onClick={() => handleDelete(product._id)}><b>Delete</b></button>
                                    </div>
                                </div>
                            )

                        })}
                </div>

            </div>
        </div>
    )
}