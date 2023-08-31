import { Link, defer, useLoaderData } from 'react-router-dom';
import { useState, useRef, useEffect, useContext } from 'react';
import { axiosSetting, backendUrl } from '../../Context/constants';
import Loader from '../Shared/loader';
import "../componentStyle.css"
import { getUserProducts } from '../../Service/ProductAPI';
import { AuthContext } from '../../Context/loginSessionContext';


async function loadProducts(user) {
    console.log(user)
    const products = await getUserProducts(user._id)
    if (products !== null) {
        return products
    }else {return []}

}

export default function SellerProductList() {
    const { authState: { user } } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [minDate, setMinDate] = useState("")
    const [maxDate, setMaxDate] = useState("")

    useEffect(() => {
        loadProducts(user).then(p => {
            setProducts(p.data)
        }).finally(setIsLoading(false))
    }, [])


    const handleDelete = (id) => {
        // setProducts(products => products.filter(product => product._id !== id))
    }
    function handleSearch(list) {

        if (search.toLowerCase() === "") {
            return list
        }
        return list.filter(p => p.name.toLowerCase().includes(search))
    }

    function handlePriceFilter(list) {
        if (minPrice == "" && maxPrice == "") {
            return list
        }
        return list.filter(p => p.price >= Number.parseInt(minPrice) && p.price <= Number.parseInt(maxPrice))
    }

    function handleDateFilter(list) {
        if (minDate === "" && maxDate === "") {
            return list
        }
        try {
            const min = new Date(minDate)
            const max = new Date(maxDate)

            return list.filter(p => {
                const date = new Date(p.createdAt)
                if (isNaN(min)) {
                    return date <= max
                }

                if (isNaN(max)) {
                    return date >= min
                }

                return date >= min && date <= max
            })
        } catch (error) {
            return list
        }
    }
    const [currentSort, setCurrentSort] = useState("date")
    function handleSort(list) {
        if (currentSort === "name") {
            const newProducts = list.sort((a, b) => a.name > b.name ? 1 : -1)
            return newProducts
        } else if (currentSort === "price") {
            const newProducts = list.sort((a, b) => a.prize < b.prize ? 1 : -1)
            return newProducts
        } else if (currentSort === "date") {
            const newProducts = list.sort((a, b) => {
                const date1 = new Date(a.createdAt)
                const date2 = new Date(b.createdAt)
                if (date1 > date2) {
                    return 1
                } else {
                    return -1
                }
            })
            return list
        } else {
            return list
        }
    }


    return (
        <div className='seller-product-container'>
            {isLoading ? <Loader /> : <></>}
            <div className="mx-4">
                <div className="seller-header-bar rounded-4">
                    <Link className='btn btn-primary me-2' to="/seller/product/addproduct">Add Product</Link>
                    <label for="seller-sort"><b>Sort by:</b></label>
                    <select id="seller sort" className='seller-select-sort' onChange={(e) => {
                        setCurrentSort(e.target.value)
                    }}>
                        <option value="date">Added date</option>
                        <option value="name">Name</option>
                        <option value="price">Price</option>
                    </select>
                    <input type="text" placeholder='search by name' onChange={(e) => setSearch(e.target.value)} className='product-name-search' />
                    <div className='seller-filter'>
                        <p><b>Price:</b></p>
                        <input type="number" placeholder='Min price' onChange={(e => setMinPrice(e.target.value))} />
                        <input type="number" placeholder='Max price' onChange={(e => setMaxPrice(e.target.value))} />
                    </div>
                    <div className='seller-filter'>
                        <p><b>Date:</b></p>
                        <input type="date" placeholder='Min date' onChange={(e => setMinDate(e.target.value))} />
                        <input type="date" placeholder='Max date' onChange={(e => setMaxDate(e.target.value))} />
                    </div>
                    {/*  */}
                </div>

                <div className="container ">
                    {handleSort(handleDateFilter(handlePriceFilter(handleSearch(products))))
                        .map(p => {
                            const createdDate = new Date(p.createdAt)
                            return (
                                <div className="row rounded-3 border my-3 py-2 shadow" key={p._id}>
                                    <div className="col-lg-3">
                                        <img src={`${backendUrl}/image/${p.imgName}`} className="product-img mx-auto d-block img-fluid" alt='product img' />
                                    </div>

                                    <div className="col-lg-6 text-lg-start text-center  my-auto">
                                        <h2 ><b>{p.name}</b></h2>
                                        <h4><b>{p.price} VND</b></h4>
                                        <p className='fs-6 mb-0'>Category: <b>{p.category.name}</b></p>
                                        <p className='fs-6 mb-2'>Added Date: <b>{createdDate.toString()}</b></p>
                                    </div>
                                    <div className="col-lg-3 my-auto px-5">
                                        <Link className="btn btn-primary d-block mb-2" to={`/seller/product/edit/${p._id}`}><b>Edit</b></Link>
                                        <button className="btn btn-danger d-block w-100" type="button" onClick={() => handleDelete(p._id)}><b>Delete</b></button>
                                    </div>
                                </div>
                            )

                        })}
                </div>

            </div>
        </div>
    )
}