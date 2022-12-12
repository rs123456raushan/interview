let express = require('express');
let router = require(Express.router());
let Product = require("./schema.js");

router.post("/add", (req, res) => {
    let arr = [];
    while(req.body.length > 0){
        let newProduct = {
            productId: req.body.productId,
            quantity: req.body.quantity,
            operation: req.body.operation
        };
        arr.push(newProduct);
    }
    Product.insertOne(arr);
    res.send(arr);
}
);

router.delete("/remove", (req, res) => {
    Product.deleteOne(Product.findOne(req.body.productId));
    res.send("Success");
}
);

module.exports(router);
