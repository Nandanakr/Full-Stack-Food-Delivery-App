/*import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {

    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:5000/api/myOrderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",        
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
        })



        // await res.map((data)=>{
        //    console.log(data)
        // })


    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='container'>
                <div className='row'>

                    {orderData !== {} ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div  >
                                                    {arrayData.Order_date ? <div className='m-auto mt-5'>

                                                        {data = arrayData.Order_date}
                                                        <hr />
                                                    </div> :

                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1'>{arrayData.qty}</span>
                                                                        <span className='m-1'>{arrayData.size}</span>
                                                                        <span className='m-1'>{data}</span>
                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                            ₹{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>



                                                    }

                                                </div>
                                            )
                                        })

                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>


            </div>

            <Footer />
        </div>
    )
}*/
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    const userEmail = localStorage.getItem('userEmail');
    console.log(userEmail);

    try {
      const response = await fetch("http://localhost:5000/api/myorderData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: userEmail
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch my order data');
      }

      const data = await response.json();
      console.log('Received data:', data);

      if (!data || !data.orderData || !Array.isArray(data.orderData.order_data)) {
        console.error('Invalid data structure received:', data);
        throw new Error('Invalid data structure received');
      }

      // Flatten the order_data array
      const flattenedOrderData = data.orderData.order_data.flat();

      setOrderData(flattenedOrderData);
    } catch (error) {
      console.error('Error fetching or rendering my order data:', error.message);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
  
      <div className='container mt-4'> {/* Added 'mt-4' for top margin */}
        {Array.isArray(orderData) && orderData.length > 0 ? (
          orderData.map((item, index) => (
            <div key={index}>
              {index === 0 && (
                <div className='date-header'>
                  <h2>Date: {item.Order_date !== 'N/A' ? item.Order_date : 'Not Available'}</h2>
                  <hr />
                </div>
              )}
              {item.qty && item.size && item.price && (
                <div className='row'>
                  <div className='col-12 col-md-6 col-lg-3'>
                    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <div className='container w-100 p-0' style={{ height: "38px" }}>
                          <span className='m-1'>Quantity: {item.qty}</span>
                          <span className='m-1'>Size: {item.size}</span>
                          <div className='d-inline ms-2 h-100 w-20 fs-5'>
                            ₹{item.price}/-
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
  
      <Footer />
    </div>
  );
  
  
  
        }