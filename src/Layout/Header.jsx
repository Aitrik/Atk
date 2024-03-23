import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const {cartData}=useSelector(state=>state.Prod)
    return (
        <>
           <div>
           <div className="container-fluid">
            
            <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
                <div className="col-lg-4">
                    <Link to="/" style={{textDecoration:"none"}}>
                    <a href="" className="text-decoration-none">
                        <span className="h1 text-uppercase text-primary bg-dark px-2">
                            Multi
                        </span>
                        <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
                            Shop
                        </span>
                    </a>
                    </Link>
                </div>
                {/* <div className="col-lg-4 col-6 text-left">
                    <form action="">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search for products"
                            />
                            <div className="input-group-append">
                                <span className="input-group-text bg-transparent text-primary">
                                    <i className="fa fa-search" />
                                </span>
                            </div>
                        </div>
                    </form>
                </div> */}
                {/* <div className="col-lg-4 col-6 text-right">
                    <p className="m-0">Customer Service</p>
                    <h5 className="m-0">+012 345 6789</h5>
                </div> */}
            </div>
        </div>

        <div className="container-fluid bg-dark mb-30">
            <div className="row px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <a
                        className="btn d-flex align-items-center justify-content-between bg-primary w-100"
                        data-toggle="collapse"
                        href="#navbar-vertical"
                        style={{ height: 65, padding: "0 30px" }}
                    >
                        <h6 className="text-dark m-0">
                            
                            Shop Now
                        </h6>
                        
                    </a>
                    
                </div>
                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                        <a href="" className="text-decoration-none d-block d-lg-none">
                            <span className="h1 text-uppercase text-dark bg-light px-2">
                                Multi
                            </span>
                            <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                                Shop
                            </span>
                        </a>
                        <button
                            type="button"
                            className="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-between"
                            id="navbarCollapse"
                        >
                            <div className="navbar-nav mr-auto py-0">
                                <a href="index.html" className="nav-item nav-link active">
                                    <Link to='/'>Home</Link>
                                </a>
                                <a href="shop.html" className="nav-item nav-link">
                                    <Link to="/shop">Shop</Link>
                                </a>

                                
                               
                              
                               
                            </div>
                            <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                <a href="" className="btn px-0">
                                    <i className="fas fa-heart text-primary" />
                                    <span
                                        className="badge text-secondary border border-secondary rounded-circle"
                                        style={{ paddingBottom: 2 }}
                                    >
                                        0
                                    </span>
                                </a>
                               <Link to="/cart">
                               <a href="" className="btn px-0 ml-3">
                                    <i className="fas fa-shopping-cart text-primary" />
                                    <span
                                        className="badge text-secondary border border-secondary rounded-circle"
                                        style={{ paddingBottom: 2 }}
                                    >
                                        {cartData.length}
                                    </span>
                                </a>
                               </Link>
                                
                            </div>
                            {/* <a href="shop.html" className="nav-item nav-link">
                                    <Link to="/login">Login</Link>
                                </a> */}
                        </div>
                    </nav>
                </div>
            </div>
        </div>
       
        
           </div>

        </>
    )
}
