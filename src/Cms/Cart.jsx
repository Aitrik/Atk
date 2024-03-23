import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../Redux/Productslice';

export default function Cart() {
    const { cartData } = useSelector(state => state.Prod);
    console.log(cartData)
    const dispatch=useDispatch()

    const remove=(index)=>{
        dispatch(removeCart(index))
    }

    return (
        <>
            {/* Breadcrumb Start */}
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-12">
                        <nav className="breadcrumb bg-light mb-30">
                            <a className="breadcrumb-item text-dark" href="#">
                                Home
                            </a>
                            <a className="breadcrumb-item text-dark" href="#">
                                Shop
                            </a>
                            <span className="breadcrumb-item active">Shopping Cart</span>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}
            {/* Cart Start */}
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-light table-borderless table-hover text-center mb-0">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartData.map((item, index) => (
                                    <tr key={index}>
                                        <td className="align-middle">
                                            <img src={item.product.images} alt={item?.product?.title.slice(0,20)} style={{ width: 50 }} />{" "}
                                            {item?.product?.title.slice(0,10)+"..."}
                                        </td>
                                        <td className="align-middle">${item.product.price}</td>
                                        <td className="align-middle">
                                            <div className="input-group quantity mx-auto" style={{ width: 100 }}>
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus">
                                                        <i className="fa fa-minus" />
                                                    </button>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control bg-secondary border-0 text-center"
                                                    value={item.quantity}
                                                />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus">
                                                        <i className="fa fa-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">
                                            <button className="btn btn-sm btn-danger" onClick={()=>remove(index)}>
                                                <i className="fa fa-times" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* Remaining part of your component */}
                </div>
            </div>
            {/* Cart End */}
        </>
    );
}
