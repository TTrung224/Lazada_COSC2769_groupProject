import React, { useEffect, useState } from 'react';
import '../componentStyle.css';

function AtributeFilter({atribute, onCheck}){
    return(
        <div className='attribute-filters'>
            <h5>{atribute.name}</h5>
            <div className='attribute-filter'>
                {atribute.list.map(item => {
                    return (
                    <>
                        <input class="attibute-checkbox" type="checkbox" onClick={()=>onCheck(atribute.name, item)}></input>
                        <label>{item}</label><br />
                    </>
                    )
                })}
            </div>
            <hr />
        </div> 
    )
}

export default function ProductFilter({filters, setFilters}){
    const atributeList = [
        {
            name: "test1",
            list: ["test11", "test12", "test13"]
        },
        {
            name: "test2",
            list: ["test21", "test22", "test23"]
        },
        {
            name: "test3",
            list: ["test31", "test32", "test33"]
        },
    ]

    const [atributeFilterList, setAtributeFilterList] = useState([])

    function onCheck(atributeName, value){
        let existed = false
        atributeFilterList.forEach(each =>{
            if (each.name === atributeName && each.value === value){
                existed = true
            }
        })
        if(existed){
            setAtributeFilterList(atributeFilterList.filter(each => each.value !== value || (each.value === value && each.name !== atributeName)))
        }else{
            setAtributeFilterList([...atributeFilterList, {name: atributeName, value: value}])
        }
    }

    useEffect(() => {
        const minPriceInput = document.getElementById("min-price-input");
        const maxPriceInput = document.getElementById("max-price-input");

        let timeout1 = null;
        const handleMinPriceChange = (event) => {
            clearTimeout(timeout1);

            timeout1 = setTimeout(async function(){
                setFilters({...filters, page: 1, minPrice: minPriceInput.value})
            }, 300);
        }
        minPriceInput.addEventListener("keyup", handleMinPriceChange)
        
        let timeout2 = null;
        const handleMaxPriceChange = (event) => {
            clearTimeout(timeout2);

            timeout2 = setTimeout(async function(){
                setFilters({...filters, page: 1, maxPrice: maxPriceInput.value})
            }, 300);
        }
        maxPriceInput.addEventListener("keyup", handleMaxPriceChange)


        return () => {
            minPriceInput.removeEventListener('keyup', handleMinPriceChange);
            maxPriceInput.removeEventListener('keyup', handleMaxPriceChange);
        };
    }, [])

    return(
        <div className='product-filters'>
            <h5>Price</h5>
            <div className='price-filter'>
                <input type="number" class="form-control" id="min-price-input" placeholder="Min" min="0"></input>
                <nav> - </nav>
                <input type="number" class="form-control" id="max-price-input" placeholder="Max" min="0"></input>
                <i class="bi bi-funnel-fill price-filter-icon"></i>
            </div>
            <hr />
            <h5>Date Added</h5>
            <div className='date-filter'>
                <input type="date" class="form-control" id="min-date-input" placeholder="Min" onChange={(e)=>setFilters({...filters, page: 1, minDate: e.target.value})}></input>
                <nav> - </nav>
                <input type="date" class="form-control" id="max-date-input" placeholder="Max" onChange={(e)=>setFilters({...filters, page: 1, maxDate: e.target.value})}></input>
                <i class="bi bi-funnel-fill price-filter-icon"></i>
            </div>
            <hr />
            {atributeList.map(item => {
                return <AtributeFilter atribute={item} onCheck={onCheck}/>
            })}
        </div>
    )
}