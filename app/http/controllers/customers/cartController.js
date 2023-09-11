//Registration Logic

function cartController(){
    return {
        index (req,res) {
            res.render('customers/cart')
        },
        update(req, res){
            // let cart = {
            //     items: {
            //         pizzaId: { items: pizzaObject, qty:0},
            //     },
            //     totoalQty: 0,
            //     totalPrice: 0
            // } 
  
    //NOTE for the first time creating cart and basic object structure   
            if (!req.session.cart){
                 req.session.cart = {
                     items: {},
                     totoalQty: 0,
                     totalPrice: 0
                 } 
            }
            let cart = req.session.cart   
            console.log(req.body)
            
    //NOTE  Check If items does not exist in cart  [Vedio- part:6 time:1:50] 
                 if(!cart.items[req.body._id]){
                     cart.items[req.body._id] = {
                         item: req.body,
                         qty: 1
                     }
                     cart.totalQty = cart.totalQty + 1
                     cart.totalPrice = cart.totalPrice + req.body.price
                 }else {
                     cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1
                     cart.totalQty = cart.totalQty + 1
                     cart.totalPrice = cart.totalPrice + req.body.price
                 }
            return res.json({ totalQty: req.session.cart.totalQty })
        }
    }
 }
 
 module.exports = cartController