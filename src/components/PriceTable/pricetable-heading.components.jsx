import React from 'react';
import './pricetable.styles.scss';


const PriceTableHeading = () => {
    return (
        <div className="priceTable__heading-container">
            <span className="pricetable__heading-span-large" >A Plan for Everyone. Pick Yours.</span><br />
            <span className="pricetable__heading-span-small" >Change plans anytime.</span>
        </div>
    )
}

export default PriceTableHeading;