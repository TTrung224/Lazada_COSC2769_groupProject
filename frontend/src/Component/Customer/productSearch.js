import React from 'react';
import '../componentStyle.css';

export default function ProductSearchBar({filters, setFilters}){
    return(
        <div className="search-div">
            <input class="product-search form-control" id="product-search-input" type="text" placeholder="Search" aria-label="default input example"></input>
            <div class="search-icon-div">
                <i className="bi bi-search seach-icon"></i>
            </div>
        </div>
    )
}