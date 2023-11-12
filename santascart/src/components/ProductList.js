import React from 'react';

const ProductList = ({ data }) => {
    return (
        <div>
            {data && data.map((item, index) => (
                <div className='card-container' key={index}>
                    <div className='card-img-container'>
                        <img className="card-img" src={item.Image} alt={item.Name} />
                    </div>
                    <div className='card-price'>
                        ${item.Price}
                    </div>
                    <div className='card-name'>
                        {item.Name}
                    </div>
                    <button className='price-alert'>Get Notified</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;