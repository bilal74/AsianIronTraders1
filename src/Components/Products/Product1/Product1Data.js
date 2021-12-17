import React from 'react'

export const Product1Data = (props) => {
    return (
        <div>
                <div className="parentCard">
                    <div class="card" id="product1Data">
                        <img src={props.img} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">SL - {props.sNo}</h5>
                        </div>
                    </div>

                </div>
        </div>
    )
}
