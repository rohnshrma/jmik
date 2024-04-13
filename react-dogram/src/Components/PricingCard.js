const PricingCard = (props) => {
    return <div className="pricingCard">
        <div className="card-header">
            {props.name}
        </div>
        <div className="card-body">
            <h3>{props.price}</h3>
            <p>{props.f1}</p>
            <p>{props.f2}</p>
            <p>{props.f3}</p>
            <p>{props.f4}</p>
            <button>Buy Now</button>
        </div>
    </div>
}

export default PricingCard