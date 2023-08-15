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

export default function ProductFilter(){
    const list = ["test1", "test2", "test3"]
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
        console.log(atributeFilterList)
    }, [atributeFilterList]);

    return(
        <div className='product-filters'>
            <h5>Price</h5>
            <div className='price-filter'>
                <input type="number" class="form-control" id="min-price-input" placeholder="Min"></input>
                <nav> - </nav>
                <input type="number" class="form-control" id="min-price-input" placeholder="Max"></input>
                <i class="bi bi-funnel-fill price-filter-icon"></i>
            </div>
            <hr />
            {atributeList.map(item => {
                return <AtributeFilter atribute={item} onCheck={onCheck}/>
            })}
        </div>
    )
}