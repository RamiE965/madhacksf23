import React, { useState } from 'react';

const ProductList = ({ data }) => {
    const [showForm, setShowForm] = useState(null);
    const [userSetPrice, setUserSetPrice] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const handleSubmit = (tcin, currentPrice, e) => {
        e.preventDefault();

        fetch('http://127.0.0.1:8000/create-alert/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tcin: tcin,
                current_price: currentPrice, // add this line
                user_set_price: userSetPrice,
                user_email: userEmail,
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setShowForm(null); // Hide form after submission
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

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
                    <button 
                        className='price-alert' 
                        onClick={() => setShowForm(item["TCIN"])}
                    >
                        Get Notified
                    </button>
                    {showForm === item["TCIN"] && (
                        <form onSubmit={(e) => handleSubmit(item["TCIN"], e)}>
                            <input
                                type="number"
                                value={userSetPrice}
                                onChange={e => setUserSetPrice(e.target.value)}
                                placeholder="Your Target Price"
                                required
                            />
                            <input
                                type="email"
                                value={userEmail}
                                onChange={e => setUserEmail(e.target.value)}
                                placeholder="Your Email"
                                required
                            />
                            <button type="submit">Set Price Alert</button>
                        </form>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ProductList;