import React, {useContext, useEffect} from 'react';
import logo from "../../Asset/webLogo.png";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../Context/loginSessionContext'
import '../componentStyle.css';
import { handleAuth } from '../../Service/commonService';


export default function Cart(){
    const { authState: {isAuthenticated}} = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        const path = handleAuth(isAuthenticated);
        if(path!=null) navigate(path)
    });

    return(
        <section class = "h-100 h-custom">
            <div class = "container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class = "col">
                        <div class ="card">
                            
                            <div class ="card-body">
                                <div class = "row">
                                    <div class = "col">
                                            <h2>Shopping Cart</h2>
                                            <hr></hr>
                                        
                                        <div class="d-flex justify-content-between align-items-center mb-4">
                                                <button type="button" class = "btn btn-primary" action="selectAll">Select All</button> 
                                                <button type="button" class = "btn btn-danger" action="deleteAll">Delete All</button>
                                        </div>

                                        <hr></hr>

                                        
                                        <div class="row mb-4 d-flex justify-content-between align-items-center">
                                            <div class="col-md-2 col-lg-2 col-xl-2">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                                                class="img-fluid rounded-3" style ={{width:"100px"}}/>
                                            </div>
                                            
                                            <div class="col-md-3 col-lg-3 col-xl-3">
                                            <h6 class="text-black mb-0">Cotton T-shirt</h6>
                                            </div>
                                            
                                            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                            <button class="btn btn-secondary"
                                                onclick="">
                                                -
                                            </button>

                                            <input id="form1" min="0" name="quantity" value="1" type="number"
                                                class="form-control form-control-sm" />

                                            <button class="btn btn-secondary px-2"
                                                onclick="">
                                                +
                                            </button>
                                            </div>

                                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h6 class="mb-0">€ 44.00</h6>
                                            </div>

                                            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                                <button type ="button" class ="btn">X</button>
                                            </div>
                                        </div>

                                        <hr></hr>

                                        <div class="row mb-4 d-flex justify-content-between align-items-center">
                                            <div class="col-md-2 ">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                                                class="img-fluid rounded-3" style ={{width:"100px"}}/>
                                            </div>
                                            
                                            <div class="col-md-3 ">
                                                <h6 class="text-black mb-0"> T-shirt</h6>
                                            </div>
                                            
                                            <div class="col-md-3 col-xl-2 d-flex">
                                                <button class="btn btn-secondary"
                                                    onclick="">
                                                    -
                                                </button>

                                            <input id="form1" min="0" name="quantity" value="1" type="number"
                                                class="form-control form-control-sm" />


                                            <button class="btn btn-secondary px-2"
                                                onclick="">
                                                +
                                            </button>
                                            </div>

                                            <div class="col-md-3 col-xl-2 offset-lg-1">
                                                <h6 class="mb-0">200.000 VND</h6>
                                            </div>

                                            <div class="col-md-1 col-xl-1 text-end">
                                                <button type ="button" class ="btn">X</button>
                                            </div>
                                        </div>

                                        <hr></hr>

                                        <div class="row mb-4 d-flex justify-content-between align-items-center">
                                            <div class="col-md-2 col-lg-2 col-xl-2">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
                                                class="img-fluid rounded-3" style ={{width:"100px"}}/>
                                            </div>
                                            
                                            <div class="col-md-3 col-lg-3 col-xl-3">
                                            <h6 class="text-black mb-0">Cotton T-shirt</h6>
                                            </div>
                                            
                                            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                            <button class="btn btn-secondary"
                                                onclick="">
                                                -
                                            </button>

                                            <input id="form1" min="0" name="quantity" value="1" type="number"
                                                class="form-control form-control-sm" />

                                            <button class="btn btn-secondary px-2"
                                                onclick="">
                                                +
                                            </button>
                                            </div>

                                            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                <h6 class="mb-0">500.000.000VND</h6>
                                            </div>

                                            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                                <button type ="button" class ="btn">X</button>
                                            </div>
                                        </div>

                                        <hr></hr>


                                    </div>
                                    <div class = "col-lg-4 bg-grey">
                                        <div class = "p-5">
                                            <h3>Location</h3>
                                            <p>Customer Address</p>

                                            <hr></hr>

                                            <h5>Order Summary</h5>

                                            <div class = "d-flex justify-content-between">
                                                <p>Subtotal</p>
                                                <p>50.000.000 VND</p>
                                            </div>

                                            <div class = "d-flex justify-content-between">
                                                <p>Shipping Fee</p>
                                                <p>200.000 VND</p>
                                            </div>

                                            <div class = "d-flex justify-content-between">
                                                <p>Total</p>
                                                <p>50.200.000 VND</p>
                                            </div>

                                            <div class = "d-flex justify-content-between">
                                                <button type = "button" class = "btn btn-success btn-block btn-lg ">Confirm Order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
    
    )
}