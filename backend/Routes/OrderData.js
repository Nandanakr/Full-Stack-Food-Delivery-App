/*const express=require('express')
const router=express.Router()
const Order = require('../models/Orders')

router.post('/orderData', async (req,res) =>{

     let data=req.body.order_data
     await data.splice(0,0, {Order_date: req.body.order_date})

     let eId = await Order.findOne({'email': req.body.email})
     console.log(eId)
     if(eId === null){
        try{
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(()=>{
                res.json({success:true})
            })
        } catch (error){
            console.log(error.message)
            res.send("Server Error",error.message)
        }
     }

     else{
        try{

            await Order.findOneAndUpdate({email: req.body.email},
                {  $push: {order_date: date} }).then(() =>{
                   res.json({ success:json })
                })

            } catch (error){
               
                res.send("Server Error", error.message)
            }
        }         

})

module.exports = router;*/
const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');

router.post('/orderData', async (req, res) => {
  try {
    let data = req.body.order_data;
    // Fix the typo in the key
    await data.splice(0, 0, { order_date: req.body.order_date });

    let eId = await Order.findOne({ 'email': req.body.email });

    if (eId === null) {
      await Order.create({
        email: req.body.email,
        order_data: [data]
      });

      // Simplify the response handling
      res.json({ success: true });
    } else {
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      );

      // Use proper JSON response
      res.json({ success: true });
    }
  } catch (error) {
    console.error(error);
    // Use proper error response
    res.status(500).send("Server Error: " + error.message);
  }
})

router.post('/myorderData', async (req, res) => {
 
  try{
      let myData = await Order.findOne({'email':req.body.email})
      res.json({orderData: myData})
  }
  catch(error){
    res.send("Server error",error.message)

  }
})

module.exports = router;

