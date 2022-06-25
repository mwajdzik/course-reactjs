import React, {useState} from 'react';

const Accordion = ({items}) => {
    console.log("Accordion called!")

    const [activeIndex, setActiveIndex] = useState(null);
    console.log("activeIndex =", activeIndex)

    const itemClicked = (index) => {
        console.log("Item clicked!")
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active ' : '';

        return <React.Fragment key={item.title}>
            <div className={`title ${active}`} onClick={() => {
                itemClicked(index)
            }}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
    });

    return <div className="ui styled accordion">
        {renderedItems}
    </div>
};

export default Accordion;
