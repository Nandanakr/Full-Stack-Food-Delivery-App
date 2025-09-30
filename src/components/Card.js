/*import React, { useEffect, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';
import { useRef } from 'react';
export default function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart()
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const [qty, setQty] = useState('1')
    const [size, setSize] = useState("")
    let foodItem = props.foodItems;


    const handleAddToCart = async () => {

        let food = []
        for (const item of data) {
            if (item.id === foodItem._id) {
                food = item;

                break;
            }
        }
        if (food !== []) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
                return
            }
            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size, img: props.ImgSrc })
                return
            }
            await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size, img: props.ImgSrc })



        }

        useEffect(() => {
            setSize(priceRef.current.value)
        }, [])


        let finalPrice = qty * parseInt(options[size]);

        return (
            <div>
                <div>
                    <div className="card mt-5" style={{ "width": "18rem", "maxHeight": "360px" }}>
                        <img src={foodItem.img} className="card-img-top" alt="..." style={{ height: "160px", objectFit: "fill" }} />
                        <div className="card-body">
                            <h5 className="card-title">{foodItem.name}</h5>
                            <div className='container w-100'>
                                <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setQty(e.target.value)}>
                                    {Array.from(Array(6), (e, i) => {
                                        return (
                                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                                        )
                                    })}
                                </select>

                                <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setQty(e.target.value)} >
                                    {priceOptions.map((data) => {

                                        return <option key={data} value={data}>{data}</option>

                                    })}


                                </select>
                                <div className='d-inline h-100 fs-5'>Rs{finalPrice}/-</div>
                            </div>

                        </div>
                        <hr style={{ margin: '0' }} />
                        <div className="d-flex justify-content-start">
                            <button className={'btn btn-success mt-2 ms-2 mb-2'} onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

*/

/*import React, { useEffect, useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';
import { useRef } from 'react';

export default function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart()
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const [qty, setQty] = useState('1')
    const [size, setSize] = useState("")
    let foodItem = props.foodItems;

    useEffect(() => {
        setSize(priceRef.current.value)
    }, [])

    const handleAddToCart = async () => {
        let food = []
        for (const item of data) {
            if (item.id === foodItem._id) {
                food = item;
                break;
            }
        }

        let finalPrice = qty * parseInt(options[size]);

        if (food !== []) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty })
                return
            } else if (food.size !== size) {
                await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size, img: props.ImgSrc })
                return
            }
           
        }
        await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size, img: props.ImgSrc })
    }

    // Declare finalPrice here
    let finalPrice = qty * parseInt(options[size]);

    return (
        <div>
            <div>
                <div className="card mt-5" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img src={foodItem.img} className="card-img-top" alt="..." style={{ height: "160px", objectFit: "fill" }} />
                    <div className="card-body">
                        <h5 className="card-title">{foodItem.name}</h5>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>

                            <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setQty(e.target.value)} >
                                {priceOptions.map((data) => {
                                    return <option key={data} value={data}>{data}</option>
                                })}
                            </select>
                            <div className='d-inline h-100 fs-5'>Rs{finalPrice}/-</div>
                        </div>
                    </div>
                    <hr style={{ margin: '0' }} />
                    <div className="d-flex justify-content-start">
                        <button className={'btn btn-success mt-2 ms-2 mb-2'} onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
*/
import React, { useEffect, useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';
import { useRef } from 'react';

export default function Card(props) {
    const dispatch = useDispatchCart();
    const data = useCart();
    const priceRef = useRef();
    const options = props.options;
    const priceOptions = Object.keys(options);
    const [qty, setQty] = useState('1');
    const [size, setSize] = useState('');
    const [finalPrice, setFinalPrice] = useState(0); // Added state for finalPrice
    const foodItem = props.foodItems;

    useEffect(() => {
        setSize(priceRef.current.value);
    }, []);

    useEffect(() => {
        // Calculate finalPrice whenever qty or size changes
        setFinalPrice(parseInt(qty) * parseInt(options[size]));
    }, [qty, size, options]);

    const handleAddToCart = async () => {
        const food = data.find(item => item.id === foodItem._id);

        if (food) {
            if (food.size === size) {
                await dispatch({ type: 'UPDATE', id: foodItem._id, price: finalPrice, qty: qty });
                return;
            } else if (food.size !== size) {
                await dispatch({
                    type: 'ADD',
                    id: foodItem._id,
                    name: foodItem.name,
                    price: finalPrice,
                    qty: qty,
                    size: size,
                    img: props.ImgSrc,
                });
                return;
            }
        }

        await dispatch({
            type: 'ADD',
            id: foodItem._id,
            name: foodItem.name,
            price: finalPrice,
            qty: qty,
            size: size,
            img: props.ImgSrc,
        });
    };

    return (
        <div>
            
                <div className="card mt-5" style={{ width: '18rem', maxHeight: '360px' }}>
                    <img src={foodItem.img} className="card-img-top" alt="..." style={{ height: '160px', objectFit: 'fill' }} />
                    <div className="card-body">
                        <h5 className="card-title">{foodItem.name}</h5>
                        <div className="container w-100">
                            <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e) => setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => (
                                    <option key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </select>

                            <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                                {priceOptions.map((data) => (
                                    <option key={data} value={data}>
                                        {data}
                                    </option>
                                ))}
                            </select>
                            <div className="d-inline h-100 fs-5">Rs{finalPrice}/-
                            </div>
                        
                    </div>
                    <hr style={{ margin: '0' }} />
                    <div className="d-flex justify-content-start">
                        <button className={'btn btn-success mt-2 ms-2 mb-2'} onClick={handleAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}