import React from 'react';
import ReactModal from '../ReactModal/ReactModal';
import './SingleProduct.css';

const SingleProduct = (props) => {
    //console.log(props);
    //console.log(props.product.title.slice(0, 10));
    const { title, image } = props.product;
    const { setCartCount } = props;
    return (
        <div data-aos="flip-left"
            data-aos-easing="linear"
            data-aos-duration="1500"

            className="col-md-4 " >
            <div className="card p-3 border">
                <img src={image} alt="img" className="img-fluid w-50 m-auto" />
                <h3>{title.slice(0, 10)}</h3>
                <div className="d-flex justify-content-around">
                    <button className="btn btn-success" onClick={setCartCount}>Add to cart</button>
                    <button className="btn btn-danger">Delete to cart</button>
                    {/* <button className="btn btn-info">Details</button> */}
                    <ReactModal product={props.product}></ReactModal>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;