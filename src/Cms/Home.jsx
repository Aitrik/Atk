import React, { useEffect } from 'react'
import { Carousel, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { categories, products } from '../Redux/Productslice'
import { Link } from 'react-router-dom'

export default function Home() {

    const dispatch = useDispatch()
    const categor = useSelector(state => state.Prod.category)
    const prod = useSelector(state => state.Prod.homeproducts)


    useEffect(() => {
        dispatch(categories())
    }, [])

    useEffect(() => {
        dispatch(products())
    }, [])

    console.log(categor)
    console.log(prod)

    return (
        <>
            <div>
                <div>
                    <Carousel style={{ height: '300px' }} indicators={false}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="img/carousel-1.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption style={{ textAlign: 'center' }}>
                                <h1 style={{ color: "white", fontSize: "70px", marginTop: "200px", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Men's Fashion</h1>
                                <p style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <button style={{
                                    backgroundColor: 'orange',
                                    border: 'none',
                                    color: 'black',
                                    padding: '15px 32px',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    fontSize: '16px',
                                    margin: '4px 2px',
                                    cursor: 'pointer',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    transition: '0.3s'
                                }}>
                                    Explore
                                </button>

                            </Carousel.Caption>

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="img/carousel-2.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h1 style={{ color: 'white', fontSize: "70px", marginTop: "200px", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Women's Fashion</h1>
                                <p style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <button style={{
                                    backgroundColor: 'orange',
                                    border: 'none',
                                    color: 'black',
                                    padding: '15px 32px',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    fontSize: '16px',
                                    margin: '4px 2px',
                                    cursor: 'pointer',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    transition: '0.3s'
                                }}>
                                    Explore
                                </button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="img/carousel-3.jpg"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h1 style={{ color: 'white', fontSize: "70px", marginTop: "200px", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Kid's Fashion</h1>
                                <p style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <button style={{
                                    backgroundColor: 'orange',
                                    border: 'none',
                                    color: 'black',
                                    padding: '15px 32px',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    fontSize: '16px',
                                    margin: '4px 2px',
                                    cursor: 'pointer',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                    transition: '0.3s'
                                }}>
                                    Explore
                                </button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>

            <>
                {/* Featured Start */}
                <div className="container-fluid pt-5" style={{ marginTop: "370px" }}>
                    <div className="row px-xl-5 pb-3">
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-1" >
                            <div
                                className="d-flex align-items-center bg-light mb-4"
                                style={{ padding: 30, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}
                            >
                                <h1 className="fa fa-check text-primary m-0 mr-3" />
                                <h5 className="font-weight-semi-bold m-0" style={{ color: "black", fontWeight: "bolder" }}>Quality Product</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                            <div
                                className="d-flex align-items-center bg-light mb-4"
                                style={{ padding: 30, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}
                            >
                                <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
                                <h5 className="font-weight-semi-bold m-0" style={{ color: "black", fontWeight: "bolder" }}>Free Shipping</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                            <div
                                className="d-flex align-items-center bg-light mb-4"
                                style={{ padding: 30, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}
                            >
                                <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
                                <h5 className="font-weight-semi-bold m-0" style={{ color: "black", fontWeight: "bolder" }}>14-Day Return</h5>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                            <div
                                className="d-flex align-items-center bg-light mb-4"
                                style={{ padding: 30, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}
                            >
                                <h1 className="fa fa-phone-volume text-primary m-0 mr-3" style={{ color: "yellow" }} />
                                <h5 className="font-weight-semi-bold m-0" style={{ color: "black", fontWeight: "bolder" }}>24/7 Support</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Featured End */}
            </>

            <div className="container-fluid pt-5" style={{ marginTop: "50px" }}>
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="bg-secondary pr-3">Categories</span>
                </h2>
                <div className="row px-xl-5 pb-3" style={{ gap: "30px" }}>
                    {categor.slice(0, 5).map((item, index) => (
                        <div key={index} className="col-lg-2 col-md-2 col-sm-4 col-6 pb-1">
                            {/* Wrap each category item with Link */}
                            <Link to={`/category/${item.id}`} className="text-decoration-none">
                                <div className="cat-item d-flex align-items-center mb-4">
                                    <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
                                        <img className="img-fluid" src={item.image} alt="" />
                                    </div>
                                    <div className="flex-fill pl-3">
                                        <h6>{item.name}</h6>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            {/* Fashion */}
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="bg-secondary pr-3">Featured Products</span>
                </h2>
                <div className="row px-xl-5">
                    {prod.slice(0, 8).map((item) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                           <Link to={`/shop/${item.id}`}>
                           <div className="product-item bg-light mb-4">
                                <div className="product-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src={item.images} alt="" />
                                    <div className="product-action">
                                        <a className="btn btn-outline-dark btn-square" href="">
                                            <i className="fa fa-shopping-cart" />
                                        </a>
                                        <a className="btn btn-outline-dark btn-square" href="">
                                            <i className="far fa-heart" />
                                        </a>
                                        <a className="btn btn-outline-dark btn-square" href="">
                                            <i className="fa fa-sync-alt" />
                                        </a>
                                        <a className="btn btn-outline-dark btn-square" href="">
                                            <i className="fa fa-search" />
                                        </a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <a className="h6 text-decoration-none text-truncate" href="">
                                        {item?.title?.slice(0,30)}
                                    </a>
                                    <div className="d-flex align-items-center justify-content-center mt-2">
                                        <h5>${item.price}</h5>

                                    </div>
                                    <div className="d-flex align-items-center justify-content-center mb-1">
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small>(99)</small>
                                    </div>
                                    
                                </div>
                            </div>
                           </Link>
                        </div>
                    ))}

                </div>


            </div>

            <>
                {/* Offer Start */}
                <div className="container-fluid pt-5 pb-3">
                    <div className="row px-xl-5">
                        <div className="col-md-6">
                            <div className="custom-offer mb-30" style={{ height: 300, backgroundColor: "#FFC107", borderRadius: 10, overflow: "hidden" }}>
                                <img className="img-fluid" src="img/offer-1.jpg" alt="Offer 1" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                <div className="offer-text" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
                                    <h6 className="text-white text-uppercase" style={{ fontSize: 16 }}>Exclusive Deal</h6>
                                    <h3 className="text-white mb-3" style={{ fontSize: 28, fontWeight: "bold" }}>Save 30%</h3>
                                    <a href="#" className="btn btn-primary btn-lg">
                                        Shop Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="custom-offer mb-30" style={{ height: 300, backgroundColor: "#4CAF50", borderRadius: 10, overflow: "hidden" }}>
                                <img className="img-fluid" src="img/offer-2.jpg" alt="Offer 2" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                <div className="offer-text" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
                                    <h6 className="text-white text-uppercase" style={{ fontSize: 16 }}>Limited Time Offer</h6>
                                    <h3 className="text-white mb-3" style={{ fontSize: 28, fontWeight: "bold" }}>Flat 25% Off</h3>
                                    <a href="#" className="btn btn-primary btn-lg">
                                        Discover Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Offer End */}
            </>

            {/* Electronics */}
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="bg-secondary pr-3">Limited Time Offer</span>
                </h2>
                <div className="row px-xl-5">
                    {prod.slice(17, 21).map((item) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                            <Link to={`/shop/${item.id}`}>
                            <div className="product-item bg-light mb-4">
                                <div className="product-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src={item.images} alt="" />
                                    <div className="product-action">
                                        <a className="btn btn-outline-dark btn-square" href="">
                                            <i className="fa fa-shopping-cart" />
                                        </a>
                                        <a className="btn btn-outline-dark btn-square" href="">
                                            <i className="far fa-heart" />
                                        </a>
                                        <a className="btn btn-outline-dark btn-square" href="">
                                            <i className="fa fa-sync-alt" />
                                        </a>
                                        <a className="btn btn-outline-dark btn-square" href="">
                                            <i className="fa fa-search" />
                                        </a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <a className="h6 text-decoration-none text-truncate" href="">
                                        {item.title.slice(0,30)}
                                    </a>
                                    <div className="d-flex align-items-center justify-content-center mt-2">
                                        <h5>${item.price}</h5>

                                    </div>
                                    <div className="d-flex align-items-center justify-content-center mb-1">
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small className="fa fa-star text-primary mr-1" />
                                        <small>(99)</small>
                                    </div>
                                   
                                </div>
                                
                            </div>
                            </Link>
                        </div>
                    ))}

                </div>


            </div>
          





        </>


    )
}
