import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { single } from '../Redux/Productslice'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
export default function Category() {
    const [order, setOrder] = useState("default")
    const dispatch = useDispatch()
    const { singlecat } = useSelector(state => state.Prod)
    const { id } = useParams()
    useEffect(() => {
        dispatch(single(id))
    }, [])
    console.log(singlecat)

    const sorting = (sortBy) => {
        const products = [...singlecat]
        if (sortBy == "highTolow") {
            products.sort((a, b) => b.price - a.price)
        }
        if (sortBy == "lowTohigh") {
            products.sort((a, b) => a.price - b.price)
        }
        return products
    }
    const handlechange = (e) => {
        setOrder(e)
    }

    return (
        <>
            <div className="col-lg-9 col-md-8">
                <div className="row pb-3">
                    <div className="col-12 pb-1">
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div>
                                <button className="btn btn-sm btn-light">
                                    <i className="fa fa-th-large" />
                                </button>
                                <button className="btn btn-sm btn-light ml-2">
                                    <i className="fa fa-bars" />
                                </button>
                            </div>
                            <div className="ml-2">
                                <div className="btn-group">
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-light dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        Sorting
                                    </button>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#" onClick={() => handlechange("lowTohigh")}>
                                            Low to High
                                        </a>
                                        <a className="dropdown-item" href="#" onClick={() => handlechange("highTolow")}>
                                            High to Low
                                        </a>
                                        <a className="dropdown-item" href="#" onClick={() => handlechange("default")}>
                                            Default
                                        </a>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {sorting(order).map((item) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                           <Link to={`/shop/${item.id}`}>
                           <div className="product-item bg-light mb-4">
                                <div className="product-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src={item?.images} alt="" />
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

                    <div className="col-12">
                        <nav>
                            <ul className="pagination justify-content-center">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#">
                                        Previous
                                    </a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        Next
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>


        </>
    )
}
