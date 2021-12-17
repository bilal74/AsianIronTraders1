import React from 'react'
// import { A } from './media/product1/images/one1.jpeg';
//  import logo from './logo.png';
import img from './media/product1/images/one1.jpeg';
import data from './Data/lampsData';
import { Product1Data } from './Product1/Product1Data';

export const Product1 = () => {
    return (
        <div className='container' id="lamps1">
             <h2>Lamps</h2>
                {/* <div className="product1">
                    {data.productData.map((item, index)=>{
                        return(
                            <Product1Data img={item.imgsrc} sNo={index+1} key={index}/>
                            )
                        })}
                </div>               */}
                <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-12 mx-auto">
                        
                        <div className="row row-cols-1 row-cols-md-5 g-4">
                            {
                             data.productData.map((item, index) => {
                                    return (
                                    <Product1Data img={item.imgsrc} sNo={index+1} key={index}/>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
