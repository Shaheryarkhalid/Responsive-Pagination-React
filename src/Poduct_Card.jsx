import './Poduct_Card.css'

function Poduct_Card({Products}) {

  return (
  <>
    <div className="Product-Card">
        <img src={Products.thumbnail} alt="Test JPG" />
        <div className="Bottom-Section">
            
            <div className="Price">
                <span className="Discount-Pice">{Products.price}$</span>
                <span className="Oiginal-Pice">{Products.discountPercentage}%</span>
            </div>

            <span className="Title">{Products.title}</span>

            <div className="Reviews">
                        {Products.rating} &#9734; {/*  &#9733; */}
            </div>
            <button className="Add-To-Cart">
              Add To Card
            </button>
        </div>
    </div>  
  </>
  )
}
export default Poduct_Card