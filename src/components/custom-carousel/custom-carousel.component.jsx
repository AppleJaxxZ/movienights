
import React, { useState } from 'react';
import './custom-carousel.styles.scss'
import { useSwipeable } from 'react-swipeable'



export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }
        setActiveIndex(newIndex);
    };

    const handlers = useSwipeable({
        onSwipeLeft: () => updateIndex(activeIndex + 1),
        onSwipeRight: () => updateIndex(activeIndex - 1)
    })
    return (

        <div {...handlers} className="curousel">
            <div
                className="inner"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            <div className="indicators">
                <button onClick={() => {
                    updateIndex(activeIndex - 1);
                }}> Prev </button>
                <button onClick={() => {
                    updateIndex(activeIndex + 1)
                }}>Next</button>
            </div>
        </div>

    );

};

export default Carousel;

