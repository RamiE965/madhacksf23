import data from '../data/data.json'

const ProductList = () => {
    

    return (
      <div>
        {
            data.map( data => {
                return (
                    <div className='card-container'>
                        <div className='card-img-container'>
                        <img className="card-img" src={ data.Image }/>
                        </div>
                        <div className='card-price'>
                        ${ data.Price }
                        </div>
                        <div className='card-name'>
                        { data.Name }
                        </div>
                        <button className='price-alert'>Get Notified</button>
                    </div>
                    
                )
            })
        }
    
        
      </div>
    )
}

export default ProductList