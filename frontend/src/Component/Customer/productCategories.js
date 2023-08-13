import React from 'react';
import {Link, Navigate} from 'react-router-dom'
import categoryTest from "../../Asset/categoryTest.png";
import '../componentStyle.css';

function Category({categoryName}){
    return(
        <div className='category card'>
            <Link to={"/#"}>
                <div class="card">
                    <img src={categoryTest} class="card-img-top" alt="..."></img>
                    <p class="category-name">{categoryName}</p>
                </div>
            </Link>
        </div> 
    )
}

function CategoryGroup({categoryList}){
    return(
        <div className='category-group row justify-content-center'>
            {categoryList.map(item => <Category categoryName={item}/>)}
        </div> 
    )
}

export default function ProductCategories(){
    const categoryList = ["test1", "test2", "test3", "test4", "test5", "test6", "test7"]

    return(
        <div className='product-categories'>
            <h5>Categories</h5>
            <div id="carouselCategory" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <CategoryGroup categoryList={categoryList}/>
                    </div>
                    <div class="carousel-item">
                        <CategoryGroup categoryList={categoryList}/>
                    </div>
                </div>
                <button class="carousel-arrow carousel-control-prev" type="button" data-bs-target="#carouselCategory" data-bs-slide="prev">
                    <i class="bi bi-caret-left-fill"></i>
                </button>
                <button class="carousel-arrow carousel-control-next" type="button" data-bs-target="#carouselCategory" data-bs-slide="next">
                    <i class="bi bi-caret-right-fill"></i>
                </button>
            </div>
        </div>
    )
}