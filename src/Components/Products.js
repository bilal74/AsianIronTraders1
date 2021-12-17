import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export const Products = () => {
    return (
        <div>
            {/* <h1>Products</h1> */}

            <div className="productsNav">
                <Link to="/products/design1">Lamps</Link>
                <Link to="/products/design2">Design2</Link>
                <Link to="/products/design3">Design3</Link>
                <Link to="/products/design4">Design4</Link>
                <Link to="/products/design5">Design5</Link>
            </div>

        </div>
    )
}
