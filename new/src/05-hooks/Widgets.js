import React from 'react';

import Accordion from "./components/Accordion";

const items = [
    {title: "What's React", content: "React is a front end js framework"},
    {title: "Why use React", content: "React is a favorite js library"},
    {title: "How do you use React", content: "You create components"},
];

export default () => {
    return <div className='ui container'>
        <Accordion items={items}/>
    </div>
};
