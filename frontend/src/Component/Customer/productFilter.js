import React, { useEffect, useState } from 'react';
import '../componentStyle.css';

function AtributeFilter({atribute, attributeName, onCheck}){
    return(
        <div className='attribute-filters'>
            <h5>{attributeName}</h5>
            <div className='attribute-filter'>
                {atribute.map(item => {
                    return (
                    <>
                        <input class="attibute-checkbox" type="checkbox" onClick={()=>onCheck(attributeName, item)}></input>
                        <label>{item}</label><br />
                    </>
                    )
                })}
            </div>
            <hr />
        </div> 
    )
}

export default function ProductFilter({filters, setFilters, attributeList}){
    const attributeNameList = Object.keys(attributeList)

    const [attributeFilterList, setAttributeFilterList] = useState([])

    function onCheck(attributeName, value){
        // let existed = false
        // attributeFilterList.forEach(each =>{
            // if (each.name === attributeName && each.value === value){
            //     existed = true
            // }
        // })
        if(attributeFilterList.includes(value)){
            // setAttributeFilterList(attributeFilterList.filter(each => each.value !== value || (each.value === value && each.name !== attributeName)))
            setAttributeFilterList(attributeFilterList.filter(each => each !== value))
        }else{            
            // setAtributeFilterList([...atributeFilterList, {name: atributeName, value: value}])
            setAttributeFilterList([...attributeFilterList, value])
        }
    }

    useEffect(()=>{
        console.log(attributeFilterList)
        setFilters({...filters, attributes: attributeFilterList})

    }, [attributeFilterList])

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
            <div className='price-filter'>
                <input type="date" class="form-control" id="min-date-input" placeholder="Min" onChange={(e)=>setFilters({...filters, page: 1, minDate: e.target.value})}></input>
                <nav> - </nav>
                <input type="date" class="form-control" id="max-date-input" placeholder="Max" onChange={(e)=>setFilters({...filters, page: 1, maxDate: e.target.value})}></input>
                <i class="bi bi-funnel-fill price-filter-icon"></i>
            </div>
            <hr />
            {attributeNameList.map(attributeName => {
                return <AtributeFilter atribute={attributeList[attributeName]} attributeName={attributeName} onCheck={onCheck}/>
            })}
        </div>
    )
}