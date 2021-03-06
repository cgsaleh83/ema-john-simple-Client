import { Button } from '@material-ui/core';
import React from 'react';

const Inventory = (props) => {

    const handleAddProduct = () => {
        const product = {};
        fetch("https://fathomless-taiga-01948.herokuapp.com/addProduct", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })
    }

    return (
        <div className="ship-from" style={{ textAlign: 'center' }}>
            <from action="">

                <p><span>Name: </span><input type="text"/></p>
                <p><span>Price: </span><input type="text"/></p>
                <p><span>Quantity: </span><input type="text"/></p>
                <p><span>Product Image: </span><input type="file"/></p>

                <Button onClick={handleAddProduct} variant="contained" color="primary">
                    Add Product
                </Button>
            </from>

        </div>
    );
};

export default Inventory;