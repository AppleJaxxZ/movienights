import React from 'react';
import "./custom-button.styles.scss";


const CustomButton = (props) => (

    <div className="customButton__wrapper">
        <button className="customButton__button">{props.title}</button>
    </div>
);

export default CustomButton;
